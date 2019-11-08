import React from 'react';
import { Link } from "react-router-dom";
import right from "../img/right.png";
import './link.css';
import './content.css';


export default class Links extends React.Component {
    render() {
        return (
            <div className="content">
              <Link to="./cities"><img className="responsiveImg" src={right} alt="cities" /></Link>
                <h4>Want to build your own MYtinerary?</h4>
                <ul>
                        <li><Link className="link" to="./login">Log In </Link></li>
                        <li><Link className="link" to="./signup">Create Account</Link></li>
                </ul>
            </div>
        )
    }
};