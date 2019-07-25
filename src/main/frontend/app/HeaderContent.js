import React, { Component } from 'react';
import './HeaderContent.scss';


export default class HeaderContent extends Component {
    render() {
        return (
            <div className="HeaderContent">
                <div className="nav">
                    <p>Write a Review</p>
                    <div className="links">
                        <a href="#">Sign-up</a>
                    </div>
                    <div className="links">
                        <a href="#">Log-in</a>
                    </div>
                </div>

                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6v8Fil2I6UU0EpqoKkoBLcy-QIjO-1k_l-Bh-oirQ76vkAex" alt="BNB logo"/>
                </div>


                <div className="search-bar">
                    <div className="title">Find</div>
                    <input type="text" placeholder="Enter a bar | ...near a beach"></input>
                    <div className="search-icon-box"> 
                    <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="category">
                    <p><i className="fas fa-cocktail"></i>  Bars</p>
                    <p><i className="fas fa-umbrella-beach"></i>   Beaches</p>
                </div>
                <hr/>
                <h6>"Getting Litty"</h6>
                <h6>photo by Master Cheif</h6>
            </div>
        )
    }
}
