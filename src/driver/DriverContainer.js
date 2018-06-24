import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Test from '../Components/Test';

class DriverContainer extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path={`${this.props.match.path}`}
                    component={Test}
                />
                <Route
                    path={`${this.props.match.path}/shifts`}
                    component={Test}
                />
            </Switch>
        );
    }
}

export default DriverContainer;