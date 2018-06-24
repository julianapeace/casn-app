import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GOOGLE_API_KEY} from "../settings.js";
const axios = require('axios');
const Promise = require('bluebird')

class GoogleMaps extends Component {
  state = {
      zipCodes: null
  }

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
print_zip(){
  var zipCodes = "[1,2,3,4]"
  this.setState({
    zipCodes : zipCodes
  })
}

promisify(zipCodes){
  let promises = [];
  var GKEY = GOOGLE_API_KEY
  for (let i = 0; i < zipCodes.length; i++) {
      promises.push(
        new Promise((resolve, reject) => {
          resolve(
            axios.get('https://maps.googleapis.com/maps/api/geocode/json', { params: {components:'postal_code:'+zipCodes[i], key:GKEY} }))
        })
      );
  }
  // console.log('created promises')
  return promises
}

  render() {
    const style = {
      card: {
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        paddingTop: "20px"
      }
    }
    return (
      <div>
      <Card style={style.card} zDepth={2}>
        <div>
          Hello World
          {this.state.zipCodes}
        </div>
        <RaisedButton label="Driver" onClick= {() => this.print_zip()} primary={true} style={{marginRight:3, height:100, width: 150}}/>
        </Card>
      </div>
    );
  }
}

export default GoogleMaps;
