import React, {Component} from 'react';
import './Line.css'
export default class Line extends Component
{
    render(){
        return(
            <div className="component-Line">
                <span class="line">{this.props.line}</span>
            </div>
        )
    }
}
