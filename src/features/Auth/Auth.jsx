import React, { useRef } from "react";
import styles from "./Auth.module.css";

const Auth = () => {
  const uNameRef = useRef(null);
  const passRef = useRef(null);

  return (
    <div className={styles.container}>
      <h1>Registration</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="e-mail"
          ref={uNameRef}
        />
        <input
          className={styles.input}
          type="passRef"
          placeholder="password"
          ref={passRef}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.buttonSignIn}>SIGN IN</button>
          <button className={styles.buttonSignUp}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
