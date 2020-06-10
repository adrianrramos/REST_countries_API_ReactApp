import React, { Component } from "react";
import "../../styles/components/Header.css";
import "../../styles/darkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";
import { Link } from "react-router-dom";

class Header extends Component {
  static contextType = DarkModeContext;

  render() {
    return (
      <div
        className={`header-container ${
          this.context.darkmode ? "dark-element " : ""
        }`}
      >
        <div className="header-title-box">
          <Link to="/" id="header-link">
            <h1 className="header-title">Where in the world?</h1>
          </Link>
        </div>
        <div
          className="darkmode-box"
          onClick={() => this.context.onDarkModeToggle()}
        >
          {this.context.darkmode ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="far fa-moon"></i>
          )}
          <p className="darkmode-text">Dark Mode</p>
        </div>
      </div>
    );
  }
}

export default Header;
