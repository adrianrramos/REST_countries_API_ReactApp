import React, { Component } from 'react'

const Context = React.createContext();

export class DarkModeStore extends Component {
    state = {
        darkmode: false
    }

    onDarkModeToggle = () => {
        this.setState({ darkmode: !this.state.darkmode})
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onDarkModeToggle: this.onDarkModeToggle }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;