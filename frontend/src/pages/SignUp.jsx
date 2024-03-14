import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [Inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });
  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(Inputs);

    // console.log(Inputs);
  };
  return (
    <div className={styles["container"]}>
      <form onSubmit={handleSubmit} className={styles["form"]}>
        <h2 className={styles["form-heading"]}>Sign Up</h2>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={Inputs.fullname}
          onChange={(e) => {
            setInputs({ ...Inputs, fullname: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="User Name"
          value={Inputs.username}
          onChange={(e) => {
            setInputs({ ...Inputs, username: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={Inputs.password}
          onChange={(e) => {
            setInputs({ ...Inputs, password: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={Inputs.confirmPassword}
          onChange={(e) => {
            setInputs({ ...Inputs, confirmPassword: e.target.value });
          }}
        />
        <div className={styles["gender-field"]}>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={Inputs.gender}
            onChange={(e) => {
              setInputs({ ...Inputs, gender: e.target.value });
            }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" className={styles["btnn"]}>
          Sign Up
        </button>

        <p className="link">
          Already have an account
          <br />
          <Link to={"/login"}>Login</Link> here
        </p>
      </form>
    </div>
  );
};

export default SignUp;
