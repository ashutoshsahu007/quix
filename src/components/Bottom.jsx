import React from "react";
import classes from "./Bottom.module.css";

const Bottom = () => {
  return (
    <div className={classes.bottom}>
      <div>
        <p style={{ color: "white" }}>
          Quizard © Copyright 2024 . All rights reserved.
        </p>
      </div>
      <div>
        <ul className={classes.list}>
          <li> About Us</li>
          <li> Contact Us</li>
          <li>Privacy & Cookies Policy</li>
          <li> Terms and Conditions</li>
          <li> Disclaimer</li>
        </ul>
      </div>
    </div>
  );
};

export default Bottom;
