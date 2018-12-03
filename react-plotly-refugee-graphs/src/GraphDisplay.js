import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';

//GraphDisplay contains the plot and dropdown menus
class GraphDisplay extends Component {
  static propTypes = {
    dataSource: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    const {dataSource, plotLayout} = this.props;

    var rightYSet = Object.assign({}, dataSource[0]);
    rightYSet.yaxis = 'y2';

    this.state = {
      dataset_left: dataSource[0],
      dataset_right: rightYSet,
      layout: plotLayout
    };

    this.handleChangeLeft = this.handleChangeLeft.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
  }

  // Updates left dataset on plot when left dropdown is changed
  handleChangeLeft(event) {
    var selectedSet = Object.assign({}, this.props.dataSource[event.target.value]);
    selectedSet.yaxis = 'y';

    this.setState({
      dataset_left: selectedSet,
      dataset_right: this.state.dataset_right,
      layout: this.props.plotLayout
    });
  }
  // Updates right dataset on plot when right dropdown is changed
  handleChangeRight(event) {
    var selectedSet = Object.assign({}, this.props.dataSource[event.target.value]);
    selectedSet.yaxis = 'y2';

    this.setState({
      dataset_left: this.state.dataset_left,
      dataset_right: selectedSet,
      layout: this.props.plotLayout
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
            {this.props.dataCategories.map((category) =>
              <option key={category.key} value={category.key}>{category.name}</option>
            )}
          </select>
          <select onChange={this.handleChangeRight}>
            {this.props.dataCategories.map((category) =>
              <option key={category.key} value={category.key}>{category.name}</option>
            )}
          </select>
        </label>

      </div>
    );
  }
}


export default GraphDisplay;
