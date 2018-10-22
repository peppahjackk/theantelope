import React, { Component } from 'react';
import './Header.css'
import Tag from '../tag'
export default class Header extends Component {
    render() {
        return (
            <header className="component-Header">
                <h1><span className="ltGray">@</span>bettingantelope</h1>
                <div className="subhead">
                    <h2>NFL Picks every Thursday</h2>
                    <h2>{this.props.record}</h2>
                    <Tag data={this.props.units} unit="u"></Tag>
                </div>
            </header>
        )
    }
}
