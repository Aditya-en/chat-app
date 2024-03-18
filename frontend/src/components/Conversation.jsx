import React from "react";
import styles from "./Conversation.module.css";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const online = onlineUsers.includes(conversation._id);
  // console.log("here", conversation);

  return (
    <div
      onClick={() => {
        setSelectedConversation(conversation);
      }}
      className={`${styles["chat"]} ${isSelected ? styles["active"] : ""}`}
    >
      <img
        className={online ? styles.online : ""}
        src={conversation.profilepic}
        alt=""
      />
      <p>{conversation.fullname}</p>
    </div>
  );
};

export default Conversation;
