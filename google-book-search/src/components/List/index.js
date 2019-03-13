//imports
import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

//exports the list item which takes in the children of the container it is responding to
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

//exports the list item within the list itself and takes in the children of the container it is inside
export const ListItem = ({ children }) => {
  return <li className="list-group-item">{children}</li>;
}