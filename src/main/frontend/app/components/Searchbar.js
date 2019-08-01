import React, { Component } from 'react'
import './Searchbar.scss'
import axios from 'axios'

export default class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchString: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ searchString: e.target.value})
      }

      handleSubmit(e){
          e.preventDefault();


this.setState({})

      }


    render() {
        return (
                <form className="search-bar" onSubmit={this.onSubmit}>
                    <div className="title">Find</div>
                    <input type="text" placeholder="Enter a bar | ...near a beach" onChange={this.handleChange} value={this.state.searchString}></input>
                    <button  type="submit" className="search-icon-box"> 
                    <i className="fas fa-search"></i>
                    </button>
                </form>
        )
    }
}

