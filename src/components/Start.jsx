import React from "react";
import { Link } from "react-router-dom";
import classes from "./Start.module.css";

const Start = () => {
  return (
    <div className={classes.start}>
      <div>
        <img style={{ width: "250px" }} src="quiz.png" alt="image not found" />
      </div>
      <div>
        <h1>Computer Quiz 1</h1>
      </div>
      <div>
        <p>Answer these simple questions correctly and earn coins</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", fontSize: "15px" }}>
        Difficult Level : &nbsp;&nbsp;
        <p className={classes.medium}> Medium</p>
      </div>
      <div className={classes.question}>10 Questions </div>
      <div className={classes.play}>
        <Link to="/quiz" style={{ color: "white", textDecoration: "none" }}>
          Play again
        </Link>
      </div>
      <div>
        <button className={classes.play_again}>
          <Link to="/quiz" style={{ color: "white", textDecoration: "none" }}>
            Play With Friends
          </Link>
        </button>
      </div>
      <div className={classes.result}>
        <Link to="/results" style={{ color: "white", textDecoration: "none" }}>
          See Results
        </Link>
      </div>
    </div>
  );
};

export default Start;
