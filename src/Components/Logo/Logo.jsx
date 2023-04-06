import React from 'react';
import '../../App.scss';
import logo from '../svg/logo.svg';

function Logo() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Logo;
