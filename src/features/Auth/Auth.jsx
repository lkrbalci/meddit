import React, { useRef } from "react";
import styles from "./Auth.module.css";
import { useDispatch } from "react-redux";
import {
  tokenUpdate,
  userIdUpdate,
  errorUpdate,
  //loadingUpdate,
} from "./authSlice";
import * as axios from "../../utils/axios-instances";

const Auth = () => {
  //not to store credentials in state or elsewhere, used useRef hooks on uname and pass areas.
  const uNameRef = useRef(null);
  const passRef = useRef(null);
  const uMailRef = useRef(null);

  const dispatch = useDispatch();
  // const stateUserId = useSelector((state) => state.userId);
  //const stateUserName = useSelector((state) => state.userName);

  //triggers on singup button click, sends credentials to firebase via REST api, then saves token and userid from response in state with dispatch
  const signUpHandler = async (event) => {
    event.preventDefault();
    const payload = {
      email: uMailRef.current.value,
      password: passRef.current.value,
    };
    axios.signUpInstance
      .post("", payload)
      .then((response) => {
        // add user to real time database with username
        let data = JSON.stringify({
          [response.data.localId]: {
            userMail: uMailRef.current.value,
            userId: uNameRef.current.value,
          },
        });
        console.log(data);
        axios.queryInstance
          .patch(`users.json`, data)
          .then((response) => console.log(response, "user to database respond"))
          .catch((error) =>
            console.log(error.message, "user to database error")
          );
        window.localStorage.setItem("userId", response.data.localId);
        window.localStorage.setItem("token", response.data.idToken);
        dispatch(tokenUpdate(response.data.idToken));
        dispatch(userIdUpdate(response.data.localId));
      })
      .catch((error) => console.log(error.message, "main")); //dispatch(errorUpdate(error.message)));
  };

  const signInHandler = async (event) => {
    event.preventDefault();
    const payload = {
      email: uNameRef.current.value,
      password: passRef.current.value,
    };
    axios.singInInstance
      .post("", payload)
      .then((response) => {
        dispatch(tokenUpdate(response.data.idToken));
        dispatch(userIdUpdate(response.data.localId));
        window.localStorage.setItem("userId", response.data.localId);
        window.localStorage.setItem("token", response.data.idToken);
      })
      .then({
        //get username from database
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
          ref={uMailRef}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="user name"
          ref={uNameRef}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          ref={passRef}
        />
        <div className={styles.buttonContainer}>
          <button onClick={signInHandler} className={styles.buttonSignIn}>
            SIGN IN
          </button>
          <button onClick={signUpHandler} className={styles.buttonSignUp}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
