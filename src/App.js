import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./features/Auth/Auth";
import NavBar from "./features/NavBar/NavBar";
import PostsPage from "./features/PostsPage/PostsPage";
import AddPostPage from "./features/AddPostPage/AddPostPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { tokenUpdate, userIdUpdate } from "./features/Auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const stateUserId = useSelector((state) => state.auth.userId);
  if (!stateUserId && window.localStorage.getItem("userId")) {
    try {
      dispatch(userIdUpdate(window.localStorage.getItem("userId")));
      dispatch(tokenUpdate(window.localStorage.getItem("token")));
    } catch (error) {
      alert("appjs window update patladı");
      console.log(error);
    }
  }

  let routing = "";

  if (stateUserId) {
    routing = (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
        <Route exact path="/">
          <PostsPage />
        </Route>
        <Route path="/myposts" render={() => <PostsPage myPosts={true} />} />
        <Route path="/addpost">
          <AddPostPage postType="article" />
        </Route>
      </Switch>
    );
  } else {
    routing = (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route path="/demo" render={() => <PostsPage demo={true} />} />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        {routing}
      </Router>
    </div>
  );
}

export default App;
