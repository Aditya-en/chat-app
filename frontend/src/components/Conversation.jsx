import React from "react";
import styles from "./Conversation.module.css";
import useConversation from "../zustand/useConversation";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <div
      onClick={() => {
        setSelectedConversation(conversation);
      }}
      className={`${styles["chat"]} ${isSelected ? styles["active"] : ""}`}
    >
      {conversation.fullname}
    </div>
  );
};

export default Conversation;
