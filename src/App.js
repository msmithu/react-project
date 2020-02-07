//dependencies
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//components
import Header from './Componants/Header';
import Footer from './Componants/Footer';
import Home from './Componants/Home';

//includes
import './assets/css/style.css';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
        <Route path='*' component={Header} />        
        <Route exact path='/' component={Home} />        
        <Route path='*' component={Footer} />
        
      {/* <header className="App-header">
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
      </header> */}
    </div>
    </Router>
  );
}

export default App;
