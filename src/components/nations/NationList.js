import React, { Component } from 'react'
import nations from '../../apis/nations';

import SearchBar from '../SearchBar';
import FilterDropdown from '../dropdown/FilterDropdown';
import Card from '../Card';

export class NationList extends Component {
    state = {
        term: ''
    };

    componentDidMount = async () => {
        const response = await nations.get('all');
        this.setState({ nations: response.data})
    };

    onTermSubmit = async term => {
        const response = await nations.get(`name/${term}`);
        this.setState({ nations: response.data });
    }

    render() {
        return (
            <div className="main-container">
                <div className="interactions-container">
                    <SearchBar onTermSubmit={this.onTermSubmit}/>
                    <FilterDropdown />
                </div>

                <div className="cards-container">
                    {this.state.nations && this.state.nations.map(nation => {
                        return  <Card 
                                    key={nation.numericCode}
                                    flag={nation.flag}
                                    name={nation.name}
                                    population={nation.population}
                                    region={nation.region}
                                    capital={nation.capital}
                                    nationId={nation.callingCodes[0]}
                                />;
                    })}
                </div>
            </div>
        );
    };
};

export default NationList;