import React, { useState } from "react";
import styles from "./SideBar.module.css";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const SideBar = () => {
  const { loading, conversations } = useGetConversations();
  const { authUser } = useAuthContext();
  const [query, setQuery] = useState("");
  // console.log(conversations);
  const { setSelectedConversation } = useConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(query.toLocaleLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setQuery("");
    } else {
      toast.error(`No user named ${query}`);
    }

    setSelectedConversation();
  };

  return (
    <div className={styles["container"]}>
      <div className={styles.user}>
        <span>profilepic</span>
        <span>{authUser.fullname}</span>
      </div>
      <form className={styles["search"]} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for people"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles["conversations"]}>
        {conversations.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
