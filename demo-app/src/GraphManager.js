import React, { Component } from 'react';
import GraphDisplay from './GraphDisplay.js';
//GraphDisplay contains the plot and dropdown menus
import plotData, {categories} from './datasets.js'; //Import datasets
import layoutPop, {layoutGDP, layoutMoney} from './layouts.js'; //import layouts
import TabManager from './TabManager'; //Manages active tabs

console.log(plotData);

//GraphManager contains all tabs of GraphDisplays
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
