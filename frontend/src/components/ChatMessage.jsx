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

const ChatMessage = ({ message }) => {
  // console.log("this is it", message.message);
  const { selectedConversation } = useConversation();
  function isSender(message) {
    return message.receiverId === selectedConversation?._id;
  }
  // console.log(isSender(message));
  return (
    <>
      <div
        className={`${styles["Message"]} ${
          isSender(message) ? styles["sender"] : ""
        }`}
      >
        {/* {console.log(message)} */}
        <p>{message.message}</p>
      </div>
      <span className={isSender(message) ? styles["sender-time"] : ""}>
        {extractTime(message.createdAt)}
      </span>
      {/* <div className={`${styles["Message"]} }`}>
        <p>{message.message}</p>
      </div> */}
    </>
  );
};

export default ChatMessage;
