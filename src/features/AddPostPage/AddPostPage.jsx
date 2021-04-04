import React, { useState } from "react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./AddPostPage.module.css";
import { MdOndemandVideo, MdInsertLink, MdChat } from "react-icons/md";
import PostArticle from "./PostArticle/PostArticle";
import PostLink from "./PostLink/PostLink";
import PostMedia from "./PostMedia/PostMedia";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as axios from "../../utils/axios-instances";

const AddPostPage = (props) => {
  let history = useHistory();
  //postData will be send to database with post button click. filled with data from title input and child components postArticle, PostLink, PostMedia.
  let postData = {};

  //get data from child components
  const getPostData = (getterData) => {
    Object.assign(postData, getterData);
  };

  //location hook helps to get paramaters via route. here with paramaters post type will be decided.
  const location = useLocation();

  //to decide post type
  const [type, setType] = useState(
    location.state ? location.state.postType : "article"
  );

  //if empty data on postData object validator messages will be seen at bottom
  const [validators, setValidators] = useState({
    articleEmpty: false,
    descriptionEmpty: false,
    titleEmpty: false,
    urlEmpty: false,
  });

  //decide post area, default valiu set
  let postArea = <PostArticle postDataGetter={getPostData} />;

  switch (type) {
    case "article":
      postArea = <PostArticle postDataGetter={getPostData} />;
      break;
    case "media":
      postArea = <PostMedia postDataGetter={getPostData} />;
      break;
    case "link":
      postArea = <PostLink postDataGetter={getPostData} />;
      break;
    default:
      setType("article");
      postArea = <PostArticle postDataGetter={getPostData} />;
      break;
  }

  //change post type with buttons
  const articleButtonClickHandler = (event) => {
    event.preventDefault();
    setValidators({
      articleEmpty: false,
      descriptionEmpty: false,
      titleEmpty: false,
      urlEmpty: false,
    });
    setType("article");
  };

  const mediaButtonClickHandler = (event) => {
    event.preventDefault();
    setValidators({
      articleEmpty: false,
      descriptionEmpty: false,
      titleEmpty: false,
      urlEmpty: false,
    });
    setType("media");
  };

  const linkButtonClickHandler = (event) => {
    event.preventDefault();
    setValidators({
      articleEmpty: false,
      descriptionEmpty: false,
      titleEmpty: false,
      urlEmpty: false,
    });
    setType("link");
  };

  //when title input changed (typed smth) value to be added to postData obj
  const titleChangeHandler = (event) => {
    console.log(postData);
    Object.assign(postData, {
      title: event.target.value,
    });
  };

  //post button will set validator messages if needed or send postData to database
  const postBtnHandler = (event) => {
    const setValidation = (postData, type) => {
      let validate = true;

      if (!postData.title) {
        setValidators((prevState) => ({
          ...prevState,
          titleEmpty: true,
        }));
        validate = false;
      }
      switch (type) {
        case "article":
          if (!postData.article) {
            setValidators((prevState) => ({
              ...prevState,
              articleEmpty: true,
            }));
            validate = false;
          } else {
            setValidators((prevState) => ({
              ...prevState,
              articleEmpty: false,
            }));
            if (postData.title) {
              validate = true;
            }
          }
          break;
        case "media":
          if (!postData.url) {
            setValidators((prevState) => ({
              ...prevState,
              urlEmpty: true,
            }));
            validate = false;
          } else {
            setValidators((prevState) => ({
              ...prevState,
              urlEmpty: false,
            }));
            if (postData.title && postData.description) {
              validate = true;
            }
          }
          if (!postData.description) {
            setValidators((prevState) => ({
              ...prevState,
              descriptionEmpty: true,
            }));
            validate = false;
          } else {
            setValidators((prevState) => ({
              ...prevState,
              descriptionEmpty: false,
            }));
            if (postData.title && postData.url) {
              validate = true;
            }
          }
          break;
        case "link":
          if (!postData.url) {
            setValidators((prevState) => ({
              ...prevState,
              urlEmpty: true,
            }));
            validate = false;
          } else {
            setValidators((prevState) => ({
              ...prevState,
              urlEmpty: false,
            }));
            if (postData.title && postData.url) {
              validate = true;
            }
          }
          if (!postData.description) {
            setValidators((prevState) => ({
              ...prevState,
              descriptionEmpty: true,
            }));
            validate = false;
          } else {
            setValidators((prevState) => ({
              ...prevState,
              descriptionEmpty: false,
            }));
            if (postData.title && postData.url) {
              validate = true;
            }
          }
          break;
        default:
          if (!postData.article) {
            setValidators((prevState) => ({
              ...prevState,
              articleEmpty: true,
            }));
            validate = false;
          } else {
            setValidators((prevState) => ({
              ...prevState,
              articleEmpty: false,
            }));
            if (postData.title) {
              validate = true;
            }
          }
          break;
      }
      return validate;
    };

    const isValid = setValidation(postData, type);

    if (isValid) {
      //need formated date
      const dateGetter = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + "." + mm + "." + yyyy;
        return today;
      };

      //post data basic values
      Object.assign(postData, {
        time: Date.now(),
        userId: window.localStorage.getItem("userId"),
        date: dateGetter(),
        type,
      });
      axios.queryInstance
        .post(`posts.json?auth=${window.localStorage.token}`, postData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error, error.message))
        .then(() => {
          postData = {};
          history.push({ pathname: "/" });
        });
    }
  };

  return (
    <div className={styles.addPostPage}>
      <div className={styles.title}>
        <h2>Create a post</h2>
      </div>
      <div className={styles.postContainer}>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${
              type === "article" ? styles.active : null
            }`}
            id={styles.articleButton}
            onClick={articleButtonClickHandler}
          >
            <MdChat />
            Article
          </button>
          <button
            className={`${styles.button} ${
              type === "media" ? styles.active : null
            }`}
            id={styles.mediaButton}
            onClick={mediaButtonClickHandler}
          >
            <MdOndemandVideo />
            Media
          </button>
          <button
            className={`${styles.button} ${
              type === "link" ? styles.active : null
            }`}
            id={styles.linkButton}
            onClick={linkButtonClickHandler}
          >
            <MdInsertLink />
            Link
          </button>
        </div>
        <input
          type="text"
          placeholder="Title"
          id={styles.postTitleInput}
          onChange={titleChangeHandler}
        />
        {postArea}
        <button className={styles.postButton} id={styles.cancelPostButton}>
          CANCEL
        </button>
        <button
          className={styles.postButton}
          id={styles.savePostButton}
          onClick={postBtnHandler}
        >
          POST
        </button>
      </div>
      <div id={styles.validation}>
        {validators.titleEmpty ? <p>Title is required!</p> : null}
        {validators.articleEmpty ? <p>Article text is required!</p> : null}
        {validators.urlEmpty ? <p>URL is requred!</p> : null}
        {validators.descriptionEmpty ? <p>Description is requred!</p> : null}
      </div>
    </div>
  );
};

export default AddPostPage;
