import React, { Fragment } from "react";
import styles from "./PostBar.module.css";
import htmlParse from "html-react-parser";

let postDetails = <div></div>;

const PostBar = (props) => {
  switch (props.type) {
    case "article":
      postDetails = htmlParse(props.article);
      break;
    case "media":
      let baseLink = props.url;
      let tubeId = baseLink.split("=")[1];
      let embeddedUrl = "https://www.youtube.com/embed/" + tubeId;
      postDetails = (
        <>
          <iframe src={embeddedUrl} title={props.title}></iframe>
          <p>{props.description}</p>
        </>
      );
      break;
    case "link":
      postDetails = (
        <>
          <a href={props.url}>{props.url}</a>
          <p>{props.description}</p>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <div className={styles.postBar}>
      <h4>{props.title}</h4>

      {postDetails}
    </div>
  );
};

export default PostBar;
