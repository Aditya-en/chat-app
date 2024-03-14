import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form"]}>
      <h2 className={styles["form-heading"]}>Login Here</h2>
      <input
        type="text"
        placeholder="Enter Your UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password Here"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className={styles["btnn"]}>
        Login
      </button>

      <p className="link">
        Don't have an account
        <br />
        <Link to={"/signup"}>Sign up</Link> here
      </p>
    </form>
  );
};

export default LoginForm;
