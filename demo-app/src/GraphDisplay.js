import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import plotData, {categories} from './datasets.js';
import layoutPop, {layoutGDP, layoutMoney} from './layouts.js';
import TabManager from './TabManager';

console.log(plotData);

class GraphDisplay extends Component {
  constructor(props) {
    super(props);

    var rightYSet = Object.assign({}, plotData[0]);
    rightYSet.yaxis = 'y2';

    this.state = {
      dataset_left: plotData[0],
      dataset_right: rightYSet,
      layout: layoutPop
    };

    this.handleChangeLeft = this.handleChangeLeft.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
  }

  handleChangeLeft(event) {
    var selectedSet = Object.assign({}, plotData[event.target.value]);
    selectedSet.yaxis = 'y';

    this.setState({
      dataset_left: selectedSet,
      dataset_right: this.state.dataset_right,
      layout: layoutPop
    });
  }
  handleChangeRight(event) {
    var selectedSet = plotData[event.target.value];
    selectedSet.yaxis = 'y2';

    this.setState({
      dataset_left: this.state.dataset_left,
      dataset_right: selectedSet,
      layout: layoutPop
    });
  }

  render() {
    const {dataset_left, dataset_right, layout} = this.state;

    return (
      <div>
      <TabManager>
        <div label="Population">
          Population vs Year
        </div>
        <div label="GDP">
          GDP vs Year
        </div>
        <div label="Money">
          Money vs Year
        </div>
      </TabManager>

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
