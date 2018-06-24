import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Test from './Test';

class AvailableShiftsContainer extends Component {
  render(){
    return(
      <Switch>
          <Route
              path={`${this.props.match.path}`}
              exact
              component={Test}
          />
          <Route
              path={`${this.props.match.path}/available-shifts`}
              component={Test}
          />
          <Route
              path={`${this.props.match.path}/my-shifts`}
              component={Test}
          />
      </Switch>
    )
  }
}

export default AvailableShiftsContainer;
