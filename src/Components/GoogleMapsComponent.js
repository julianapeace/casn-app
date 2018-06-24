import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GOOGLE_API_KEY} from "../settings.js";

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class GoogleMaps extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY}}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ "Where's Waldo?" }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
