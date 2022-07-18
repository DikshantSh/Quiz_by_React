import React from "react";
import { Link } from "react-router-dom";

function start() {
  return (
    <div className="page">
      <Link to="question1">
        <div className="start-button">
          <h1>START <br />QUIZ</h1>
        </div>
      </Link>
    </div>
  );
}

export default start;
