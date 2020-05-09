import React, { Component } from 'react';
import nations from '../../apis/nations';
import history from '../../history';

export class NationShow extends Component {
    state = {}

    componentDidMount() {
        const { id } = this.props.match.params;

        nations.get(`https://restcountries.eu/rest/v2/callingcode/${id}`)
            .then(response => this.setState({ nation: response.data[0] }))
            .catch(error => console.log(error));
    };

    renderLanguages = (languages) => {
        let outputList = [];
        languages.forEach(language => {
            return outputList.push(language.name);
        })
        return outputList.join(", ");
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
        
        console.log(currencies)
        return (
            <div>
                <button onClick={() => history.push("/")}>
                    Go Back
                </button>
                <div>
                    <div>
                        <img src={flag} alt={name}></img>
                    </div>
                    <div>
                        <h1>{name}</h1>
                        <div>
                            <ul>
                                <li>
                                    <p>
                                        <strong>
                                            Native Name:
                                        </strong>
                                        {nativeName}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Population:
                                        </strong>
                                        {population}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Region:
                                        </strong>
                                        {region}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Sub Region:
                                        </strong>
                                        {subregion}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Capital:
                                        </strong>
                                        {capital}
                                    </p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>
                                        <strong>
                                            Top Level Domain:
                                        </strong>
                                        {topLevelDomain}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Currencies:
                                        </strong>
                                        {this.renderCurrencies(currencies)}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Languages:
                                        </strong>
                                        {this.renderLanguages(languages)}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>
                                Border Countries: 
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NationShow;