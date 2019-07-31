import React, { Component } from 'react';
import './HeaderContent.scss';
import Searchbar from './Searchbar';

export default class HeaderContent extends Component {
    render() {
        return (
            <div className="HeaderContent">
                <div className="nav">
                    <div className="links">
                        <a href="/bars">Browse</a>
                    </div>
                    <div className="links">
                        <a href="/registration">Sign-up</a>
                    </div>
                    <div className="links">
                        <a href="/login">Log-in</a>
                    </div>
                </div>
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6v8Fil2I6UU0EpqoKkoBLcy-QIjO-1k_l-Bh-oirQ76vkAex" alt="BNB logo"/>
                </div>
                <Searchbar />
                <div className="category">
                    <p><i className="fas fa-cocktail"></i>  Bars</p>
                    <p><i className="fas fa-umbrella-beach"></i>   Beaches</p>
                </div>
                <div className="slogan-section">
                    <p className="slogan"><i>find the best places to quench your thirst...</i></p>
                </div>
               
                <h6>"Pool Party Diving"</h6>
                <h6>photo by : Jakob Owens @jakobowens1</h6>
            </div>
        )
    }
}
