import React, { Component } from 'react';
import { format } from 'date-fns';

export class WeatherDate extends Component {
  render() {
    return (
      <div>
        <span className="current-date">{format(new Date(), 'dd/MM/yyyy')}</span>
      </div>
    );
  }
}

export default WeatherDate;
