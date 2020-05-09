import React, { Component } from 'react'
import nations from '../../apis/nations';

import Card from '../Card';

export class NationList extends Component {
    state = {
        nations: []
    }

    componentDidMount() {
        nations.get('/v2/all')
            .then(response => this.setState({ nations: response.data }))
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div>
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
                        )
                    })
                }
            </div>
        );
    };
};

export default NationList;