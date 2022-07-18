import React from "react";
import { Link } from "react-router-dom";

function Question3(props) {
  let j = 0;

  const colorChange = (number) => {
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll(".option")[i].style.backgroundColor =
        "transparent";
    }
    document.querySelectorAll(".option")[number].style.backgroundColor =
      "#FBB454";
  };

  const selectChoice = (number, answer) => {
    colorChange(number);
    if (answer && true) {
      j = 1;
    } else {
      j = 0;
    }
  };
  const increment = (points) => {
    props.incPoints(j);
  };
  return (
    <div className="page">
      <div className="question-1">
        <h2>
          Question 3 : Select the property used to create space between the
          element’s border and inner content?
        </h2>

        <div className="option" onClick={selectChoice.bind(this, 0, false)}>
          <p>Option 1 : </p>
          <p>margin</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 1, false)}>
          <p>Option 2 : </p>
          <p>spacing</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 2, false)}>
          <p>Option 3 : </p>
          <p>border</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 3, true)}>
          <p>Option 4 : </p>
          <p>padding</p>
        </div>
        <div className="btns">
          {/* <Link to="/question2">
            <button>
              <p>previous question</p>
            </button>
          </Link> */}
          <Link to="/question4" onClick={increment.bind(this, j)}>
            <button>
              <p>next question</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question3;
