import React from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div className="text-black">
      {/* <Header /> */}
      {/* <Body /> */}
      <Quiz />
      {/* <Bottom /> */}
    </div>
  );
};

export default App;