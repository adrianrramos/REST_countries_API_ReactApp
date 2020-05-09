import React, { Component } from 'react'
import nations from '../../apis/nations';

import Header from '../Header';
import SearchBar from '../SearchBar';
import FilterDropdown from '../FilterDropdown';
import Card from '../Card';

export class NationList extends Component {
    state = {};

    componentDidMount() {
        nations.get('/v2/all')
            .then(response => this.setState({ nations: response.data }))
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div className="main-container">
                <div className="interactions-container">
                    <SearchBar />
                    <FilterDropdown />
                </div>

                <div className="cards-container">
                    {
                        this.state.nations && this.state.nations.map(nation => {
                            return (

                                    <Card 
                                        key={nation.numericCode}
                                        flag={nation.flag}
                                        name={nation.name}
                                        population={nation.population}
                                        region={nation.region}
                                        capital={nation.capital}
                                        nationId={nation.callingCodes[0]}
                                    />
                            );
                        })
                    }
                </div>
            </div>
        );
    };
};

export default NationList;