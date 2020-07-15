import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';
import WeatherDate from './WeatherDate';

// TODO: include date, main desc, temp + feels like, wind speed
// (optional extras: cloud coverage, sunrise, sunset)
export class Weather extends Component {
  render() {
    return (
      <div className="weather-box">
        <h2 className="location">{this.props.location}</h2>
        <WeatherDate />
        <WeatherDetails
          mainDesc={this.props.mainDesc}
          temp={this.props.temp}
          feelslike={this.props.feelslike}
          windspeed={this.props.windspeed}
        />
      </div>
    );
  }
}

export default Weather;
