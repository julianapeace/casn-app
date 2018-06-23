// Mui Theme
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import DriverContainer from './driver/DriverContainer';
import Test from './components/Test';
import RaisedButton from 'material-ui/RaisedButton';
const axios = require('axios')


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
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RaisedButton label="Get Top Stories" onClick= {() => this.test_api()} primary={true}/>
        </div>
        <BrowserRouter>
          <Switch>
            {/* <Route 
              path="/"
              exact
              component={}
            /> */}
            <Route 
              path="/login"
              component={Test}
            />
            <Route 
              path="/driver"
              component={DriverContainer}
            />
            {/* <Route 
              path="/dispatcher"
            /> */}
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>

    );
  }
}

export default App;
