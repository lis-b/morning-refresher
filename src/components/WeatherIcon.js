import React from 'react';

import { ReactComponent as ClearDay } from '../svg/Dripicons/weather/sun.svg';
import { ReactComponent as ClearNight } from '../svg/Dripicons/weather/moon-stars.svg';
import { ReactComponent as CloudLightDay } from '../svg/Dripicons/weather/cloud-sun.svg';
import { ReactComponent as CloudLightNight } from '../svg/Dripicons/weather/cloud-moon.svg';
import { ReactComponent as CloudDay } from '../svg/Dripicons/weather/cloud-sun.svg';
import { ReactComponent as CloudNight } from '../svg/Dripicons/weather/cloud-moon.svg';
import { ReactComponent as CloudsDay } from '../svg/Dripicons/weather/clouds-sun.svg';
import { ReactComponent as CloudsNight } from '../svg/Dripicons/weather/clouds-moon.svg';
import { ReactComponent as DrizzleDay } from '../svg/Dripicons/weather/cloud-drizzle-sun.svg';
import { ReactComponent as DrizzleNight } from '../svg/Dripicons/weather/cloud-drizzle-moon.svg';
import { ReactComponent as RainDay } from '../svg/Dripicons/weather/cloud-rain-sun.svg';
import { ReactComponent as RainNight } from '../svg/Dripicons/weather/cloud-rain-moon.svg';
import { ReactComponent as ThunderDay } from '../svg/Dripicons/weather/cloud-lightning-sun.svg';
import { ReactComponent as ThunderNight } from '../svg/Dripicons/weather/cloud-lightning-moon.svg';
import { ReactComponent as SnowDay } from '../svg/Dripicons/weather/cloud-snow-sun.svg';
import { ReactComponent as SnowNight } from '../svg/Dripicons/weather/cloud-snow-moon.svg';
import { ReactComponent as MistDay } from '../svg/Dripicons/weather/fog.svg';
import { ReactComponent as MistNight } from '../svg/Dripicons/weather/fog.svg';

function WeatherIcon(props) {
  return (
    <div className={classes(props.size)}>
      {pickIcon(props.code)}
    </div>
  );
}

const classes = size => `icon${size !== undefined ? ` ${size}` : '' }`;

const pickIcon = code => {
  switch (code) {
    case '01d':
      return <ClearDay />;
    case '01n':
      return <ClearNight />;
    case '02d':
      return <CloudLightDay />;
    case '02n':
      return <CloudLightNight />;
    case '03d':
      return <CloudDay />;
    case '03n':
      return <CloudNight />;
    case '04d':
      return <CloudsDay />;
    case '04n':
      return <CloudsNight />;
    case '09d':
      return <DrizzleDay />;
    case '09n':
      return <DrizzleNight />;
    case '10d':
      return <RainDay />;
    case '10n':
      return <RainNight />;
    case '11d':
      return <ThunderDay />;
    case '11n':
      return <ThunderNight />;
    case '13d':
      return <SnowDay />;
    case '13n':
      return <SnowNight />;
    case '50d':
      return <MistDay />;
    case '50n':
      return <MistNight />;
    default:
      return <svg />;
  }
};

export default WeatherIcon;
