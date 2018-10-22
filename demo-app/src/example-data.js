// Example Data
import a0AllInCountry from './data/a0AllInCountry.json';
import a0IllegalInCountry from './data/a0IllegalInCountry.json';
import allData from './data/allParsedOutput.json';

// console.log(allInCountry);
// console.log(Object.keys(allInCountry));
// console.log(Object.values(allInCountry));

var allInCountry = {
  x: Object.keys(a0AllInCountry),
  y: Object.values(a0AllInCountry),
  name: 'All In Country',
  mode: 'lines+markers',
  type: 'scatter'
}

var illegalInCountry = {
  x: Object.keys(a0IllegalInCountry),
  y: Object.values(a0IllegalInCountry),
  name: 'Illegal In Country',
  mode: 'lines+markers',
  type: 'scatter'
}

// NOTE: May need to have graph do data handling in separate file
// const dataList = Object.keys(allData).map((category) =>
//   {
//     x: Object.keys(allData[category]),
//     y: Object.values(allData[category]),
//     name: 'Illegal In Country',
//     mode: 'lines+markers',
//     type: 'scatter'
//   }
// );
// var defaultData = dataList;

var defaultData = [allInCountry, illegalInCountry]

export default defaultData;



// var dataset1 = {
//   x: [1, 2, 3, 4],
//   y: [10, 15, 13, 17],
//   name: 'Dataset 1',
//   mode: 'lines+markers',
//   type: 'scatter'
// };
// var dataset2 = {
//   x: [1, 2, 3, 4],
//   y: [16, 5, 11, 9],
//   name: 'Dataset 2',
//   mode: 'lines+markers',
//   type: 'scatter'
// };
// var dataset3 = {
//   x: [1, 2, 3, 4],
//   y: [12, 9, 15, 12],
//   mode: 'lines+markers',
//   name: 'Dataset 3'
// };
//
// var defaultData = [dataset1, dataset2];
//
// export default defaultData;
