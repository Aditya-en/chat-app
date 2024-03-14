import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <h1>
        <div className={styles["logo"]}>FeelTalk</div>
      </h1>

      <div className={styles["menu"]}>
        <ul className={styles["links"]}>
          <li>
            <a href="#">SIGNUP</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
