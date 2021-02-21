import React from "react";
// import styles from "PostPage.module.css";
import PostBar from "./PostBar/PostBar";
import AddPostBar from "./AddPostBar/AddPostBar";

const PostsPage = () => {
  return (
    <div>
      <AddPostBar />
      <PostBar />
    </div>
  );
};

export default PostsPage;
