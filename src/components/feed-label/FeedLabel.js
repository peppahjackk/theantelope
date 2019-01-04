import React, {Component} from 'react';
import './FeedLabel.css'
import Tag from '../tag'
import Toggle from '../toggle'
export default class FeedLabel extends Component
{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.testClick = this.testClick.bind(this)
    }

    testClick() {
        this.props.toggleFeed()
    }
    render(){
        return(
            <h2 className="component-FeedLabel" onClick={this.testClick}>
                Week {this.props.week} picks <span className="roboto-reg">{this.props.record}</span>
                <Tag data={this.props.units} unit="u"></Tag>
                <Toggle collapsed={this.props.collapsed}></Toggle>
            </h2>
        )
    }
}
