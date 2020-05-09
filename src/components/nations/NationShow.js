import React, { Component } from 'react';
import nations from '../../apis/nations';
import history from '../../history';
import ShowInfo from '../ShowInfo';

export class NationShow extends Component {
    state = {}

    componentDidMount() {
        const { id } = this.props.match.params;

        nations.get(`https://restcountries.eu/rest/v2/callingcode/${id}`)
            .then(response => this.setState({ nation: response.data[0] }))
            .catch(error => console.log(error));
    };

    renderCurrencies = (currencies) => {
        let outputList = [];
        currencies.forEach(currency => {
            return outputList.push(currency.name);
        })
        return outputList.join(", ");
    };

    render() {
        if (!this.state.nation) {
            return <div>Loading....</div>
        }

        const { 
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders
        } = this.state.nation;

        return (
            <div>
                <button onClick={() => history.push("/")}>
                    Go Back
                </button>
                <ShowInfo 
                    flag={flag}
                    name={name}
                    nativeName={nativeName}
                    population={population}
                    region={region}
                    subregion={subregion}
                    capital={capital}
                    topLevelDomain={topLevelDomain}
                    currencies={currencies}
                    languages={languages}
                    borders={borders}
                />
            </div>
        )
    }
}

export default NationShow;