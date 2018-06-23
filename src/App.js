// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple700, cyan500, purple500, purple100, darkPurpleA200, white, darkBlack, fullBlack, grey300} from 'material-ui/styles/colors';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Material Components
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const axios = require('axios')

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
  appBar: {
    height: 150,
    color: cyan500,
  }
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
    return (
      <MuiThemeProvider muiTheme={theme}>
        <AppBar title={<img src="https://i.imgur.com/wUjbCNr.png"/>}/>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RaisedButton label="Driver" onClick= {() => this.test_api()} primary={true} style={{marginRight:3, height:100, width: 150}}/>
          <RaisedButton label="Dispatcher" primary={false} style={{marginRight:3, height:100, width: 150}}/>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
