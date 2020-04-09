import React from 'react';
import logo from './logo.svg';
import './App.css';

import { render } from 'react-dom';

import Donut from 'react-svg-donuts';
import Chart from './Components/Chart.js';



class Local extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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

   
  
    render() {

      if (!this.state.isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          
        <div class="container ">
        

            <p>Total Local Cases: {this.state.items.data.local_total_cases}</p>
            <p>Total Recovered: {this.state.items.data.local_recovered}</p>
            <Chart items={this.state.items} height='100' />
            
        </div>
        );
      }
    }
  }

export default Local;