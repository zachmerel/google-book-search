//imports
import React from "react";
import "./style.css";

//dumb card function that takes in the cards, icon, title and children depending which cards is being rendered
let Card = ({ icon, title, children }) => {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
