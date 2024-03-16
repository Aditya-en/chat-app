import React, { useState } from "react";
import styles from "./ChatPage.module.css";
import SideBar from "../components/SideBar";
import ChatMessage from "../components/ChatMessage";
import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation";
import useGetMessages from "../hooks/useGetMessages";
import useSendMessage from "../hooks/useSendMessage";
const ChatPage = () => {
  const { logout } = useLogout();
  const { messages } = useGetMessages();
  const [message, setMessage] = useState("");

  const { selectedConversation, setSelectedConversation } = useConversation();
  console.log(selectedConversation);
  const { sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    // console.log(message);
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className={styles["container"]}>
      <h1>FeelTalk</h1>
      <button onClick={logout}>LogOut</button>
      <div className={styles["chat-interface"]}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.chatting}>
          <div className={styles.box}>
            <span>profilepic</span>
            {selectedConversation ? (
              <span>{selectedConversation.fullname}</span>
            ) : (
              ""
            )}
          </div>
          <div className={styles.chatcontainer}>
            {messages.map((message) => (
              <ChatMessage message={message} key={message._id} />
            ))}
          </div>
          <form onSubmit={handleSubmit} className={styles.input}>
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
