import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GOOGLE_API_KEY} from "../settings.js";
const axios = require('axios');
const Promise = require('bluebird')

class GoogleMaps extends Component {
  constructor(props) {
  super(props);
  this.state = {
    zipCodes: null
  }
}

  componentDidMount() {
    this.props.mountCallback();
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

get_coords(response){
  var coord = []
  response.forEach((response) => {
    var latitude = response.data.results[0].geometry.location.lng;
    var longitude = response.data.results[0].geometry.location.lng;
    coord.push({latitude,longitude})
  })
  console.log("Coordinates: ", coord)
  return coord
}

print_zip(){
  var zipCodes = [77006, 77001]
  this.setState({
    zipCodes : zipCodes
  }, () => {
    let promises = this.promisify(this.state.zipCodes)
    Promise.all(promises)
      .then(response =>{
        this.get_coords(response)
      })
    })
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
