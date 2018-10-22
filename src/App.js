import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header record="33-12" units="+21"></Header>
        <Feed week="7" record="1-3" units="-3.62"></Feed>
        <Feed week="6" record="5-1" units="8.4" collapsed="collapsed"></Feed>
        <Feed week="5" record="8-1" units="12.8" collapsed="collapsed"></Feed>
        <Feed week="4" record="3-2" units="1"></Feed>
        <Feed week="3" record="3-3" units="-0.2" collapsed="collapsed"></Feed>
        <Feed week="2" record="4-1" units="3.7" collapsed="collapsed"></Feed>
        <Feed week="1" record="5-1" units="2.1" collapsed="collapsed"></Feed>
      </div>
    );
  }
}

export default App;
