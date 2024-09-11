import React from "react";
import QuizContainer from "./QuizContainer";
import classes from "./Body.module.css";
import { Link } from "react-router-dom";

const Body = () => {
  const Headings = [
    {
      heading: "PHYSICS",
      subject1: "Physics Test Part 1",
      subject2: "Physics Test Part 2 ",
      subject3: "Physics Test Part 3",
      subject4: "Physics Test Part 4",
    },
    {
      heading: "CHEMISTRY",
      subject1: "Chemistry Test Part 1",
      subject2: "Chemistry Test Part 2 ",
      subject3: "Chemistry Test Part 3",
      subject4: "Chemistry Test Part 4",
    },
    {
      heading: "BIOLOGY",
      subject1: "Biology Test Part 1",
      subject2: "Biology Test Part 2 ",
      subject3: "Biology Test Part 3",
      subject4: "Biology Test Part 4",
    },
    {
      heading: "HINDI",
      subject1: "Hindi Test Part 1",
      subject2: "Hindi Test Part 2 ",
      subject3: "Hindi Test Part 3",
      subject4: "Hindi Test Part 4",
    },
    {
      heading: "ENGLISH",
      subject1: "English Test Part 1",
      subject2: "English Test Part 2 ",
      subject3: "English Test Part 3",
      subject4: "English Test Part 4",
    },
    {
      heading: "MATH",
      subject1: "Math Test Part 1",
      subject2: "Math Test Part 2 ",
      subject3: "Math Test Part 3",
      subject4: "Math Test Part 4",
    },
    {
      heading: "COMPUTER",
      subject1: "Computer Test Part 1",
      subject2: "Computer Test Part 2 ",
      subject3: "Computer Test Part 3",
      subject4: "Computer Test Part 4",
    },
    {
      heading: "URDU",
      subject1: "Urdu Test Part 1",
      subject2: "Urdu Test Part 2 ",
      subject3: "Urdu Test Part 3",
      subject4: "Urdu Test Part 4",
    },
    {
      heading: "GENERAL AWERNESS",
      subject1: "General Awerness Test Part 1",
      subject2: "General Awerness Test Part 2 ",
      subject3: "General Awerness Test Part 3",
      subject4: "General Awerness Test Part 4",
    },
    {
      heading: "COMMUNICATION",
      subject1: "Communication Test Part 1",
      subject2: "Communication Test Part 2 ",
      subject3: "Communication Test Part 3",
      subject4: "Communication Test Part 4",
    },
    {
      heading: "SANSKRIT",
      subject1: "Sanskrit Test Part 1",
      subject2: "Sanskrit Test Part 2 ",
      subject3: "Sanskrit Test Part 3",
      subject4: "Sanskrit Test Part 4",
    },
    {
      heading: "BUSINESS",
      subject1: "Business Test Part 1",
      subject2: "Business Test Part 2 ",
      subject3: "Business Test Part 3",
      subject4: "Business Test Part 4",
    },
    {
      heading: "CIVICS",
      subject1: "Civics Test Part 1",
      subject2: "Civics Test Part 2 ",
      subject3: "Civics Test Part 3",
      subject4: "Civics Test Part 4",
    },
    {
      heading: "GEOLOGY",
      subject1: "Geology Test Part 1",
      subject2: "Geology Test Part 2 ",
      subject3: "Geology Test Part 3",
      subject4: "Geology Test Part 4",
    },
  ];

  return (
    <div className={classes.main}>
      <div className={classes.div1}>
        <div>
          <img
            src="kid.png"
            alt="image not found"
            style={{ width: "200px", height: "128px" }}
          />
        </div>
        <div className={classes.sec}>
          <div>
            <h1>Play Quiz</h1>
          </div>
          <div>
            <p className={classes.para}>
              Welcome to Quizard, where knowledge meets fun! Unleash your
              intellect with our captivating quizzes spanning various topics.
              Challenge yourself, compete with friends, and embark on a journey
              of discovery. Engage in brain-teasing trivia that entertains and
              educates. Quizard - Where every question unlocks a world of
              possibilities!
            </p>
          </div>
          <div>
            <Link to="/start">
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
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.quizcontainer}>
        {Headings.map((item) => (
          <QuizContainer item={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
