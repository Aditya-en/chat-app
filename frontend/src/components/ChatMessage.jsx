import React from "react";
import styles from "./ChatMessage.module.css";
import useConversation from "../zustand/useConversation";
const ChatMessage = ({ message }) => {
  // console.log("this is it", message.message);
  const { selectedConversation } = useConversation();
  function isSender(message) {
    return message.receiverId === selectedConversation?._id;
  }
  console.log(isSender(message));
  return (
    <>
      <div
        className={`${styles["Message"]} ${
          isSender(message) ? styles["sender"] : ""
        }`}
      >
        {console.log(message)}
        <p>{message.message}</p>
      </div>
      {/* <div className={`${styles["Message"]} }`}>
        <p>{message.message}</p>
      </div> */}
    </>
  );
};

export default ChatMessage;
