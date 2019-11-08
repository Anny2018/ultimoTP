import React from 'react';
import  Links  from './alinks.js';

export default class Content extends React.Component {
    render() {
        return (
        <div>
            <h3>Find your perfect trip, designed by<br /> insiders who know and love their cities.</h3>
            <h2>Start Browsing</h2>
            <Links />
        </div>
        )
    }
};