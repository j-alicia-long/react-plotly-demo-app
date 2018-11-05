import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import plotData, {categories} from './datasets.js';
import layout1 from './layouts.js';

console.log(plotData);

class GraphDisplay extends Component {
  constructor(props) {
    super(props);

    var rightYSet = Object.assign({}, plotData[0]);
    rightYSet.yaxis = 'y2';

    this.state = {
      dataset_left: plotData[0],
      dataset_right: rightYSet,
      layout: layout1
    };

    this.handleChangeLeft = this.handleChangeLeft.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
  }

  handleChangeLeft(event) {
    // console.log("Left: ", categories[event.target.value])

    var selectedSet = Object.assign({}, plotData[event.target.value]);
    selectedSet.yaxis = 'y';

    this.setState({
      dataset_left: selectedSet,
      dataset_right: this.state.dataset_right,
      layout: layout1
    });
  }
  handleChangeRight(event) {
    // console.log("Right: ", categories[event.target.value])

    var selectedSet = plotData[event.target.value];
    selectedSet.yaxis = 'y2';

    this.setState({
      dataset_left: this.state.dataset_left,
      dataset_right: selectedSet,
      layout: layout1
    });
  }

  render() {
    const {dataset_left, dataset_right, layout} = this.state;

    return (
      <div>
        <div id="Plot">
          <Plot
            data={[dataset_left, dataset_right]}
            layout={layout}
          />
        </div>

        <label>
          Select datasets to display:
          <select onChange={this.handleChangeLeft}>
            {listItems}
          </select>
          <select onChange={this.handleChangeRight}>
            {listItems}
          </select>
        </label>

      </div>
    );
  }
}

const listItems = categories.map((category) =>
  <option key={category.key} value={category.key}>{category.name}</option>
);

export default GraphDisplay;
