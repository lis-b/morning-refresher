import React from 'react';
import ReactDOM from 'react-dom';

import './import-normalize.css';
import './index.sass';

import Weather from './Weather';

ReactDOM.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
  document.getElementById('root')
);
