import React, {Component} from 'react';
import './Record.css'
export default class Record extends Component
{
    render(){
        return(
            <div className="component-Record">
                {this.props.data}
            </div>
        )
    }
}
