import React from "react";
import styles from "./ChatMessage.module.css";
import useConversation from "../zustand/useConversation";
function extractTime(createdAt) {
  const date = new Date(createdAt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
}

const ChatMessage = ({ message, sender }) => {
  // console.log("this is it", message.message);
  const { selectedConversation } = useConversation();

  // console.log(isSender(message));
  return (
    <>
      <div className={`${styles["Message"]} ${sender ? styles["sender"] : ""}`}>
        <p>{message.message}</p>
      </div>
      <span className={sender ? styles["sender-time"] : ""}>
        {extractTime(message.createdAt)}
      </span>
    </>
  );
};

export default ChatMessage;
