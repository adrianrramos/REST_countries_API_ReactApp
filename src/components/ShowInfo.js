import React, { Component } from 'react';
import BordersDetail from './BordersDetail';

class ShowInfo extends Component{
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
        } = this.props;
        return (
            <div>
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
                            <BordersDetail borders={borders}/>
                        </div>
                    </div>
            </div>
        );
    };
};

export default ShowInfo;