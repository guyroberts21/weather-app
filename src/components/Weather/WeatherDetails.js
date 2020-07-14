import React, { Component } from 'react';

export class WeatherDetails extends Component {
  render() {
    return (
      <div className="weather-details">
        <p className="main-desc">{this.props.mainDesc}</p>
        <p className="temp">{this.props.temp}</p>
        <p className="feels-like">{this.props.feelslike}</p>
        <p className="wind-speed">{this.props.windspeed}</p>
      </div>
    );
  }
}

export default WeatherDetails;
