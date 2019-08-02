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
                            <h4>Cape Cod</h4>
                            <p>Quaint villages, seafood shacks and lighthouses</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://www.mvy.com/uploads/1/0/8/6/108635833/ferry-arrives-in-vineyard-haven_1_orig.jpg" alt="beach-vineyard"/>
                        <div className="content">
                            <h4>Martha's Vineyard</h4>
                            <p>Harbor towns, sandy beaches and farmland</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX75CqzQui1VUGBBcfnds-6sgEN5yDKC9R0RPgaKPXw47RoxZf" alt="beach-hampton"/>
                        <div className="content">
                            <h4>The Hamptons</h4>
                            <p>Summer destination for fancy New Yorkers</p>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <div className="review-section">
                        <div className="image">
                            <img src="https://www.sccpre.cat/mypng/detail/224-2243045_reviews-icon-thank-you-for-customer-review-post.png"></img>
                        </div>
                        <div className="text">
                            <h3>Help the Community</h3>
                            <p>Find Bnb Reviews Helpful? Start helping others by sharing your experience.</p>
                            <button>Start Your First Review</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
