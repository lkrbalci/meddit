import React from "react";
import styles from "./PostArticle.module.css";
import SunEditor from "suneditor-react";

const PostArticle = (props) => {
  let data = {
    article: "",
  };

  const editorChangeHandler = (event) => {
    data.article = event;
    props.postDataGetter(data);
  };

  const editorOptions = {
    height: "300px",
    placeholder: "Article text here",
  };

  return (
    <div className={styles.container}>
      <div id={styles.wysiwyg}>
        <SunEditor setOptions={editorOptions} onChange={editorChangeHandler} />
      </div>
    </div>
  );
};

export default PostArticle;
