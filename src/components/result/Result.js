import React, {Component} from 'react';
import './Result.css'
export default class Result extends Component
{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className={"component-Result " + this.props.result}>
                
            </div>
        )
    }
}
