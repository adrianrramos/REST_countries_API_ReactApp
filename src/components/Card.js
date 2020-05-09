import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({
    flag,
    name,
    population,
    region,
    capital,
    nationId
}) => {
    return (
        <div className="card-body">
            <img 
                className="card-image"
                src={flag} 
                alt={name}
                style={{
                    width: '10vw',
                    height: 'auto'
                }}
            />
            <Link to={`/nation/${name}`} className="card-link">
                <h1 className="card-title">
                    {name}
                </h1>
            </Link>
            <div className="card-content-row">
                <h4 className="card-content-label">
                    Population: 
                </h4>
                <p className="card-content-text">
                    {population}
                </p>
            </div>
            <div className="card-content-row">
                <h4 className="card-content-label">
                    Region:
                </h4>
                <p className="card-content-text">
                    {region}
                </p>
            </div>
            <div className="card-content-row">
                <h4 className="card-content-label">
                    Capital: 
                </h4>
                <p className="card-content-text">
                    {capital || 'Not Found'}
                </p>
            </div>
        </div>
    );
}

export default Card
