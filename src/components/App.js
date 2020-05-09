import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import history from '../history';

import NationList from './nations/NationList';
import NationShow from './nations/NationShow';
import Header from './Header';

export class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Header />
                <Route path="/" component={NationList}  exact/>
                <Route path="/nation/:id" component={NationShow}  exact/>
            </Router>
        )
    }
}

export default App
