import React, { Component } from 'react';

export class Degrees extends Component {
  render() {
    return (
      <div className="degrees-container">
        <p
          className={this.props.celsius ? 'degree-selected' : ''}
          onClick={this.props.changeDegrees}
        >
          &#176;C
        </p>
        <p
          className={this.props.celsius ? '' : 'degree-selected'}
          onClick={this.props.changeDegrees}
        >
          &#176;F
        </p>
      </div>
    );
  }
}

export default Degrees;
