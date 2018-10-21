import React, {Component} from 'react';
import './Header.css'
export default class Header extends Component
{
    render(){
        return(
            <header className="component-Header">
                <h1><span className="ltGray">@</span>bettingantelope</h1>
                <h2>NFL Picks every Thursday</h2>
            </header>
        )
    }
}
