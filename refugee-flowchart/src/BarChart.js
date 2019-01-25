import React from 'react';
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class BarChart extends React.Component {
    render(){
       const options = {
          annotation: {
               annotations: [{
                   drawTime: 'afterDatasetsDraw',
                   borderColor: 'red',
                   borderDash: [2, 2],
                   borderWidth: 2,
                   mode: 'vertical',
                   type: 'line',
                   value: 10,
                   scaleID: 'x-axis-0',
             }]
          },
          maintainAspectRation: false
      };
      const data = [2, 6, 4, 9, 6, 1];
      return(
         <Bar
	         data={data}
	         width={100}
	         height={50}
	         options={options}
         />
       )
     }
}
export default BarChart;
