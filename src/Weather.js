import React from 'react';
import './Weather.sass';

import WeatherIcon from './WeatherIcon';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Vancouver',
      country: 'Canada',
      lat: 49.2827,
      lon: -123.1207,
      units: 'metric',
      hours: 5,

      current: {
        weather: [{}]
      },
      forecast: [{
        weather: [{}]
      }],
      daily_temps: {},
      isLoaded: false,
      isSet: true,
      error: null,
    }
  }

  componentDidMount() {
    const { lat, lon, units, hours } = this.state;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${process.env.REACT_APP_OWM_API_KEY}`)
        .then(result => result.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              current: result.current,
              forecast: result.hourly.slice(0, hours),
              daily_temps: result.daily[0].temp,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
  }

  render() {
    const { isSet } = this.state;

    if (isSet === true) {
      return this.weather();
    } else {
      return this.settings();
    }
  }

  // RENDER HELPERS
  weather() {
    const { error, isLoaded, city, country, current, units } = this.state;
    const weather = current.weather[0];

    if (error) {
      return <div className="module weather error">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="module weather loading">Loading...</div>;
    } else {
      return (
        <div className="module weather">
          <h1 className="city">{city}</h1>
          <h1 className="country">{country}</h1>

          <div className="current">
            <WeatherIcon code={weather.icon} size='large' />
            <div className="words">
              <h2 className="weather-type">{weather.main}</h2>
              <h2 className="temperature">{toTemperature(current.temp, units)}</h2>
            </div>
          </div>

            <h3 className="weather-desc">{weather.description}</h3>

            {this.stats()}
            {this.forecast()}
        </div>
      );
    }
  }

  stats() {
    const { current, daily_temps, units } = this.state;

    return (
      <ul className="stats">
        <li><b>Feels Like:</b> {toTemperature(current.feels_like, units)}</li>

        <ul className="hi-lo">
          <li className="title"><b>Daily</b></li>
          <li className="high"><b>High:</b> {toTemperature(daily_temps.min, units)}</li>
          <li className="low"><b>Low:</b> {toTemperature(daily_temps.max, units)}</li>
        </ul>

        <li><b>Wind:</b> {toWindSpeed(current.wind_speed, units)}</li>

      </ul>
    );
  }

  forecast() {
    const { hours, forecast, units } = this.state;

    return (
      <div className="forecasts">
        <h1>{hours} Hour Forecast</h1>
        {forecast.map(item => {
          let weather = item.weather[0];
          return (
            <div className="hour">
              <WeatherIcon code={weather.icon} />
              <h2>{weather.main}</h2>
              <h3 className="temp">{toTemperature(item.temp, units)}</h3>
            </div>
          );
        })}
      </div>
    );
  }

  settings() {
    return <div className="module weather settings">
      SKELETON: if you see this, there must be a serious bug in Weather.settings()
    </div>;
  }
}

const toTemperature = (number, units) => {
  let temp = Math.round(number);
  let symbol;

  if (units === 'metric' || units === 'imperial') {
    symbol = '\u00b0';
  } else {
    symbol = 'K';
  }

  return `${temp}${symbol}`;
}

const toWindSpeed = (number, units) => {
  let speed = number;
  let symbol;

  if (units === 'imperial') {
    symbol = 'mph';
  } else {
    speed *= 3.6;
    symbol = 'km/h';
  }

  speed = Math.round(speed * 10) / 10;

  return `${speed} ${symbol}`;
}

export default Weather;
