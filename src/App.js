// import logo from "./logo.svg";
import "./App.css";
import Start from "./Components/Start";
import Stop from "./Components/Stop";
import Question1 from "./Components/Question1";
import Question2 from "./Components/Question2";
import Question3 from "./Components/Question3";
import Question4 from "./Components/Question4";
import React, { useState } from "react";

import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const [Score, setScore] = useState(0);

  const incPoints = (ans) => {
    // alert(ans);
    setScore(Score+ans);
  };

  const resetScore=()=>{
    setScore(0);
  }

  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            exact
            path="question1"
            element={<Question1 incPoints={incPoints} />}
          />
          <Route
            exact
            path="question2"
            element={<Question2 incPoints={incPoints} />}
          />
          <Route
            exact
            path="question3"
            element={<Question3 incPoints={incPoints} />}
          />
          <Route
            exact
            path="question4"
            element={<Question4 incPoints={incPoints} />}
          />
          <Route path="/stop" element={<Stop Score={Score} reset={resetScore}/>} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
