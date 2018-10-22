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
        <Feed week="6" record="5-1" units="8.4"></Feed>
      </div>
    );
  }
}

export default App;
