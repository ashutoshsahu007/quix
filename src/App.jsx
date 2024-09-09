import React from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div className="text-black" style={{ position: "relative" }}>
      <Header />
      <Body />
      <Bottom />
    </div>
  );
};

export default App;
