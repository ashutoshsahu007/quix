import React from "react";
import Quiz from "./Quiz";
import classes from "./QuizContainer.module.css";
import Quizes from "./Quizes";
import { Link } from "react-router-dom";

const QuizContainer = () => {
  return (
    <div className={classes.quizes}>
      <div>
        <h1>Physics</h1>
        <div className={classes.quizlist}>
          <Link to="/quiz">
            <Quizes />
          </Link>
          <Link to="/quiz">
            <Quizes />
          </Link>
          <Link to="/quiz">
            <Quizes />
          </Link>
          <Link to="/quiz">
            <Quizes />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizContainer;
