import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ShiftsSelection from './ShiftsSelection';
import Shifts from './Shifts';
import Test from '../Components/Test';
import GoogleMaps from '../Components/Map';
import AvailableShiftsContainer from '../Components/AvailableShiftsContainer';

class DriverContainer extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path={`${this.props.match.path}`}
                    exact
                    component={ShiftsSelection}
                />
                <Route
                    path={`${this.props.match.path}/available-shifts`}
                    component={GoogleMaps}
                />
                <Route
                    path={`${this.props.match.path}/my-shifts`}
                    component={Shifts}
                />
            </Switch>
        );
    }
}

export default DriverContainer;
