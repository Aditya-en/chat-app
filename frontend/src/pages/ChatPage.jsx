import React, { useState } from "react";
import styles from "./ChatPage.module.css";
import SideBar from "../components/SideBar";
import ChatMessage from "../components/ChatMessage";
import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation";
import useGetMessages from "../hooks/useGetMessages";
import useSendMessage from "../hooks/useSendMessage";
import useListenMessages from "../hooks/useListenMessages";
import { useRef, useEffect } from "react";

const ChatPage = () => {
  function isSender(message) {
    return message.receiverId === selectedConversation?._id;
  }
  const { logout } = useLogout();
  const { messages, loading } = useGetMessages();
  const [message, setMessage] = useState("");
  useListenMessages();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }),
      [messages];
  });
  const { selectedConversation, setSelectedConversation } = useConversation();
  // console.log("this is selected conversation", selectedConversation);
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
      <h1>
        FeelTalk <button onClick={logout}>LogOut</button>
      </h1>
      {/* <button onClick={logout}>LogOut</button> */}
      <div className={styles["chat-interface"]}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.chatting}>
          <div className={styles.box}>
            {/* <span>profilepic</span> */}
            {selectedConversation ? (
              <img src={selectedConversation.profilepic} alt="profilepic" />
            ) : (
              ""
            )}
            {selectedConversation ? (
              <span>{selectedConversation.fullname}</span>
            ) : (
              ""
            )}
          </div>
          <div className={styles.chatcontainer}>
            {!loading ? (
              messages.map((message) => (
                <div
                  key={message._id}
                  ref={lastMessageRef}
                  className={isSender(message) ? styles["sender"] : ""}
                >
                  <ChatMessage message={message} sender={isSender(message)} />
                </div>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
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
