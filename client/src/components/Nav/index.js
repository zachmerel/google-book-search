//imports and dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

//Nav is a stateful class that starts out with state of open as false(meaning that the page is wide enough to not have a hamburger menu for
//the nave and width as whatever the width of the inner window opens in
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

//the following 4 methods are set up to toggle between a normal navbar and a hamburger menu depending on the width of the innerWindow
//method to update the width
  updateWidth = () => {
    //gets the innerWidth of the window assigns to new state
    const newState = { width: window.innerWidth };
    //if the state is open and the new state is greater than 991 than have newState set to false
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    //sets the new state of the width of the window
    this.setState(newState);
  };
  //method to open the nav component
  toggleNav = () => {
    //makes the new state of open to the oppostite of what it is set as when you click the link to another page of the app
    this.setState({ open: !this.state.open });
  };

//when the nav component mounts to the dom this method listens to update the width of the nav when the window is being resized
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }
//this removes the resize listener to keep the nav the updated with
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  //rendering the nav bar (bootstrap component)
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light mb-2">
      {/* nav brand so when clicked brings you to the home page, see api.js file for path */}
        <Link className="navbar-brand" to="/">
          Google Bookshelf
        </Link>

        <button
        //click event to get the state of the nav when you move to another page of the app
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
        //getting the state of whether or not the navbar is open when in hamburger menu view if is keep class name blank
        //if not collapse for the class
          className={`${this.state.open ? "" : "collapse "}navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
              //collapses the nav bar when you switch between pages
                onClick={this.toggleNav}
                className={
                  //determines which page of the app you are on and sets the link text to active if on home page or search page
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                //directs you to homepage brings you to the home page, see api.js file for path
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
              //collapses the nav bar when you switch between pages
                onClick={this.toggleNav}
                className={
                  //determines which page of the app you are on and sets the link text to active if on saved page
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
                // clicked brings you to the saved page, see api.js file for path
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
