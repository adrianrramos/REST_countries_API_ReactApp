import React from 'react';
import BordersDetail from './BordersDetail';
import '../../styles/components/ShowPage.css'

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
        <div className="showpage-body">
            <div className="show-flag">
                <img src={flag} alt={name} className="nation-flag"></img>
            </div>
            <div className="show-info-text">
                <h1 className="nation-name">{name}</h1>
                <div className="nation-desc-box">
                    <ul className="nation-list">
                        <li className="nation-list-item">
                            <p className="list-item-text">
                                <strong className="list-item-label">
                                    Native Name:
                                </strong>
                                {nativeName}
                            </p>
                        </li>
                        <li className="nation-list-item">
                            <p className="list-item-text">
                                <strong className="list-item-label">
                                    Population:
                                </strong>
                                {population}
                            </p>
                        </li>
                        <li className="nation-list-item">
                            <p className="list-item-text">
                                <strong className="list-item-label">
                                    Region:
                                </strong>
                                {region}
                            </p>
                        </li>
                        <li className="nation-list-item">
                            <p className="list-item-text">
                                <strong className="list-item-label">
                                    Sub Region:
                                </strong>
                                {subregion}
                            </p>
                        </li>
                        <li className="nation-list-item">
                            <p className="list-item-text">
                                <strong className="list-item-label">
                                    Capital:
                                </strong>
                                {capital}
                            </p>
                        </li>
                    </ul>
                    <ul className="nation-list">
                        <li className="nation-list-item">
                            <p className="list-item-text">
                                <strong className="list-item-label">
                                    Top Level Domain:
                                </strong>
                                {topLevelDomain}
                            </p>
                        </li>
                        <li className="nation-list-item">
                            <p className="list-item-text">
                                <strong className="list-item-label">
                                    Currencies:
                                </strong>
                                {currencies}
                            </p>
                        </li>
                        <li className="nation-list-item">
                            <p className="list-item-text">
                                <strong className="list-item-label">
                                    Languages:
                                </strong>
                                {languages}
                            </p>
                        </li>
                    </ul>
                </div>
                <BordersDetail borders={borders}/>
            </div>
        </div>
    );
};

export default ShowInfo;