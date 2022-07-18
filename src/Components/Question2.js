import React from "react";
import { Link } from "react-router-dom";

function Question2(props) {
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
          Question 2 : Select the correct option to create an e-mail link?
        </h2>

        <div className="option" onClick={selectChoice.bind(this, 0, true)}>
          <p>Option 1 : </p>
          <p>A href=mailto:xxx@yyy.com</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 1, false)}>
          <p>Option 2 : </p>
          <p>Mail = xxx@yyy.com/mail</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 2, false)}>
          <p>Option 3 : </p>
          <p>Mail href="xxx@yyy.com"</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 3, false)}>
          <p>Option 4 : </p>
          <p>A href="xxx@yyy.com"</p>
        </div>
        <div className="btns">
          {/* <Link to="/question1">
            <button>
              <p>previous question</p>
            </button>
          </Link> */}
          <Link to="/question3" onClick={increment.bind(this,j)}>
            <button>
              <p>next question</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question2;
