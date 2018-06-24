import React, { Component } from "react";

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class ShiftsSelection extends Component {
    routeTo(stub) {
        this.props.history.push(`/${stub}`);
    }

    render () {
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
        welcomeTag:{
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
              <h4 style={style.welcomeTag}> Welcome Driver</h4>
              <h1 style={style.header}>Please Select One:</h1>
            </div>
            <div style={style.button}>
                <RaisedButton
                    label="Available Rides"
                    onClick={() => this.routeTo('driver/available-shifts/list')}
                    primary={true}
                    style={{marginRight:3, height:100, width: 200}}
                />
              </div>
              <div style={style.button}>
                <RaisedButton
                    label="View My Rides"
                    onClick={() => this.routeTo('driver/my-shifts/list')}
                    primary={true}
                    style={{marginRight:3, height:100, width: 200}}
                />
                </div>
                <div style={style.button}>
                <RaisedButton
                    label="Back"
                    onClick={() => this.routeTo('')}
                    primary={false}
                    style={{marginRight:3, height: 75, width: 100}}
                />
              </div>
          </Card>
        </div>

    );
  }
}

export default ShiftsSelection;
