// Plot.ly custom layouts

var layout1 = {
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


export default layout1;
