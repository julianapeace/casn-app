import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GOOGLE_API_KEY} from "../settings.js";

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) =><div><img src="https://i.imgur.com/JcEUU8e.png"/></div>;

export default class GoogleMaps extends Component {
  static defaultProps = {
    center: { lat: 29.7604 , lng: -95.3698 },
    zoom: 11
  }
render() {
  const style = {
    image: {
      // width: 200,
      height:50,
      paddingLeft:20,
      resizeMode: 'cover'
  }
}
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <img style={style.image} src="https://i.imgur.com/wUjbCNr.png"/>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY}}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 29.7604 }
            lng={ -95.3698 }
            text={ "Where's Waldo?" }
          />
          <AnyReactComponent
            lat={ 29.7704 }
            lng={ -95.4098 }
            text={ "NOT WALDO?" }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
