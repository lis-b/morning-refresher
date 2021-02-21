import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = React.useState(false); // eslint-disable-line no-unused-vars
  const darkMode = useDarkMode(
      () => window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
      , { storageKey: null }); // to consistently match system colours

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    darkMode.toggle();
  };

  return (
    <div className="toggle">
      <DarkModeSwitch
        checked={darkMode.value}
        onChange={toggleDarkMode}
        size={50}
      />
    </div>
  );
};

export default DarkModeToggle;
