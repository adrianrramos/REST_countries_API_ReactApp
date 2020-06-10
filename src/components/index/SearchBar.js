import React, { Component } from "react";
import "../../styles/components/Interactions.css";
import "../../styles/darkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";

export class SearchBar extends Component {
  state = {
    term: "",
  };

  static contextType = DarkModeContext;

  onSearchSubmit = event => {
    this.props.onTermSubmit(this.state.term);

    event.preventDefault();
  };

  render() {
    return (
      <div className="search-container">
        <form
          className={`search-form ${
            this.context.darkmode ? "dark-element " : ""
          }`}
          onSubmit={e => this.onSearchSubmit(e)}
        >
          <input
            type="text"
            className={`search-input-field ${
              this.context.darkmode ? "dark-element-ns " : ""
            }`}
            value={this.state.term}
            placeholder="Search for a country..."
            onChange={e => this.setState({ term: e.target.value })}
          />
          <button
            type="submit"
            className={`search-submit-btn ${
              this.context.darkmode ? "dark-element-ns " : ""
            }`}
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
