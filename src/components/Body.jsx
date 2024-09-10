import React from "react";
import QuizContainer from "./QuizContainer";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.main}>
      <div className={classes.div1}>
        <div>
          <img
            src="kid.png"
            alt="image not found"
            style={{ width: "145px", height: "128px" }}
          />
        </div>
        <div className={classes.sec}>
          <div>
            <h1>Play Quiz</h1>
          </div>
          <div>
            <p>
              Welcome to Quizard, where knowledge meets fun! Unleash your
              intellect with our captivating quizzes spanning various topics.
              Challenge yourself, compete with friends, and embark on a journey
              of discovery. Engage in brain-teasing trivia that entertains and
              educates. Quizard - Where every question unlocks a world of
              possibilities!
            </p>
          </div>
          <div>
            <button
              style={{
                background: "yellow",
                width: "100px",
                height: "40px",
                fontSize: "15px",
                borderRadius: "5px",
              }}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
      <div className={classes.quizcontainer}>
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
        <QuizContainer />
      </div>
    </div>
  );
};

export default Body;
