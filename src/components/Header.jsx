import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between bg-blue-600 w-full ">
      <div>
        <h1>QUIZARD</h1>
      </div>
      <div className="flex justify-evenly">
        <p>Live Quiz</p>
        <p>Grade 7</p>
        <p>Login</p>
        <p>Register</p>
      </div>
    </div>
  );
};

export default Header;
