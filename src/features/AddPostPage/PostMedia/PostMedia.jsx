import React from "react";
import styles from "./PostMedia.module.css";

const PostMedia = (props) => {
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
        placeholder="Video URL"
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

export default PostMedia;
