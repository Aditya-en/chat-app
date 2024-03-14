import React from "react";
import styles from "./SideBar.module.css";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";
const SideBar = () => {
  const { loading, conversations } = useGetConversations();
  // console.log(conversations);
  return (
    <div className={styles["container"]}>
      <div className={styles.user}>
        <span>profilepic</span>
        <span>Full Name</span>
      </div>
      <input type="text" placeholder="Search for people" />
      <div className={styles["conversations"]}>
        {conversations.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
