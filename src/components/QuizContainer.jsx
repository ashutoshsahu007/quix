import React from "react";
import Quiz from "./Quiz";
import classes from "./QuizContainer.module.css";
import Quizes from "./Quizes";
import { Link } from "react-router-dom";

const QuizContainer = ({ item }) => {
  const { heading, subject1, subject2, subject3, subject4 } = item;

  return (
    <div className={classes.quizes}>
      <div>
        <h1>{heading}</h1>
        <div className={classes.quizlist}>
          <Link to="/start">
            <Quizes name={subject1} />
          </Link>
          <Link to="/start">
            <Quizes name={subject2} />
          </Link>
          <Link to="/start">
            <Quizes name={subject3} />
          </Link>
          <Link to="/start">
            <Quizes name={subject4} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizContainer;
