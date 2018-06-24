import React, { Component } from "react";

import RaisedButton from 'material-ui/RaisedButton';

class ShiftsSelection extends Component {
    routeTo(stub) {
        this.props.history.push(`/${stub}`);
    }

    render () {
        return (
        <div className='login-wrapper'>
            <p>Please select one:</p>
            <div className='login-body'>
                <RaisedButton 
                    label="Available Shifts" 
                    onClick={() => this.routeTo('driver/available-shifts/list')} 
                    primary={true} 
                    style={{marginRight:3, height:150, width: 200}}
                />
                <RaisedButton 
                    label="View my Shifts"
                    onClick={() => this.routeTo('driver/my-shifts/list')}
                    primary={true} 
                    style={{marginRight:3, height:150, width: 200}}
                />
            </div>
            <RaisedButton 
                label="Back" 
                onClick={() => this.routeTo('')} 
                primary={false} 
                style={{marginRight:3, height: 75, width: 100}}
            />
        </div>
     
    );
  }
}

export default ShiftsSelection;
