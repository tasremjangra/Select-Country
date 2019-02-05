import React, { Component } from 'react';
import './Select.css';
import {BrowserRouter as Router ,Route,Link} from "react-router-dom";
import Assignment1 from './Assignment1';

class App extends Component {
  render() {
    return (
      <div className="App">
     <Link to="Assignments">Tarsem Jangra</Link>
      </div>
    );
  }
}

export default App;
