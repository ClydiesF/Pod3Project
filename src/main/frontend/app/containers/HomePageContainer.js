import React, { Component } from 'react';
import HeaderContent from '../components/HeaderContent';
import Locations from '../components/Locations';

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
