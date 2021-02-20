import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <a className={styles.active} href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <input type="text" placeholder="Search.."></input>
    </div>
  );
};

export default NavBar;
