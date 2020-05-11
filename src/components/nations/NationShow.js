import React, { Component } from 'react';
import nations from '../../apis/nations';
import { Link } from 'react-router-dom';
import ShowInfo from '../show/ShowInfo';
import '../../styles/components/ShowPage.css';
import '../../styles/darkMode.css'

import DarkModeContext from '../../contexts/DarkModeContext';

export class NationShow extends Component {
    state = {}

    static contextType = DarkModeContext;

    componentDidMount() {
        
        const { name } = this.props.match.params;

        nations.get(`name/${name}`)
            .then(response => this.setState({ nation: response.data[0] }))
            .catch(error => console.log(error));
    };

    onBorderLinkClick = () => {
        // const { name } = this.props.match.params;

        // nations.get(`name/${name}`)
        //     .then(response => this.setState({ nation: response.data[0] }))
        //     .catch(error => console.log(error));
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

    renderNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
            <div className={`"showPage-container ${this.context.darkmode ? 'dark-body add-height' : ''}`}>
                <div className={`back-btn-box ${this.context.darkmode ? 'dark-bg' : ''}`}>
                    <Link to="/" className={`goback-btn ${this.context.darkmode ? 'dark-element' : ''}`}>
                        <i className="fas fa-arrow-left"></i>
                        Back
                    </Link>
                </div>
                <ShowInfo 
                    flag={flag}
                    name={name}
                    nativeName={nativeName}
                    population={this.renderNumber(population)}
                    region={region}
                    subregion={subregion}
                    capital={capital}
                    topLevelDomain={topLevelDomain}
                    currencies={this.renderCurrencies(currencies)}
                    languages={this.renderLanguages(languages)}
                    borders={borders}
                    onBorderLinkClick={this.onBorderLinkClick}
                />
            </div>
        )
    }
}

export default NationShow;