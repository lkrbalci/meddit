import React from "react";
import Auth from "./features/Auth/Auth";
import NavBar from "./features/NavBar/NavBar";
import PostsPage from "./features/PostsPage/PostsPage";
import AddPostPage from "./features/AddPostPage/AddPostPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Route path="/">
            <AddPostPage postType="article" />
          </Route>
          <Route path="/addpostpage">
            <AddPostPage postType="article" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
