import React, { Component } from 'react';

export class WeatherDetails extends Component {
  render() {
    return (
      <div className="weather-details">
        <p className="main-desc">{this.props.mainDesc}</p>
        <p className="temp">{this.props.getDegrees(this.props.temp)}&#176;</p>
        <p className="feels-like">
          Feels Like: {this.props.getDegrees(this.props.feelslike)}
          &#176;
        </p>
        <p className="wind-speed">Wind: {this.props.windspeed} m/s</p>
      </div>
    );
  }
}

export default WeatherDetails;
