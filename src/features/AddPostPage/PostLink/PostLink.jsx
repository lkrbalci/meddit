import React from "react";
import styles from "./PostLink.module.css";

const PostLink = (props) => {
  let data = {
    url: null,
    description: null,
  };

  const changeHandler = (event) => {
    if (event.target.localName === "input") {
      data.url = event.target.value;
    } else {
      data.description = event.target.value;
    }
    props.postDataGetter(data);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="URL"
        id={styles.postLinkURLInput}
        onChange={changeHandler}
      />
      <textarea
        className={styles.textInput}
        type="textarea"
        placeholder="Description"
        id={styles.postLinkDescriptionInput}
        onChange={changeHandler}
      />
    </div>
  );
};

export default PostLink;
