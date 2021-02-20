import React from "react";
// import Auth from "./features/Auth/Auth";
import NavBar from "./features/NavBar/NavBar";
//import AddEntryBar from "./features/AddEntryBar/AddEntryBar";
//import EntryBar from "./features/EntryBar/EntryBar";
import AddEntryPage from "./features/AddEntryPage/AddEntryPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddEntryPage />
      {/* <AddEntryBar />
     <EntryBar />
     <EntryBar />
     <EntryBar />
     <EntryBar /> */}
    </div>
  );
}

export default App;
