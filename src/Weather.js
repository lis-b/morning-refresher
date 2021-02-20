import React from 'react';

// const iconURL = icon => `http://openweathermap.org/img/wn/${icon}@2x.png`;

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Vancouver',
      country: 'Canada',
      lat: 49.2827,
      lon: -123.1207,
      units: 'metric',
      current: {
        weather: [{}]
      },
      forecast: [{
        weather: [{}]
      }],
      hours: 5,
      isLoaded: false,
      error: null,
      isSet: true,
    }
  }

  componentDidMount() {
    const { lat, lon, units } = this.state;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,daily,alerts&appid=${process.env.REACT_APP_OWM_API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              current: result.current,
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

  temperature(degree) {
    let temp = Math.round(degree);
    let symbol;
    const { units } = this.state;

    if (units === 'metric' || units === 'imperial') {
      symbol = '\u00b0';
    } else {
      symbol = 'K';
    }

    return `${temp}${symbol}`;
  }

  weather() {
    const { city, country, current, isLoaded, error } = this.state;
    const weather = current.weather[0];
    const degrees = current.temp;

    if (error) {
      return <div className="module weather error">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="module weather loading">Loading...</div>;
    } else {
      return (
        <div className="module weather">
          <h1 className="city">{city}, {country}</h1>
            <h2 className="weather-type">{weather.main}</h2>
              <h3 className="weather-desc">{weather.description}</h3>

            <h2 className="temperature">{this.temperature(degrees)}</h2>
        </div>
      );
    }
  }

  settings() {
    return <div className="module weather settings">
      SETTINGS TO-DO: if you see this, there must be a serious bug
    </div>;
  }

  render() {
    const { isSet } = this.state;

    if (isSet === true) {
      return this.weather();
    } else {
      return this.settings();
    }
  }
}

export default Weather;
