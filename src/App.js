// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple700, cyan500, purple500, purple100, darkPurpleA200, white, darkBlack, fullBlack, grey300} from 'material-ui/styles/colors';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Material Components
import DriverContainer from './driver/DriverContainer';
import Login from './Components/Login';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


//Other Stuff
const axios = require('axios');

const theme = getMuiTheme({
  fontFamily:'Roboto, Titillium Web, sans-serif',
  palette: {
    // textColor: darkBlack,
    primary1Color: purple700,
    primary2Color: purple500,
    primary3Color: purple100,
    accent1Color: darkPurpleA200,

    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

class App extends Component {

  test_api(){
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then (res => {
      console.log(res)
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
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
      tagline: {
        padding: "10px 50px",
        lineHeight: "1.5em",
        background: "rgba(0, 0, 0, .05)"
      },
      button: {
        padding: "20px"
      }
    }
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="App-title">Welcome to React</h1>
    //   </header>
    // </div>

    return (
      <MuiThemeProvider muiTheme={theme}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              component={Login}
            />
            <Route
              path="/driver"
              component={DriverContainer}
            />
          </Switch>
        </BrowserRouter>
        <img src="https://i.imgur.com/wUjbCNr.png"/>
        <Card style={style.card} zDepth={2}>
          <div>
            <h1 style={style.header}>Please Select One:</h1>
          </div>
          <div style={style.button}>
            <RaisedButton label="Driver" onClick= {() => this.test_api()} primary={true} style={{marginRight:3, height:100, width: 150}}/>
          </div>
          <RaisedButton label="Dispatcher" secondary={true} style={{marginRight:3, height:100, width: 150}}/>
          <div style={style.tagline}>
            <p>
              Need help?
              {/* <RaisedButton secondary={true} label="Get Started" onClick={this.getStarted}/> */}
            </p>
          </div>
        </Card>
      </MuiThemeProvider>

    );
  }
}

export default App;
