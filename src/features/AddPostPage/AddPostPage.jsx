import React, { useState } from "react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./AddPostPage.module.css";
import { MdOndemandVideo, MdInsertLink, MdChat } from "react-icons/md";
import PostArticle from "./PostArticle/PostArticle";
import PostLink from "./PostLink/PostLink";
import PostMedia from "./PostMedia/PostMedia";
import { useLocation } from "react-router-dom";

const AddEntryPage = (props) => {
  const location = useLocation();
  const [type, setType] = useState(location.state.postType);

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
      postArea = <PostArticle />;
      break;
  }

  return (
    <div className={styles.addEntryPage}>
      <div className={styles.title}>
        <h2>Create a post</h2>
      </div>
      <div className={styles.postContainer}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} id={styles.postButton}>
            <MdChat />
            Article
          </button>
          <button className={styles.button} id={styles.mediaButton}>
            <MdOndemandVideo />
            Media
          </button>
          <button className={styles.button} id={styles.linkButton}>
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

export default AddEntryPage;
