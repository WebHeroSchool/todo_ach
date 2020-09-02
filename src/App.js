import React from 'react';
import logo from './logo.svg';
import './App.css';

const day = 2;
const month = 'september';
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
	      <h1 style={{
          color: "red",
          fontSize: 10 + 12
          }}>
            First comment {day} {month}
        </h1>
        <div>{flag && 'I do it'}</div>
        <div>
          {flag ? 'congratulations' : 'do not worry'}
          {undefined}
          {false}
          {true}
          {null}
          </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
