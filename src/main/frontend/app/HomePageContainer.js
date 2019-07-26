import React, { Component } from 'react';
import HeaderContent from './HeaderContent';
import Locations from './Locations';

export default class HomePageContainer extends Component {
    render() {
        return (
            <div>
                <HeaderContent/>
                <Locations/>
            </div>
        )
    }
}
