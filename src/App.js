import React from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "fbb1009d5f88b1206591904493bbde96"; //* OpenWeatherMap API key

class App extends React.Component {
  //State being initiated
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    min_temp: undefined,
    max_temp: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  //* getWeather function to get weather report on API request
  getWeather = async e => {
    e.preventDefault();

    //Targetting child component(Weather) form values
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // ! Fetching data from weather API
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    // Converting response data in JSON format
    const data = await api_call.json();

    //* setState when data retrieved from city & country else set undefined
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        min_temp: data.main.temp_min,
        max_temp: data.main.temp_max,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        min_temp: undefined,
        max_temp: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please fill all fields!"
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        {/* Passing Prop values to child components */}
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          min_temp={this.state.min_temp}
          max_temp={this.state.max_temp}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
