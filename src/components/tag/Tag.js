import React, {Component} from 'react';
import './Tag.css'
export default class Tag extends Component
{
    constructor(props) {
        super(props)

        if (this.props.data > 0) {
            this.color = 'green';
        } else {
            this.color = 'red';
        }
    }
    render(){
        return(
            <div className={"component-Tag bg " + this.color}>
                <h2>{this.props.data}{this.props.unit}</h2>
            </div>
        )
    }
}
