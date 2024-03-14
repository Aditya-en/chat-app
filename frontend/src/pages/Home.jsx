import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import Content from "../components/Content";
import Login from "./Login";
import SignUp from "./SignUp";
import ChatPage from "./ChatPage";
const Home = () => {
  return (
    <div className={styles["main"]}>
      {/* <Navbar />
      <Content /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <ChatPage />
    </div>
  );
};

export default Home;
