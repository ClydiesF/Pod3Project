import React, { Component } from 'react'
import './NavBar.scss'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btn1: 'Sign-Up',
            ref1: '/registration',
            btn2: 'Log-In',
            ref2: '/login'
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/currentLoginUser")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({
                btn1: 'Profile',
                ref1: '/welcome',
                btn2: 'Log-out',
                ref2: '/logout'
            }))
            .catch(error => this.setState({
                btn1: 'Sign-Up',
                ref1: '/registration',
                btn2: 'Log-In',
                ref2: '/login'
            }));
    }

    render() {
        return (
            <nav>
                <div className="imageContainer">
                    <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6v8Fil2I6UU0EpqoKkoBLcy-QIjO-1k_l-Bh-oirQ76vkAex" alt="BNB logo"></img></a>
                </div>
                <div className="linksContainer">
                    <a href="/bars">Browse</a>
                    <a href={this.state.ref1}>{this.state.btn1}</a>
                    <a href={this.state.ref2}>{this.state.btn2}</a>
                </div>
            </nav>
        )
    }
}
