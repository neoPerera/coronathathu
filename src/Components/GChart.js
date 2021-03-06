import React, {Component} from 'react';
import {Bar , Line , Pie} from 'react-chartjs-2';
import Switch from '@material-ui/core/Switch';

import '../Chart.css';



class GChart extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            checkedA:false,

                chartDataGlobal:{
                  labels: ['Total Global Cases', 'Total Recovered',],
                  datasets:[
                    {
                      label:'Total Global Cases',
                      data:[
                        props.items.data.global_total_cases,
                        props.items.data.global_recovered,
                        0
                      ],
                      backgroundColor:[
                        'rgba(0, 158, 113, 0.6)',
                        'rgba(237, 12, 102, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                      ]
                    }
                  ]
                },
                pieDataGlobal:
                {
                  labels: ['Global Active Cases', 'Total Recovered','Deaths'],
                  datasets:[
                    {
                      
                      data:[
                        props.items.data.global_total_cases - props.items.data.global_recovered -  props.items.data.global_deaths,
                        props.items.data.global_recovered,
                        props.items.data.global_deaths
                      ],
                      backgroundColor:[
                        'rgba(252, 3, 219,0.8)',
                        'rgba(252, 190, 3,0.8)',
                        'rgba(91, 91, 92,0.8)'


                      ]
                    }
                  ]
                }
              }
        
    }
    handleChange = (event) =>
  {
    this.setState(
      {
        checkedA: event.target.checked
      }
    );
  }



    render()
    {

        return(
          <div className="chart container-fluid">
            <div>

            </div>
             <Bar 
                  data={this.state.chartDataGlobal}
                  options = {{}}

             />

             <Pie 
              data={this.state.pieDataGlobal}
              options = {{}}
             />
             
             
          </div>
      );

    };
}
export default GChart;