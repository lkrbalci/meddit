import React from "react";
import styles from "./AddEntryBar.module.css";
import { MdOndemandVideo, MdInsertLink, MdAddBox } from "react-icons/md";
// import { IconContext } from "react-icons";

const AddEntryBar = () => {
  return (
    <div className={styles.addEntryBar}>
      <MdAddBox className={styles.icons} id={styles.addIcon} />
      <input type="text" placeholder="Create Post" id={styles.postText} />
      {/* <IconContext.Provider
        value={{
          color: "rgb(0, 128, 0, 0.3)",
          size: "1.8rem",
          style: { verticalAlign: "middle" },
        }}
      > */}
      <MdOndemandVideo className={styles.icons} id={styles.videoIcon} />
      <MdInsertLink className={styles.icons} id={styles.linkIcon} />

      {/* </IconContext.Provider> */}
    </div>
  );
};

export default AddEntryBar;
