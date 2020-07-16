import React, { Component } from 'react';
import Header from './components/Header';
import Degrees from './components/Degrees';
import Weather from './components/Weather/Weather';
import './App.css';

export class App extends Component {
  state = {
    query: '',
    weather: {
      location: 'City Name',
      mainDesc: 'Main Description',
      temp: 273.16,
      min_temp: 273.16,
      max_temp: 273.16,
      windspeed: 0,
    },
    celsius: true,
  };

  componentDidMount = () => {
    if (!('geolocation' in navigator)) {
      console.log('Geolocation not suppported.');
      return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ce9e9ecad686d81746de565217f800bf`,
        { mode: 'cors' }
      )
        .then((res) => res.json())
        .then(this.setWeather);
    });
  };

  setWeather = (data) => {
    this.setState({
      weather: {
        location: data.name + ', ' + data.sys.country,
        dateOffset: data.timezone,
        mainDesc: data.weather[0].main,
        temp: data.main.temp,
        min_temp: data.main.temp_min,
        max_temp: data.main.temp_max,
        windspeed: Math.round(data.wind.speed * 100) / 100,
      },
    });
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
      .then(this.setWeather)
      .catch((e) => {
        console.log(e);
      });
  };

  changeDegrees = () => {
    this.setState((prevState) => ({
      celsius: !prevState.celsius,
    }));
  };

  updateQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  geolocate = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);
    });
  };

  render() {
    return (
      <div>
        <Header updateQuery={this.updateQuery} onSubmit={this.onSubmit} />
        <Degrees
          celsius={this.state.celsius}
          changeDegrees={this.changeDegrees}
        />
        <Weather
          celsius={this.state.celsius}
          location={this.state.weather.location}
          dateOffset={this.state.weather.dateOffset}
          mainDesc={this.state.weather.mainDesc}
          temp={this.state.weather.temp}
          min_temp={this.state.weather.min_temp}
          max_temp={this.state.weather.max_temp}
          windspeed={this.state.weather.windspeed}
        />

        <button onClick={this.geolocate}>Click me!</button>
      </div>
    );
  }
}

export default App;
