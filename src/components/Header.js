import React, { Component } from 'react';
import logo from '../logo.png';

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="weather-header">
          <div className="logo-container">
            <img src={logo} className="page-logo" alt="Page logo"></img>
          </div>
          <form onSubmit={this.props.onSubmit}>
            <input
              type="text"
              placeholder="Search for city..."
              className="location-search"
              onChange={this.props.updateQuery}
            />
            <button className="change-weather-btn">Search</button>
          </form>
        </header>
      </div>
    );
  }
}

export default Header;
