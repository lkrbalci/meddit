import React from "react";
import Auth from "./features/Auth/Auth";
import NavBar from "./features/NavBar/NavBar";
import PostsPage from "./features/PostsPage/PostsPage";
import AddPostPage from "./features/AddPostPage/AddPostPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
      </Router>
    </div>
  );
}

export default App;
