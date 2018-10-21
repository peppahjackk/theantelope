import React, {Component} from 'react';
import './Team.css'
export default class Team extends Component
{
    constructor(props) {
        super(props);
        
        console.log(props);
    }
    render(){
        return(
            <div className={"component-Team team " + this.props.location + " " + this.props.customClass}>
                {this.props.team}
            </div>
        )
    }
}
