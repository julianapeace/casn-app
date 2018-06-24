import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import './Shifts.css';
import GoogleMaps from '../Components/Map';
import Test from '../Components/Test';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
      const style = {
        card: {
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "20px"
        },
        header: {
          margin: "0",
          padding: "0"
        },
        subheader:{
          textAlign: "left",
          paddingLeft: "20px"
        },
        tagline: {
          padding: "10px 50px",
          lineHeight: "1.5em",
          background: "rgba(0, 0, 0, .05)"
        },
        button: {
          padding: "20px"
        }
      }
        return (
          <div>
          <img src="https://i.imgur.com/wUjbCNr.png"/>
          <Card style={style.card} zDepth={2}>
                  <div>
                    <h4 style={style.subheader}> Schedule A Ride</h4>
                  </div>
                <div style={style.button}>
                <RaisedButton
                    label="List"
                    onClick={() => this.routeTo('list')}
                    primary={this.matchRoute('list')}
                    style={{marginRight:3, height:100, width: 200}}
                />
              </div>
                <div style={style.button}>
                <RaisedButton
                    label="Map*"
                    onClick={() => this.routeTo('map')}
                    primary={this.matchRoute('map')}
                    style={{marginRight:3, height:100, width: 200}}
                />
                </div>
                <div className='content'>
                    <Switch>
                        <Route
                            path={`${this.props.match.path}/list`}
                            render={() => {
                                return (<Test mountCallback={() => this.setSubRoute('list')} />);
                            }}
                        />
                        <Route
                            path={`${this.props.match.path}/map`}
                            render={() => {
                                return (<GoogleMaps mountCallback={() => this.setSubRoute('map')} />);
                            }}
                        />
                    </Switch>
                </div>
                <RaisedButton
                    label="Back"
                    onClick={() => this.props.history.push('/driver')}
                    style={{marginRight:3, height:75, width: 100}}
                />

          </Card>
        </div>
        );
    }
}

export default Shifts;
