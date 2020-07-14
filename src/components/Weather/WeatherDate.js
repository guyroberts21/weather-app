import React, { Component } from 'react';

export class WeatherDate extends Component {
  render() {
    return (
      <div>
        <span className="current-date">
          {/* Display current date (eg. this.getDate()) */}14th July 2020
        </span>
      </div>
    );
  }
}

export default WeatherDate;
