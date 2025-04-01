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

import logo from './logo.svg';
import './App.css';
import Header from './components/modules/Header';
import Carousel from './components/modules/Carousel';

function App() {

  return (
    <>
      <div>
        <Header />
        <div className="small-title">
          View the Candidates:
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default App;
