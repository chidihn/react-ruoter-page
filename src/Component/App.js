import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './../App.css';
import Nav from './Nav.js';
// import Home from './Home';
import Footer from './Footer';
// import Contanct from './Contanct';
// import Download from './Download';
// import Features from './Features';
import DieuHuongURL from '../router/DieuHuongURL';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav/>
            <DieuHuongURL/>
          <Footer/>
        </Router>
        
      </div>
    );
  }
}

export default App;
