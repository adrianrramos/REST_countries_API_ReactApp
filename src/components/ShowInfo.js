import React from 'react'

const ShowInfo = ({
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
}) => {
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
                        <div>
                            <h4>
                                Border Countries: 
                            </h4>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ShowInfo;