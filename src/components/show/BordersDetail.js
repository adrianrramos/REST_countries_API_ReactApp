import React, { Component } from 'react';
import nations from '../../apis/nations';
import { Link } from 'react-router-dom';
import '../../styles/components/BorderNations.css';

export class BordersDetail extends Component {
    state = {
        borders: []
    }

    componentDidMount() {
        this.props.borders.forEach(border => {
            nations.get(`https://restcountries.eu/rest/v2/alpha/${border}`)
                .then(res => this.setState({ borders: [...this.state.borders, res.data.name] }))
                .catch(err => console.log(err));
        });
    };

    handleBorderLink = () => {
        this.props.onBorderLinkClick();
    }

    render() {
        if (this.state.borders.length <= 0 ) {
            return <h4>No Bordering Nations</h4>
        };
        return (
            <div className="borderNat-container">
                <h4>
                    Border Nations: 
                </h4>
                <div className="borderNat-list">
                {
                    this.state.borders.map(border => {
                        return (
                            <Link to={`/nation/${border}`} key={border} className="borderNat-link" onClick={() => this.handleBorderLink()}>
                                <div className="borderNat-item-box">
                                    <div className="borderNat-item">
                                        {border}
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
                </div>
            </div>
        );
    };
};

export default BordersDetail;