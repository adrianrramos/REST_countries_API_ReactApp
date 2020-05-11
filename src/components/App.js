import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NationList from './nations/NationList';
import NationShow from './nations/NationShow';
import Header from './partials/Header';
import '../styles/darkMode.css'

import { DarkModeStore } from '../contexts/DarkModeContext';

export class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <DarkModeStore>
                    <Header />
                    <Route path="/" component={NationList}  exact/>
                    <Route path="/nation/:name" component={NationShow}  exact/>
                </DarkModeStore>
            </BrowserRouter>
        )
    }
}

export default App;