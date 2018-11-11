import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.error && <span>{this.props.error}</span>}
        {this.props.city &&
          this.props.country && (
            <p className="weather__key">
              Location:
              <span className="weather__value">
                {this.props.city}, {this.props.country}
              </span>
            </p>
          )}
        {this.props.temperature && (
          <p>
            <span className="temperature"> {this.props.temperature}°</span>
          </p>
        )}
        {this.props.description && (
          <p>
            <span className="description"> {this.props.description} </span>
          </p>
        )}
        {this.props.humidity && (
          <p>
            {" "}
            Humidity:
            <span className="humidity"> {this.props.humidity} </span>
          </p>
        )}
      </div>
    );
  }
}
export default Weather;
