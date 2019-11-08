import React from 'react';
import './header.css';
import logo from "../img/logo.png";

export class Header extends React.Component {
    render() {
        return <img className="responsive"
            src={logo}
            alt="MYtinerary" />
    }
};