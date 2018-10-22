import React, {Component} from 'react';
import './FeedLabel.css'
import Tag from '../tag'
export default class FeedLabel extends Component
{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <h2 className="component-FeedLabel">
                Week {this.props.week} picks <span class="roboto-reg">{this.props.record}</span>
                <Tag data={this.props.units} unit="u"></Tag>
            </h2>
        )
    }
}
