import React, {Component} from 'react';
import Matchup from '../matchup';
import './Feed.css'
export default class Feed extends Component
{
    render(){
        return(
            <div className="component-Feed">
                <Matchup home="LAC" away="TEN" pick="home" correct="wrong"></Matchup>
                <Matchup home="TB" away="CLE" pick="home" correct="correct"></Matchup>
                <Matchup home="BAL" away="NO" pick="home" correct="pending"></Matchup>
                <Matchup home="KC" away="CIN" pick="home" correct="pending"></Matchup>
            </div>
        )
    }
}
