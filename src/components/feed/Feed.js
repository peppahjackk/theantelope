import React, {Component} from 'react';
import './Feed.css'
import Matchup from '../matchup';
import FeedLabel from '../feed-label'
export default class Feed extends Component
{
    render(){
        return(
            <div className="component-Feed">
                <FeedLabel week={this.props.week} record={this.props.record} units={this.props.units}></FeedLabel>
                <Matchup home="LAC" away="TEN" pick="home" correct="wrong" ml="-270" spread="-6.5"></Matchup>
                <Matchup home="TB" away="CLE" pick="home" correct="wrong" ml="-185" spread="-4"></Matchup>
                <Matchup home="BAL" away="NO" pick="home" correct="wrong" ml="-134" spread="-2.5"></Matchup>
                <Matchup home="KC" away="CIN" pick="home" correct="correct" ml="-260" spread="-6"></Matchup>
            </div>
        )
    }
}
