import React from "react";
import Quiz from "./Quiz";
// import classes from "./QuizContainer.module.css";
import Quizes from "./Quizes";

const QuizContainer = () => {
  return (
    <div className={classes.quizes}>
      <div>
        <h1>Physics</h1>
        <div className={classes.quizlist}>
        <Quizes />
        <Quizes />
        <Quizes />
        </div>
      </div>
    </div>
  );
};

export default QuizContainer;
