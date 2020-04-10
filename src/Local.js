import React from 'react';
import logo from './logo.svg';
import './App.css';

import { render } from 'react-dom';
import Switch from '@material-ui/core/Switch';

import Donut from 'react-svg-donuts';
import Chart from './Components/Chart.js';
import GChart from './Components/GChart.js';


class Local extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checkedA:false,
        isLoaded: false,
        items: [],
      };
    }
  
    componentDidMount() {
      fetch("https://www.hpb.health.gov.lk/api/get-current-statistical")
        .then(res => res.json())
        .then(json => {
            this.setState({
              isLoaded: true,
              items: json
            });
          },
        )
    }
    handleChange = (event) =>
    {
      this.setState(
        {
          checkedA: event.target.checked
        }
      );
    }

   
  
    render() {

      if (!this.state.isLoaded) {
        return <div>Loading...</div>;
      } else {
        if(this.state.checkedA == false)
        {
          return (
          
            <div className="container App">
              <div className="inits">
              <span class="badge badge-success">Local</span><Switch 
                        checked = {this.state.checkedA}
                        name="checkedA"
                        color="default"
                        onChange={this.handleChange}
                  />
                  <span class="badge badge-secondary">Global</span>
                <p>Total Local Cases: {this.state.items.data.local_total_cases}</p>
                <p>Total Recovered: {this.state.items.data.local_recovered}</p>
              </div>
    

                

                  <Chart items={this.state.items} height='100' />
            </div>
            );
        }
        else
        {
          return(
            <div className="container App">
            
              <div className="inits">
              <span class="badge badge-secondary">Local</span><Switch 
                        checked = {this.state.checkedA}
                        name="checkedA"
                        color="default"
                        onChange={this.handleChange}
                  />
                  <span class="badge badge-success">Global</span>
                <p>Total Global Cases: {this.state.items.data.global_total_cases}</p>
                <p>Total Recovered: {this.state.items.data.global_recovered}</p>
                
              </div>

                

                  <GChart items={this.state.items} height='100' />
            </div>
          );
        }

      }
    }
  }

export default Local;