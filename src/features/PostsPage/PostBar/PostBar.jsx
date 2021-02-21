import React from "react";
import styles from "./PostBar.module.css";

const PostBar = () => {
  return (
    <div className={styles.entryBar}>
      <h4>Lorem Ipsum</h4>
      <img
        src="https://picsum.photos/seed/picsum/536/354"
        alt="The API will return 30 items per page by default."
      />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default PostBar;
