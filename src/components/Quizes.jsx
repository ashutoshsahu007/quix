import React from "react";
import classes from "./Quizes.module.css";

const Quizes = ({ name }) => {
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
      <h3> {name} </h3>
    </div>
  );
};

export default Quizes;
