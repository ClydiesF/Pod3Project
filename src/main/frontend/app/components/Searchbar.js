import React, { Component } from 'react'
import './Searchbar.scss'

export default class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchString: ''
        }
    }

    render() {
        return (
                <div className="search-bar">
                    <div className="title">Find</div>
                    <input type="text" placeholder="Enter a bar | ...near a beach"></input>
                    <div className="search-icon-box"> 
                    <i className="fas fa-search"></i>
                    </div>
                </div>
        )
    }
}
