import React from "react";
import styles from "./ChatMessage.module.css";
const ChatMessage = ({ message }) => {
  console.log(message);
  return (
    <div className={styles["Message"]}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  );
};

export default ChatMessage;
