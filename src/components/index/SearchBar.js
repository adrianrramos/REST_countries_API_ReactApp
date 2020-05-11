import React, { Component } from 'react';
import '../../styles/components/Interactions.css';

export class SearchBar extends Component {
    state = {
        term: ''
    }

    onSearchSubmit = event => {
        this.props.onTermSubmit(this.state.term);
        
        event.preventDefault();
    };

    render() {
        return (
            <div className="search-container">
                <form className="search-form" onSubmit={(e) => this.onSearchSubmit(e)}>
                    <input type="text" className="search-input-field" value={this.state.term} placeholder="Search for a country..." onChange={(e) => this.setState({ term: e.target.value })}/>
                    <button type="submit" className="search-submit-btn"><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}

export default SearchBar
