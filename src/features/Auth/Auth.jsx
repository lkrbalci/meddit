import React, { useRef } from "react";
import styles from "./Auth.module.css";
import { useDispatch } from "react-redux";
import {
  tokenUpdate,
  userIdUpdate,
  errorUpdate,
  loadingUpdate,
} from "./authSlice";
import * as axios from "../../utils/axios-instances";

const Auth = () => {
  const uNameRef = useRef(null);
  const passRef = useRef(null);

  const dispatch = useDispatch();

  const signUpHandler = async (event) => {
    event.preventDefault();
    const payload = {
      email: uNameRef.current.value,
      password: passRef.current.value,
    };
    axios.signUpInstance
      .post("", payload)
      .then((response) => {
        dispatch(tokenUpdate(response.data.idToken));
        dispatch(userIdUpdate(response.data.localId));
      })
      .catch((error) => dispatch(errorUpdate(error.message)));
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="e-mail"
          ref={uNameRef}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          ref={passRef}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.buttonSignIn}>SIGN IN</button>
          <button onClick={signUpHandler} className={styles.buttonSignUp}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
