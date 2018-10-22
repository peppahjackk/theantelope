import React, { Component } from 'react';
import Team from '../team';
import Line from '../line';
import Result from '../result';
import './Matchup.css'
export default class Matchup extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.homeClass = props.correct;
        this.awayClass = props.correct;

        if (props.pick === 'home') {
            this.homeClass += ' pick'
        }

        if (props.pick === 'away') {
            this.awayClass += ' pick'
        }

    }

    render() {
        return (
            <div className="component-Matchup">
                <div className="matchup-container">
                    <Team location="away" team={this.props.away} customClass={this.awayClass}></Team>
                    vs
                    <Team location="home" team={this.props.home} customClass={this.homeClass}></Team>
                    <Line line={this.props.ml} lineType="ML"></Line>
                    <Line line={this.props.spread} lineType="Spread"></Line>
                    <Result result={this.props.correct}></Result>
                </div>
            </div>
        )
    }
}
