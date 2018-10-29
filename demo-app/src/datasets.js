// Example Data
import allData from './data/allParsedOutput.json';


// NOTE: May need to have graph do data handling in separate file

var plotData = [];
var categoryList = [];
var keyIndex = 0;

for (var category in allData){
  // Append to plotData
  var dataset = {
    x: Object.keys(allData[category]),
    y: Object.values(allData[category]),
    name: category,
    mode: 'lines+markers',
    type: 'scatter'
  };
  plotData.push(dataset);

  // Append to target_categories
  var listItem = {
    key:keyIndex,
    name:category
  };
  categoryList.push(listItem);
  keyIndex++;
}

export default plotData;

export const categories = categoryList;
console.log(categoryList)
