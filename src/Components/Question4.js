import React from "react";
import { Link } from "react-router-dom";

function Question4(props) {

  let j=0;

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
      j=1;
    } else {
      j=0;
    }
  };
  const increment=(points)=>
  {
    props.incPoints(j);
  }
  return (
    <div className="page">
      <div className="question-1">
        <h2>
          Question 4 : In CSS,select the property used to set the background
          color of an image?
        </h2>

        <div className="option" onClick={selectChoice.bind(this, 0, false)}>
          <p>Option 1 : </p>
          <p>color</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 1, false)}>
          <p>Option 2 : </p>
          <p>color:background</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 2, false)}>
          <p>Option 3 : </p>
          <p>background:color</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 3, true)}>
          <p>Option 4 : </p>
          <p>background-color</p>
        </div>
        <div className="btns">
          {/* <Link to="/question3">
            <button>
              <p>previous question</p>
            </button>
          </Link> */}
          <Link to="/stop" onClick={increment.bind(this,j)}>
            <button>
              <p>End Quiz</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question4;
