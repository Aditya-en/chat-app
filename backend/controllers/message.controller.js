import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";
import { getUserSocketId, io } from "../socket/socket.js";

async function sendMessage(req, res) {
  try {
    // console.log("message sent");
    const { message } = req.body;
    const { Id: receiverId } = req.params;
    const senderId = req.user._id;
    // console.log("checkpoint 1");
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    // console.log("conversation : ", conversation);
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getUserSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in send message controller : ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getMessages(req, res) {
  try {
    const senderId = req.user._id;
    const { Id: userToChat } = req.params;
    // console.log(senderId, userToChat);

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages");
    if (!conversation) {
      res.status(200).json([]);
    }
    // console.log(conversation);
    const messages = conversation?.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in get message controller :", error);
  }
}

export default sendMessage;
