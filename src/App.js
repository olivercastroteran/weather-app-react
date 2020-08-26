import React from 'react';
import './App.css';
import Weather from './components/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const Api_Key = '429736441cf3572838aa10530929f7cd';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.getWeather();
  }

  getWeather = async (e) => {
    let city = 'London';
    let country = 'uk';
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
    );

    const response = await api_call.json();

    console.log(response);
  };

  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
