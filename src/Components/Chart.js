import React, {Component} from 'react';
import {Bar , Line , Pie} from 'react-chartjs-2';
import Switch from '@material-ui/core/Switch';

import '../Chart.css';



class Chart extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {

            chartDataLocal:{
                labels: ['Total Local Cases', 'Total Recovered',],
                  datasets:[
                    {
                      label:'Total Local Cases',
                      data:[
                        props.items.data.local_total_cases,
                        props.items.data.local_recovered,
                        0
                      ],
                      backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                      ]
                    }
                  ]
                },
                pieDataLocal:
                {
                  labels: ['Local Active Cases', 'Total Recovered','Deaths'],
                  datasets:[
                    {
                      
                      data:[
                        props.items.data.local_active_cases,
                        props.items.data.local_recovered,
                        props.items.data.local_deaths
                      ],
                      backgroundColor:[
                        'rgba(232, 15, 0,0.8)',
                        'rgba(12, 232, 0,0.8)',
                        'rgba(91, 91, 92,0.8)'


                      ]
                    }
                  ]
                },

              }
        
    }




    render()
    {

        return(
            <div className="chart container-fluid">
              <div>

              </div>
               <Bar 
                    data={this.state.chartDataLocal}
                    options = {{}}

               />

               <Pie 
                data={this.state.pieDataLocal}
                options = {{}}
               />
               
               
            </div>
        );
      
    };
}
export default Chart;