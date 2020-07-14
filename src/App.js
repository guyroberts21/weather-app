import React, { Component } from 'react';
import Header from './components/Header';
import Weather from './components/Weather/Weather';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Weather
          location="Sheffield"
          mainDesc="Main Desc..."
          temp="17"
          feelslike="Feels like..."
          windspeed="4.5"
        />
      </div>
    );
  }
}

export default App;
