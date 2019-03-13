//imports
import React from "react";
import "./style.css";

//creates a dumb function that returns the footer 
const Footer = () => {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i class="fab fa-react" /> Built using React.js
      </p>
    </footer>
  );
};

export default Footer;
