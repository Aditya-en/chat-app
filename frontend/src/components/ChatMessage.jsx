import React from "react";
import styles from "./ChatMessage.module.css";
const ChatMessage = ({ message }) => {
  // console.log("this is it", message.message);
  return (
    <div className={styles["Message"]}>
      <p>{message.message}</p>
    </div>
  );
};

export default ChatMessage;
