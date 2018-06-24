import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import './Shifts.css';

import RaisedButton from 'material-ui/RaisedButton';

class Shifts extends Component {
    state = {
        subRoute: ''
    }

    componentDidMount() {
        this.props.history.push(`${this.props.match.path}/list`);
        this.setSubRoute('list');
    }

    routeTo(stub) {
        if (stub === '') {
            this.props.history.push('');
        } else {
            this.props.history.push(`${this.props.match.path}/${stub}`);
        }
    }

    matchRoute(stub) {
        return this.state.subRoute.includes(stub);
    }

    setSubRoute(subRoute) {
        this.setState(() => {
            return { subRoute };
        })
    }

    render() {
        return (
            <div className='shifts-wrapper'>
                <div className='buttons'>
                <RaisedButton 
                    label="List" 
                    onClick={() => this.routeTo('list')} 
                    primary={this.matchRoute('list')} 
                    style={{marginRight:3, height:75, width: 150}}
                />
                <RaisedButton 
                    label="Map*" 
                    onClick={() => this.routeTo('map')} 
                    primary={this.matchRoute('map')} 
                    style={{marginRight:3, height:75, width: 150}}
                />
                </div>
                <div className='content'>
                    //TODO: Build out map and list components
                    <Switch>
                        <Route 
                            path={`${this.props.match.path}/list`}
                        />
                        <Route 
                            path={`${this.props.match.path}/map`}
                        />
                    </Switch>
                </div>
                <RaisedButton 
                    label="Back" 
                    onClick={() => this.routeTo('')} 
                    style={{marginRight:3, height:75, width: 100}}
                />
            </div>
        );
    }
}

export default Shifts;