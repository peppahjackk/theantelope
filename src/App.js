import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Feed></Feed>
      </div>
    );
  }
}

export default App;
