import React from "react";
import classes from "./Quizes.module.css";

const Quizes = () => {
  return (
    <div className={classes.quizes}>
      <img
        src="ScienceQuiz.png"
        alt="not allowed"
        style={{
          width: "256px",
          height: "160px",
          borderRadius: "10px 10px 0px 0px",
        }}
      />
      <h3> Computer Class Basic Questions </h3>
    </div>
  );
};

export default Quizes;
