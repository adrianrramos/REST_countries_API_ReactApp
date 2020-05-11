import React from 'react';
import '../../styles/components/Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-title-box">
                <h1 className="header-title">
                    Where in the world?
                </h1>
            </div>
            <div className="darkmode-box">
                {
                    true // TODO add state for darkmode 
                    ? <i className="far fa-moon"></i>
                    : <i className="fas fa-moon"></i>
                }
                <p className="darkmode-text">
                    Dark Mode
                </p>
            </div>
        </div>
    )
}

export default Header
