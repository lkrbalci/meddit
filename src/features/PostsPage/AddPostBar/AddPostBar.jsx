import React from "react";
import styles from "./AddPostBar.module.css";
import { MdOndemandVideo, MdInsertLink, MdAddBox } from "react-icons/md";
import { useHistory } from "react-router-dom";

const AddEntryBar = () => {
  let history = useHistory();

  const inputClickHandler = () => {
    history.push({ pathname: "/addpost", state: { postType: "article" } });
  };

  const videoIconClickHandler = () => {
    history.push({ pathname: "/addpost", state: { postType: "media" } });
  };

  const linkIconClickHandler = () => {
    history.push({ pathname: "/addpost", state: { postType: "link" } });
  };

  return (
    <div className={styles.addEntryBar}>
      <MdAddBox className={styles.icons} id={styles.addIcon} />
      <input
        type="text"
        onClick={inputClickHandler}
        placeholder="Create Post"
        id={styles.postText}
      />
      <MdOndemandVideo
        onClick={videoIconClickHandler}
        className={styles.icons}
        id={styles.videoIcon}
      />
      <MdInsertLink
        onClick={linkIconClickHandler}
        className={styles.icons}
        id={styles.linkIcon}
      />
    </div>
  );
};

export default AddEntryBar;
