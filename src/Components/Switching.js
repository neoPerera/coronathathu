

import React from 'react';


class Switching extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            checkedSwitch: this.props.checkedA,
        }
    }

    handleChange = (event) =>
    {
      this.setState(
        {
            checkedSwitch:  event.target.checked
        },
        this.sendToParent
        
      );
 
    }
    sendToParent = () =>
    {
        this.props.parentCallback(this.state.checkedSwitch);
        console.log("sending "+ this.state.checkedSwitch);
    }

    render() 
    {


        return(
            <div>
                <Switch 
                    checked = {this.state.checkedSwitch}
                    name="checkedSwitch"
                    color="default"
                    onChange={this.handleChange}
                    />
            </div>
            );

        
    }
}


export default Switching;



