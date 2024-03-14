import React from "react";
import styles from "./ChatPage.module.css";
import SideBar from "../components/SideBar";
import ChatMessage from "../components/ChatMessage";
import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation";
import useGetMessages from "../hooks/useGetMessages";
const ChatPage = () => {
  const { logout } = useLogout();
  const { messages, loading } = useGetMessages();
  const { selectedConversation, setSelectedConversation } = useConversation();
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
              <ChatMessage message={message} />
            ))}

            {/* <ChatMessage />
            <ChatMessage />
            <ChatMessage /> */}
          </div>
          <form className={styles.input}>
            <input type="text" placeholder="Message" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
