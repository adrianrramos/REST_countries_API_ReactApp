import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import * as handleClickOutside from "react-onclickoutside";


export class FilterDropdown extends Component {
    constructor(props){
        super(props)

        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }
    }

    handleClickOutside(){
        this.setState({
          listOpen: false
        })
      };

      toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
      };

    render() {
        const { list } = this.props;
        const { listOpen, headerTitle } = this.state;
        return(
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList()}>
                        <div className="dd-header-title">{headerTitle}</div>
                        {listOpen
                            ? <FontAwesome name="angle-up" size="2x" className="dd-arrows"/>
                            : <FontAwesome name="angle-down" size="2x" className="dd-arrows"/>
                        }
                </div>
                {listOpen && <ul className="dd-list">
                        {list.map(item => (
                            <li className="dd-list-item" key={item} >{item}</li>
                        ))}
                    </ul>}
            </div>
          )
    }
}

export default FilterDropdown;