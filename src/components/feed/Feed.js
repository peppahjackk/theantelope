import React, { Component } from 'react';
import './Feed.css'
import Matchup from '../matchup';
import FeedLabel from '../feed-label'
import { CSSTransition } from 'react-transition-group';

export default class Feed extends Component {
    state = {
        collapsed: this.props.collapsed
    }

    toggleCollapse = (e) => {
        this.setState({
            collapsed: !this.state.collapsed
        })
        console.log(this.state);
    }

    render() {
        return (
            <div className={"component-Feed"} onClick={this.toggleCollapse}>
                <FeedLabel week={this.props.week} record={this.props.record} units={this.props.units} ></FeedLabel>
                <CSSTransition
                    in={this.state.collapsed}
                    classNames="feed-content"
                    unmountOnExit
                    timeout={500}
                >
                    {
                        <div class="feed-content"><Matchup home="LAC" away="TEN" pick="home" correct="wrong" ml="-270" spread="-6.5"></Matchup>
                            <Matchup home="TB" away="CLE" pick="home" correct="wrong" ml="-185" spread="-4"></Matchup>
                            <Matchup home="BAL" away="NO" pick="home" correct="wrong" ml="-134" spread="-2.5"></Matchup>
                            <Matchup home="KC" away="CIN" pick="home" correct="correct" ml="-260" spread="-6"></Matchup></div>
                    }

                </CSSTransition>

            </div>
        )
    }
}
