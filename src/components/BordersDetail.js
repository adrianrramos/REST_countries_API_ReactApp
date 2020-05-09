import React, { Component } from 'react';
import nations from '../apis/nations';

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

    render() {
        if (!this.state.borders) {
            return <div></div>
        }
        return (
            <div>
                <h4>
                    Border Countries: 
                </h4>
                {
                    this.state.borders.map(border => {
                        return <div key={border}>{border}</div>;
                    })
                }
            </div>
        );
    };
};

export default BordersDetail;