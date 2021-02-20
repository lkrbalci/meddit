import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./AddEntryPage.module.css";
import { MdOndemandVideo, MdInsertLink, MdChat } from "react-icons/md";

const AddEntryPage = () => {
  const editorOptions = {
    height: "300px",
    placeholder: "Article text here",
  };

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
        <div id={styles.wysiwyg}>
          <SunEditor setOptions={editorOptions} />
        </div>
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
