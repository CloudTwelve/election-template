/*

import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

*/

import './App.css';
import './dotAnimation.js'; // Import the script
import Header from './components/modules/Header';
import { Outlet } from 'react-router-dom'; // Import Outlet to render child routes

function App() {

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
