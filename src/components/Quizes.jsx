import React from "react";
import classes from "./Quizes.module.css";

const Quizes = () => {
  return (
    <div className={classes.quizes}>
      <img
        src="ScienceQuiz.png"
        alt="not allowed"
        style={{ width: "256px", height: "160px" }}
      />
    </div>
  );
};

export default Quizes;
