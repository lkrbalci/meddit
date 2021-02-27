import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../img/logoMeddit3.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <NavLink style={{ padding: "6px", marginTop: "0px" }} to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <NavLink activeClassName={styles.active} exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName={styles.active} to="/myposts">
        My Posts
      </NavLink>
      <NavLink activeClassName={styles.active} to="/addpost">
        Add Post
      </NavLink>
      <input type="text" placeholder="Search.."></input>
      <RiLogoutCircleRLine id={styles.logoutIcon} />
    </div>
  );
};

export default NavBar;
