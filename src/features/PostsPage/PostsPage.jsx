import React, { useState, useEffect } from "react";
// import styles from "PostPage.module.css";
import PostBar from "./PostBar/PostBar";
import AddPostBar from "./AddPostBar/AddPostBar";
import * as axios from "../../utils/axios-instances";

const PostsPage = (props) => {
  //get posts from database

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.queryInstance
      .get(
        `posts.json?orderBy="time"&limitToFirst=6&print=pretty&auth=${window.localStorage.token}`
      )
      .then((response) => {
        const postArray = [];
        Object.keys(response.data).forEach((key) => {
          postArray.push({ id: key, ...response.data[key] });
        });
        setPosts(postArray);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <AddPostBar />
      {posts.map((element) => {
        return <PostBar {...element} key={element.id} />;
      })}
    </div>
  );
};

export default PostsPage;
