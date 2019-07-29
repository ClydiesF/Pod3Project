import React, { Component } from 'react';
import './Locations.scss'

export default class Locations extends Component {
    render() {
        return (
            <div className="locations">
                <h3><i>Check out some of the hottest locations!</i></h3>
                <div className="box-section">
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhR-7RqHBcSkZoeUKauYho7dmSVnQXgXx0TlojptFjR9x5Z3nyw" alt="beach"/>
                        <div className="content">
                            <h4>The Cape</h4>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://static1.squarespace.com/static/5779a864893fc0e70a93592d/t/578846069de4bb14b3998f2c/1468548621000/marthas-vineyard-luxury-hotels.jpg?format=2500w" alt="beach-vineyard"/>
                        <div className="content">
                            <h4>Martha's Vineyard</h4>
                            <p>great for family fun!</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX75CqzQui1VUGBBcfnds-6sgEN5yDKC9R0RPgaKPXw47RoxZf" alt="beach-hampton"/>
                        <div className="content">
                            <h4>Hampton Beach</h4>
                            <p>Beautiful bars and fun!</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
