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
        <div>
            <img 
                src={flag} 
                alt={name}
                style={{
                    width: '10vw',
                    height: 'auto'
                }}
            />
            <Link to={`/nation/${nationId}`}>
                <h1>
                    {name}
                </h1>
            </Link>
            <div>
                <h4>
                    Population: 
                </h4>
                <p>
                    {population}
                </p>
            </div>
            <div>
                <h4>
                    Region:
                </h4>
                <p>
                    {region}
                </p>
            </div>
            <div>
                <h4>
                    Capital: 
                </h4>
                <p>
                    {capital || 'Not Found'}
                </p>
            </div>
        </div>
    );
}

export default Card
