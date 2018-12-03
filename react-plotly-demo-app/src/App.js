import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GraphManager from './GraphManager.js';
//GraphManager contains all tabs of GraphDisplays

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + PlotlyJS Demo App</h1>
        </header>

        <GraphManager/>

      </div>
    );
  }
}

export default App;
