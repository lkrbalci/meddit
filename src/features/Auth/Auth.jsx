import React, { useRef, useState } from "react";
import styles from "./Auth.module.css";
import { useDispatch } from "react-redux";
import {
  tokenUpdate,
  userIdUpdate,
  errorUpdate,
  //loadingUpdate,
} from "./authSlice";
import UNamePopUp from "./UNamePopUp/UNamePopUp";
import * as axios from "../../utils/axios-instances";
import { useHistory } from "react-router-dom";

const Auth = () => {
  //not to store credentials in state or elsewhere, used useRef hooks on uname and pass areas.
  const passRef = useRef(null);
  const uMailRef = useRef(null);

  //to be used for sing upnickname set
  const [openPopUp, setOpenPopUp] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();
  // const stateUserId = useSelector((state) => state.userId);
  //const stateUserName = useSelector((state) => state.userName);

  //triggers on singup button click, sends credentials to firebase via REST api, then saves token and userid from response in state with dispatch
  const signUpHandler = (event) => {
    event.preventDefault();
    if (uMailRef.current.value && passRef.current.value) {
      setOpenPopUp(true);
    }
  };

  const signInHandler = async (event) => {
    event.preventDefault();
    const payload = {
      email: uMailRef.current.value,
      password: passRef.current.value,
      returnSecureToken: true,
    };
    axios.singInInstance
      .post("", payload)
      .then((response) => {
        dispatch(tokenUpdate(response.data.idToken));
        dispatch(userIdUpdate(response.data.localId));
        window.localStorage.setItem("userId", response.data.localId);
        window.localStorage.setItem("token", response.data.idToken);
        history.push("/");
      })
      .then({
        //get username from database
      })
      .catch((error) => dispatch(errorUpdate(error.message)));
  };

  const closeClickHandler = () => {
    setOpenPopUp(false);
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
        {openPopUp ? (
          <UNamePopUp
            credentials={{
              email: uMailRef.current.value,
              password: passRef.current.value,
            }}
            closeClickHandler={closeClickHandler}
          />
        ) : null}
      </form>
    </div>
  );
};

export default Auth;
