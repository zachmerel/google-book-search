//imports
import React from "react";
import "./style.css";

//returns a dumb Jumbotron element that takes in the children of the container dependent on which page you are on
const Jumbotron = ({ children }) => {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
