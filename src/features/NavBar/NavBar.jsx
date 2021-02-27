import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../img/logoMeddit3.png";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <div className={styles.navBar}>
      <NavLink style={{ padding: "6px", marginTop: "0px" }} to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <NavLink activeClassName={styles.active} exact to="/">
        Home
      </NavLink>
      {userId ? (
        <NavLink activeClassName={styles.active} to="/myposts">
          My Posts
        </NavLink>
      ) : null}
      <NavLink activeClassName={styles.active} to="/addpost">
        Add Post
      </NavLink>
      <input type="text" placeholder="Search.."></input>
      {userId ? (
        <RiLogoutCircleRLine id={styles.logIcon} />
      ) : (
        <RiLoginCircleLine id={styles.logIcon} />
      )}
    </div>
  );
};

export default NavBar;
