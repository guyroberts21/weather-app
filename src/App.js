import React, { Component } from 'react';
import Header from './components/Header';
import Weather from './components/Weather/Weather';
import './App.css';

export class App extends Component {
  state = {
    query: '',
    weather: {
      location: 'Sheffield, GB',
      mainDesc: 'Probably raining',
      temp: 10,
      feels_like: 5,
      windspeed: 15,
    },
  };

  getWeather = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=038313e6f6dca6e406ebf805a5026847`,
      { mode: 'cors' }
    );
    const data = await response.json();
    return data;
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.getWeather()
      .then((data) => {
        this.setState({
          weather: {
            location: data.name + ', ' + data.sys.country,
            mainDesc: data.weather[0].main,
            temp: Math.floor(data.main.temp - 273.16),
            feels_like: Math.floor(data.main.feels_like - 273.16),
            windspeed: Math.round(data.wind.speed * 100) / 100,
          },
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  updateQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Header updateQuery={this.updateQuery} onSubmit={this.onSubmit} />
        <Weather
          location={this.state.weather.location}
          mainDesc={this.state.weather.mainDesc}
          temp={this.state.weather.temp}
          feelslike={this.state.weather.feels_like}
          windspeed={this.state.weather.windspeed}
        />
      </div>
    );
  }
}

export default App;
