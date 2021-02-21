import React from 'react';
import ReactDOM from 'react-dom';

import './styles/import-normalize.css';
import './index.sass';

import App from './App';
import DarkModeToggle from './components/DarkModeToggle';

ReactDOM.render(
  <>
      <App />
      <DarkModeToggle />
  </>
  ,
  document.getElementById('root')
);
