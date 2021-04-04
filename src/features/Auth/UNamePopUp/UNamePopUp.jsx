import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./UNamePopUp.module.css";
import { MdClose } from "react-icons/md";
import * as axios from "../../../utils/axios-instances";
import {
  tokenUpdate,
  userIdUpdate,
  errorUpdate,
  //loadingUpdate,
} from "../authSlice";

const UNamePopUp = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const uNameRef = useRef(null);

  const addUNameHandler = (event) => {
    event.preventDefault();
    const payload = {
      email: props.credentials.email,
      password: props.credentials.password,
    };
    axios.signUpInstance
      .post("", payload)
      .then((response) => {
        // add user to real time database with username
        let data = JSON.stringify({
          [response.data.localId]: {
            userMail: props.email,
            userName: uNameRef.current.value,
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
        history.push("/");
      })
      .catch((error) => console.log(error.message, "main")); //dispatch(errorUpdate(error.message)));
  };

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <MdClose id={styles.close} onClick={props.closeClickHandler} />
        <h4>Please pick a nickname</h4>
        <input
          className={styles.inputUName}
          type="text"
          placeholder="nick name"
          ref={uNameRef}
        />
        <button onClick={addUNameHandler} className={styles.buttonSignIn}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default UNamePopUp;
