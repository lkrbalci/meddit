import React from "react";
import styles from "./PostLink.module.css";

const PostLink = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="URL"
        id={styles.postLinkURLInput}
      />
      <textarea
        className={styles.textInput}
        type="textarea"
        placeholder="Description"
        id={styles.postLinkDescriptionInput}
      />
    </div>
  );
};

export default PostLink;
