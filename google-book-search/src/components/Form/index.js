//imports
import React from "react";
import "./style.css";


//this function returns the form where you search for your book, it takes in the books title as well as the methods
//to get the users input (book title) and the method when the submit button is clicked
const Form = ({ q, handleInputChange, handleFormSubmit }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Name of the Wind"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;