import React from "react";
import { Link } from "react-router-dom";

function Stop(props) {
  return (
    <div className="page">
      <div className="question-1">
        <h2>Thank You for participating in the quiz</h2>
        <div className="btns">
          <div className="Score">
            <p>Score = {props.Score}</p>
          </div>
          
          <Link to="/" onClick={props.reset}>
            <button>
              <p>Restart Quiz</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Stop;
