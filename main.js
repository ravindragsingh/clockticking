import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx';


function tick() {
  const element = (
    <div>
      <h1>Realtime time clock!</h1>
      <p>Weback talk to main.js and main.js to App and App to index.html</p>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('app')
  );
}

setInterval(tick, 1000);