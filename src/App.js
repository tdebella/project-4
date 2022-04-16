import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeftComp from "./Components/LeftComp";
import RightComp from "./Components/RightComp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <LeftComp />
        <RightComp />
      </div>
    </div>
  );
}

export default App;
