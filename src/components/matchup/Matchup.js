import React, {Component} from 'react';
import Team from '../team';
import './Matchup.css'
export default class Matchup extends Component
{
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

    render(){
        return(
            <div className="component-Matchup">
                <Team location="away" team={this.props.away} customClass={this.awayClass}></Team>
                vs
                <Team location="home" team={this.props.home} customClass={this.homeClass}></Team>
            </div>
        )
    }
}
