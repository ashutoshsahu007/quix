import React from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";

const App = () => {
  return (
    <div className="text-black">
      <Header />
      <Body />
      <Bottom />
    </div>
  );
};

export default App;
