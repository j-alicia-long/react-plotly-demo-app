import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';
import defaultData from './example-data.js';
import layout1 from './layouts.js';


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
      <select>
        {listItems}
      </select>
    );
  }
}

class GraphDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset_left: defaultData[0],
      dataset_right: defaultData[1]
    };

    this.handleChangeLeft = this.handleChangeLeft.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
  }

  handleChangeLeft(event) {
    this.setState({
      dataset_left: event.target.value,
      dataset_right: this.state.dataset_right
    });
  }
  handleChangeRight(event) {
    this.setState({
      dataset_left: this.state.dataset_left,
      dataset_right: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Plot
          data={[this.state.dataset_left, this.state.dataset_right]}
          layout={layout1}
        />

        <label>
          Select datasets to display:
          <select value={this.state.dataset_left} onChange={this.handleChangeLeft}>
            {listItems}
          </select>
          <select value={this.state.dataset_right} onChange={this.handleChangeRight}>
            {listItems}
          </select>
        </label>

      </div>
    );
  }
}

const target_categories = ["a0AllInCountry", "STxa0AsylumRecep",
                    "STxa0InDetention", "STxa0RefRecognized",
                    "STxa0SubsidRecognized", "STxa0HumanRecognized",
                    "STxa0NotRecognized", "STxa0IllegalPool",
                    "a0IllegalInCountry", "a0AllJobsTotal"]

const listItems = target_categories.map((category) =>
  <option value={category}>{category}</option>
);

export default App;
