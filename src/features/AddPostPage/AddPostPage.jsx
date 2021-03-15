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
    console.log(postData);
  };

  //location hook helps to get paramaters via route. here with paramaters post type will be decided.
  const location = useLocation();

  //to decide post type
  const [type, setType] = useState(
    location.state ? location.state.postType : "article"
  );

  //if empty data on postData object validator messages will be seen at bottom
  const [validators, setValidators] = useState(null);

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
    setType("article");
  };

  const mediaButtonClickHandler = (event) => {
    event.preventDefault();
    setType("media");
  };

  const linkButtonClickHandler = (event) => {
    event.preventDefault();
    setType("link");
  };

  //when title input changed (typed smth) value to be added to postData obj
  const titleChangeHandler = (event) => {
    Object.assign(postData, {
      title: event.target.value,
    });
  };

  //post button will set validator messages if needed or send postData to database
  const postBtnHandler = (event) => {
    const setValidation = (postData, type) => {
      let validate = true;

      if (!postData.title) {
        setValidators(validators.concat(<p>title is empty :(</p>));
        validate = false;
      }
      switch (type) {
        case "article":
          if (!postData.article) {
            setValidators(validators.concat(<p>article field is empty :(</p>));
            validate = false;
          }
          break;
        case "media":
          if (!postData.url) {
            setValidators(validators.concat(<p>URL field is empty :(</p>));
            validate = false;
          }
          if (!postData.description) {
            setValidators(
              validators.concat(
                <p id={styles.optional}>some description could be good :/</p>
              )
            );
          }
          break;
        case "link":
          if (!postData.url) {
            setValidators(validators.concat(<p>URL field is empty :(</p>));
            validate = false;
          }
          if (!postData.description) {
            setValidators(
              validators.concat(
                <p id={styles.optional}>some description could be good :/</p>
              )
            );
          }
          break;
        default:
          if (!postData.article) {
            setValidators(validators.concat(<p>article field is empty :(</p>));
            validate = false;
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
      <div id={styles.validation}>{validators}</div>
    </div>
  );
};

export default AddPostPage;
