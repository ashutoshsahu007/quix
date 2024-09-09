import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.quizard}>
        <h1>QUIZARD</h1>
      </div>
      <div className={classes.headerlist}>
        <ul className={classes.list}>
          <li>Live Quiz</li>
          <li>Default</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
