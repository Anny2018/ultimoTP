import React from 'react';
import { Link } from "react-router-dom";
import './link.css';
import './content.css';
import homeIcon from "../img/homeIcon.png";

export class Footer extends React.Component {
    render() {
        return (
            <Link to="./"><img className="responsiveImg" src={homeIcon} alt="home" /></Link>
        )
    }
};