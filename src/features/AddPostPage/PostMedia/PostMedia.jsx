import React from "react";
import styles from "./PostMedia.module.css";

const PostMedia = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="Video URL"
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

export default PostMedia;
