import React, { Component } from 'react';
import { format } from 'date-fns';

export class WeatherDate extends Component {
  state = {
    date: '',
  };

  componentDidMount() {
    this.setState({
      date: this.getDate(),
    });
  }

  getDate = () => format(new Date(), 'H:mm');

  render() {
    return (
      <div>
        <span className="current-date">{this.state.date}</span>
      </div>
    );
  }
}

export default WeatherDate;
