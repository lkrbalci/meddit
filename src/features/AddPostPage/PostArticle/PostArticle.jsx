import React from "react";
import styles from "./PostArticle.module.css";
import SunEditor from "suneditor-react";

const PostArticle = () => {
  const editorOptions = {
    height: "300px",
    placeholder: "Article text here",
  };

  return (
    <div className={styles.container}>
      <div id={styles.wysiwyg}>
        <SunEditor setOptions={editorOptions} />
      </div>
    </div>
  );
};

export default PostArticle;
