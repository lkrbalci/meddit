import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./AddEntryPage.module.css";
import { MdOndemandVideo, MdInsertLink, MdChat } from "react-icons/md";

const AddEntryPage = () => {
  const editorOptions = {
    height: "500px",
  };

  return (
    <div className={styles.addEntryPage}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} id={styles.postButton}>
          <MdChat />
          Post
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
      <SunEditor setOptions={editorOptions} />
    </div>
  );
};

export default AddEntryPage;
