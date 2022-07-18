import React from "react";
import { Link } from "react-router-dom";

function Question1(props) {
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
          Question 1 : Select the option to make a list that lists the items
          with numbers?
        </h2>

        <div className="option" onClick={selectChoice.bind(this, 0, false)}>
          <p>Option 1 : </p>
          <p>Ul</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 1, false)}>
          <p>Option 2 : </p>
          <p>List</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 2, true)}>
          <p>Option 3 : </p>
          <p>Ol</p>
        </div>
        <div className="option" onClick={selectChoice.bind(this, 3, false)}>
          <p>Option 4 : </p>
          <p>Dl</p>
        </div>
        <div className="btns">
          {/* <Link to="/">
            <button>
              <p>previous question</p>
            </button>
          </Link> */}
          <Link to="/question2" onClick={increment.bind(this,j)}>
            <button>
              <p>next question</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question1;
