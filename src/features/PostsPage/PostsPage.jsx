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
        `posts.json?orderBy="time"&startAt=5&print=pretty&auth=${window.localStorage.token}`
      )
      .then((response) => {
        const postArray = [];
        Object.keys(response.data).forEach((key) => {
          postArray.push({ id: key, ...response.data[key] });
        });
        console.log(postArray);
        postArray.sort((a, b) => {
          return b.time - a.time;
        });
        console.log(postArray);
        setPosts(postArray);
      })
      .catch((error) => {
        if (error.response.data.error === "Auth token is expired") {
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("userId");
          window.location.reload();
        }
      });
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
