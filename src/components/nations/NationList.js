import React, { Component } from 'react'
import nations from '../../apis/nations';

import SearchBar from '../index/SearchBar';
import FilterDropdown from '../dropdown/FilterDropdown';
import Card from '../index/Card';

export class NationList extends Component {
    state = {
        term: ''
    };

    componentDidMount = async () => {
        const response = await nations.get('all');
        this.setState({ nations: response.data});
    };

    onTermSubmit = async term => {
        const response = await nations.get(`name/${term}`);
        this.setState({ nations: response.data });
    }

    onClickFilter = async (region) => {
        const response = await nations.get(`region/${region}`);
        this.setState({ nations: response.data});
    };

    renderNumber = (number) => {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    render() {
        return (
            <div className="main-container">
                <div className="interactions-container">
                    <SearchBar onTermSubmit={this.onTermSubmit}/>
                    <FilterDropdown 
                        title="Filter by Region"
                        list={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
                        onClickFilter={this.onClickFilter}
                    />
                </div>

                <div className="cards-container">
                    {this.state.nations && this.state.nations.map(nation => {
                        return  <Card 
                                    key={nation.numericCode}
                                    flag={nation.flag}
                                    name={nation.name}
                                    population={this.renderNumber(nation.population)}
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