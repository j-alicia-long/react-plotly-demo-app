import React, { Component } from 'react';
import GraphDisplay from './GraphDisplay.js';
import plotData, {categories} from './datasets.js';
import layoutPop, {layoutGDP, layoutMoney} from './layouts.js';
import TabManager from './TabManager';

console.log(plotData);

class GraphManager extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <TabManager>
          <div label="Population">
            <GraphDisplay
              dataSource={plotData}
              dataCategories={categories}
              plotLayout={layoutPop}
            />
          </div>
          <div label="GDP">
            <GraphDisplay
              dataSource={plotData}
              dataCategories={categories}
              plotLayout={layoutGDP}
            />
          </div>
          <div label="Money">
            <GraphDisplay
              dataSource={plotData}
              dataCategories={categories}
              plotLayout={layoutMoney}
            />
          </div>
        </TabManager>
      </div>
    );
  }
}

export default GraphManager;
