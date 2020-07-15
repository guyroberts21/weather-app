import React, { Component } from 'react';

export class Degrees extends Component {
  render() {
    return (
      <div className="degrees-container">
        <p onClick={this.props.changeDegrees}>
          &#176;{this.props.celsius ? 'C' : 'F'}
        </p>
      </div>
    );
  }
}

export default Degrees;
