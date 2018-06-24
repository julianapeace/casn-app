import React, { Component } from "react";
import './Login.css';

import RaisedButton from 'material-ui/RaisedButton';



class Login extends Component {
  routeTo(stub) {
    this.props.history.push(`/${stub}`);
  }

  render () {
    return (
      <div className='login-wrapper'>
        <p>Please select one:</p>
        <div className='login-body'>
            <RaisedButton 
              label="Driver" 
              onClick={() => this.routeTo('driver')} 
              primary={true} 
              style={{marginRight:3, height:150, width: 200}}
            />
            <RaisedButton 
              label="Dispatcher" 
              onClick={() => this.routeTo('dispatcher')} 
              primary={true} 
              style={{marginRight:3, height:150, width: 200}}
            />
        </div>
      </div>
     
    );
  }

}

export default Login;
