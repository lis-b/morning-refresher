import React from 'react';

import Weather from './components/Weather';
import Calendar from './components/Calendar';
import NewsBox from './components/NewsBox';

function App() {
  return (
    <>
      <React.StrictMode>
        <Weather />
        <Calendar />
        <NewsBox />
      </React.StrictMode>
    </>
    );
}

export default App;
