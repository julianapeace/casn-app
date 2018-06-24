// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue100, purple700, cyan500, purple500, purple100, darkPurpleA200, white, darkBlack, fullBlack, grey300} from 'material-ui/styles/colors';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import DriverContainer from './driver/DriverContainer';
import Login from './Components/Login';

//Other Stuff
const axios = require('axios');

const theme = getMuiTheme({
  fontFamily:'Roboto, Titillium Web, sans-serif',
  palette: {
    // textColor: darkBlack,
    primary1Color: purple700,
    primary2Color: purple500,
    primary3Color: purple100,
    secondary1Color: blue100,
    secondary2Color: blue100,
    secondary3Color: blue100,
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
      </MuiThemeProvider>

    );
  }
}

export default App;
