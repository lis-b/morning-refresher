import React from 'react';
import './Weather.sass';
import { ReactComponent as SettingsIcon } from '../svg/Feather/settings.svg';
import { ReactComponent as ExitIcon } from '../svg/Feather/x.svg';

import WeatherIcon from './WeatherIcon';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // city: 'Springfield',
      // country: 'Canada',
      // lat: 49.9051,
      // lon: -96.7432,

      // city: 'Kelowna',
      // country: 'Canada',
      // lat: 49.8880,
      // lon: -119.4960,

      city: 'Vancouver',
      country: 'Canada',
      lat: 49.2827,
      lon: -123.1207,

      // city: 'Tokyo',
      // country: 'Japan',
      // lat: 35.6762,
      // lon: 139.6503,

      // city: 'Montevideo',
      // country: 'Uruguay',
      // lat: -34.9011,
      // lon: -56.1645,

      units: 'metric',
      hours: 8,

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
      return <div className="module weather error"><div className="wrapper">Error: {error.message}</div></div>;
    } else if (!isLoaded) {
      return <div className="module weather loading"><div className="wrapper">Loading...</div></div>;
    } else {
      return (
        <div className="module weather"><div className="wrapper">
          {this.settingsIcon()}
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
        </div></div>
      );
    }
  }

  stats() {
    const { current, daily_temps, units } = this.state;

    return (
      <ul className="stats">
        <li><b>Feels Like:</b> <span>{toTemperature(current.feels_like, units)}</span></li>
        <li><b>Wind:</b> <span>{toWindSpeed(current.wind_speed, units)}</span></li>
        <ul className="daily">
          <li className="title">Daily</li>
          <li className="high"><b>High:</b> <span>{toTemperature(daily_temps.max, units)}</span></li>
          <li className="low"><b>Low:</b> <span>{toTemperature(daily_temps.min, units)}</span></li>
        </ul>
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
    const { units } = this.state;
    return <div className="module weather settings"><div className="wrapper">
      {this.exitIcon()}

      <h1 className="units">Units</h1>
      <button className={`unit-select
        ${units === 'metric' ? ' selected' : ''}
      `} onClick={() => this.setState({units: 'metric'})}>Metric</button>
      <button className={`unit-select
        ${units === 'imperial' ? ' selected' : ''}
      `} onClick={() => this.setState({units: 'imperial'})}>Imperial</button>
    </div></div>;
  }

  exitIcon() {
    return <div className="settingsIcon exit" onClick={() => {
      this.setState({isSet: true, isLoaded: false});
      this.componentDidMount();
    }}>
      <ExitIcon />
    </div>;
  }

  settingsIcon() {
    return <div className="settingsIcon" onClick={() => this.setState({isSet: false})}>
      <SettingsIcon />
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
