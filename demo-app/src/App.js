import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GraphDisplay from './GraphDisplay.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + PlotlyJS Demo App</h1>
        </header>
        <p className="App-intro">
          Select datasets from the dropdown menus below.
        </p>
        <GraphDisplay/>
      </div>
    );
  }
}

export default App;
