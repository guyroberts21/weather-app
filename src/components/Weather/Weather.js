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
        <WeatherDate date={this.props.date} />
        <WeatherDetails
          celsius={this.props.celsius}
          mainDesc={this.props.mainDesc}
          temp={this.props.temp}
          min_temp={this.props.min_temp}
          max_temp={this.props.max_temp}
          windspeed={this.props.windspeed}
        />
      </div>
    );
  }
}

export default Weather;
