import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';

class AvailableShifts extends Component {
  render () {
    return (
      <div>
        <RaisedButton label="Available Shifts" primary={True} style={{marginRight:3, height:100, width: 150}}/>
      </div>
    );
  }

}

export default AvailableShifts;
