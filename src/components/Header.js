import React, { Component } from 'react';
import logo from '../logo.png';

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="weather-header">
          <div className="logo-container">
            <img src={logo} alt="Page logo"></img>
          </div>
          <form>
            <input type="text" className="location-search" />
            <button className="change-weather-btn">Find</button>
          </form>
        </header>
      </div>
    );
  }
}

export default Header;
