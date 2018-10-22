import React, {Component} from 'react';
import './Toggle.css'
export default class Toggle extends Component
{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="component-Toggle">
            <div>+</div>
            </div>
        )
    }
}
