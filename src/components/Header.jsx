import React, { useContext } from "react";
import classes from "./Header.module.css";
import { ScoreProvider } from "../App";

const Header = () => {
  const { score, setScore } = useContext(ScoreProvider);
  return (
    <div className={classes.header}>
      <div className={classes.quizard}>
        <h1>QUIZARD</h1>
      </div>
      <div className={classes.headerlist}>
        <ul className={classes.list}>
          <li className={classes.item}>Live Quiz</li>
          <li className={classes.item}>Default</li>
          <li className={classes.item}>Login</li>
          <li className={classes.item}>Register</li>
          <li className={classes.score}>Score : {score}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
