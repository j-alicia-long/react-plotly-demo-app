// Plot.ly custom layouts

// Layout: Population vs. Year
const layoutPop = {
  title: 'Population vs. Year',
  xaxis: {
    title: 'Year'
  },
  yaxis: {
    title: 'Population',
    rangemode: 'tozero',
    showline: true,
    zeroline: true
  },
  yaxis2: {
    title: 'Population',
    titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right',
    showline: true,
    zeroline: true
  }
};

export default layoutPop;

// Layout: GDP vs. Year
export const layoutGDP = {
  title: 'GDP vs. Year',
  xaxis: {
    title: 'Year'
  },
  yaxis: {
    title: 'GDP',
    rangemode: 'tozero',
    showline: true,
    zeroline: true
  },
  yaxis2: {
    title: 'GDP',
    titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right',
    showline: true,
    zeroline: true
  }
};

// Layout: Money vs. Year
export const layoutMoney = {
  title: 'Money vs. Year',
  xaxis: {
    title: 'Year'
  },
  yaxis: {
    title: 'Money',
    rangemode: 'tozero',
    showline: true,
    zeroline: true
  },
  yaxis2: {
    title: 'Money',
    titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right',
    showline: true,
    zeroline: true
  }
};
