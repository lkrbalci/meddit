import React, { useState } from "react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./AddPostPage.module.css";
import { MdOndemandVideo, MdInsertLink, MdChat } from "react-icons/md";
import PostArticle from "./PostArticle/PostArticle";
import PostLink from "./PostLink/PostLink";
import PostMedia from "./PostMedia/PostMedia";
import { useLocation } from "react-router-dom";

const AddPostPage = (props) => {
  const location = useLocation();
  const [type, setType] = useState(
    location.state ? location.state.postType : "active"
  );

  let postArea = <PostArticle />;

  switch (type) {
    case "article":
      postArea = <PostArticle />;
      break;
    case "media":
      postArea = <PostMedia />;
      break;
    case "link":
      postArea = <PostLink />;
      break;
    default:
      setType("article");
      postArea = <PostArticle />;
      break;
  }

  const articleButtonClickHandler = (event) => {
    event.preventDefault();
    setType("article");
    console.log(event);
  };

  const mediaButtonClickHandler = (event) => {
    event.preventDefault();
    setType("media");
  };

  const linkButtonClickHandler = (event) => {
    event.preventDefault();
    setType("link");
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
        <input type="text" placeholder="Title" id={styles.postTitleInput} />
        {postArea}
        <button className={styles.postButton} id={styles.cancelPostButton}>
          CANCEL
        </button>
        <button className={styles.postButton} id={styles.savePostButton}>
          POST
        </button>
      </div>
    </div>
  );
};

export default AddPostPage;
