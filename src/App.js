import React from 'react';

import Weather from './components/Weather';

function App() {
  return (
    <>
      <React.StrictMode>
        <Weather />
      </React.StrictMode>
      <div className="module calendar"></div>
      <div className="module news"></div>
    </>
    );
}

export default App;
