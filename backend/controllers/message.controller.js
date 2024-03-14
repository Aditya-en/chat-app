import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";

async function sendMessage(req, res) {
  try {
    // console.log("message sent");
    const { message } = req.body;
    const { Id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
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

    await Promise.all(conversation.save(), newMessage.save());

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getMessages(req, res) {
  try {
    const senderId = req.user._id;
    const { Id: userToChat } = req.params;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages");
    if (!conversation) {
      res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in message controller :", error.message);
  }
}

export default sendMessage;
