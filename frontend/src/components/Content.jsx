import React from "react";
import LoginForm from "./LoginForm";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles["content"]}>
      <div className={styles["text"]}>
        <h1>
          {" "}
          Chat With your <br />
          <span>Freinds</span> <br /> With Privacy
        </h1>
        <p className="par">
          Connect with your friends easily on our chat platform
          <br />
          -stay in touch,share,moments,
          <br />
          and have fun chatting together!{" "}
        </p>
        <button className={styles["btnn"]}>
          <a href="/signup">JOIN US</a>
        </button>
      </div>

      <div className={styles["login-form"]}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Content;
