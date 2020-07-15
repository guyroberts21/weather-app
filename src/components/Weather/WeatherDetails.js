import React, { Component } from 'react';

export class WeatherDetails extends Component {
  getCelsius = (t) => {
    return Math.floor(t - 273.16);
  };

  getFahrenheit = (t) => {
    return Math.floor((t - 273.16) * (9 / 5) + 32);
  };

  render() {
    return (
      <div className="weather-details">
        <p className="main-desc">{this.props.mainDesc}</p>
        <p className="temp">
          {this.props.celsius
            ? this.getCelsius(this.props.temp)
            : this.getFahrenheit(this.props.temp)}
          &#176;
        </p>
        <p className="min-temp">
          Min:{' '}
          {this.props.celsius
            ? this.getCelsius(this.props.min_temp)
            : this.getFahrenheit(this.props.min_temp)}
          &#176;
        </p>
        <p className="max-temp">
          Max:{' '}
          {this.props.celsius
            ? this.getCelsius(this.props.max_temp)
            : this.getFahrenheit(this.props.max_temp)}
          &#176;
        </p>
        <p className="wind-speed">Wind: {this.props.windspeed} m/s</p>
      </div>
    );
  }
}

export default WeatherDetails;
