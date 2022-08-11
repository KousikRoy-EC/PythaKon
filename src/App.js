import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AddPost from "./components/posts";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AddPost /> */}
      <Home />
    </div>
  );
}

export default App;
