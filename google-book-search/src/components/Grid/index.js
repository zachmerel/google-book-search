//imports
import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export const Container = ({ fluid, children }) => {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export const Row = ({ fluid, children }) => {
    //if the class name for the row is fluid than replace "row=fluid" which means the width
    // will be set width: 100% across all viewport and device sizes.
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export const Col = ({ size, children }) => {
  return (
    <div
    //takes in the classname where it see size
      className={size
        //splits each part of the class on space
        .split(" ")
        //maps over the size elements adds col- plus whatever size the col is for that element
        .map(size => "col-" + size)
        //joins the .map array back to be a readable class
        .join(" ")}
    >
      {children}
    </div>
  );
}
