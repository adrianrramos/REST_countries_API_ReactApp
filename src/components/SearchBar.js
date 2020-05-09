import React, { Component } from 'react'

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
                    <input type="text" className="search-input" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}/>
                    <input type="submit" className="search-submit"/>
                </form>
            </div>
        )
    }
}

export default SearchBar
