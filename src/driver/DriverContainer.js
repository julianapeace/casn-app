import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ShiftsSelection from './ShiftsSelection';
import Shifts from './Shifts';
import Test from '../Components/Test';

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
                    component={Shifts}
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