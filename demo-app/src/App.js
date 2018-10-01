import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';

var dataset1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  name: 'Dataset 1',
  mode: 'lines+markers',
  type: 'scatter'
};
var dataset2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  name: 'Dataset 2',
  mode: 'lines+markers',
  type: 'scatter'
};
var dataset3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers',
  name: 'Dataset 3'
};

var defaultData = [dataset1, dataset2];

var layout1 = {
  title: 'Demo Graph',
  xaxis: {
    title: 'x-axis title'
  },
  yaxis: {
    title: 'y-axis title',
    rangemode: 'tozero',
    showline: true,
    zeroline: true
  }
};

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
          <Dropdown/>
        </p>
        <Graph/>
      </div>
    );
  }
}

class Graph extends React.Component {
  render() {
    return (
      <Plot
        data={defaultData}
        layout={layout1}
      />
    );
  }
}

class Dropdown extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Left Axis Plot
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <DropdownItem/>
        </div>
      </div>
    );
  }
}

class DropdownItem extends React.Component {
  render() {
    return (
        <a className="dropdown-item">Dataset 1</a>
    );
  }
}


export default App;
