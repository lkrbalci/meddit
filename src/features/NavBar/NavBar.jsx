import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../img/logoMeddit3.png";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const userId = useSelector((state) => state.auth.userId);

  const logOutClickHandler = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.navBar}>
      <NavLink style={{ padding: "6px", marginTop: "0px" }} to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      {userId ? (
        <NavLink activeClassName={styles.active} exact to="/">
          Home
        </NavLink>
      ) : (
        <NavLink activeClassName={styles.active} to="/auth">
          Log in
        </NavLink>
      )}
      {userId ? (
        <NavLink activeClassName={styles.active} to="/myposts">
          My Posts
        </NavLink>
      ) : null}
      {userId ? (
        <NavLink activeClassName={styles.active} to="/addpost">
          Add Post
        </NavLink>
      ) : (
        <NavLink activeClassName={styles.active} to="/Demo">
          Demo
        </NavLink>
      )}
      <input type="text" placeholder="Search.."></input>
      {userId ? (
        <RiLogoutCircleRLine onClick={logOutClickHandler} id={styles.logIcon} />
      ) : (
        <RiLoginCircleLine id={styles.logIcon} />
      )}
    </div>
  );
};

export default NavBar;
