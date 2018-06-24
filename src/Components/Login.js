import React, { Component } from "react";
import './Login.css';
// import google_oauth_client_id from "../settings.js";
import { GoogleLogin } from 'react-google-login';

//Material Stuff
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Login extends Component {
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
              <h1 style={style.header}>Please Select One:</h1>
            </div>
            <div style={style.button}>
              <RaisedButton
                label="Driver"
                onClick= {() => this.routeTo('driver')}
                primary={true}
                style={{marginRight:3, height:100, width: 150}}/>
            </div>
            <RaisedButton
              label="Dispatcher"
              onClick={() => this.routeTo('dispatcher')}
              secondary={true}
              style={{marginRight:3, height:100, width: 150}}/>
            <div style={style.tagline}>
              <p>
                Need help?
                {/* <RaisedButton secondary={true} label="Get Started" onClick={this.getStarted}/> */}
              </p>
            </div>
          </Card>
        <div className='login-body'>
        </div>
      </div>

    );
  }

}

export default Login;
