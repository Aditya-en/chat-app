import React from "react";
import styles from "./Login.module.css";
import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div className={styles["form-container"]}>
      <LoginForm />;
    </div>
  );
};

export default Login;
