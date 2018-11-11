import React, { Component } from "react";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
import "./App.css";
const api_key = "e76f7d84f8ad6a54b1bf35a5fbe74041";
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;

    console.log(city);
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`
    );
    const data = await api_call.json();

    if (data.cod === 200) {
      console.log(data);
      console.log(data.main.temp - 273.15);
      this.setState({
        temperature: Math.round(data.main.temp - 273.15),
        country: data.sys.country,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        error: "Please check your input",
        temperature: undefined,
        country: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined
      });
    }
  };
  render() {
    return (
      <div class="weather-app">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          country={this.state.country}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
