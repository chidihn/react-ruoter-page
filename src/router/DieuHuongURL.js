import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Download from '../Component/Download.js';
import Home from '../Component/Home.js';
import Contanct from '../Component/Contanct.js';
import Features from '../Component/Features.js';
import Thank from '../Component/Thank.js';
class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/download" component={Download} />
                    <Route path="/contact" component={Contanct} />
                    <Route path="/features" component={Features} />
                    <Route path="/thank" component={Thank} />
                </div>
           
        );
    }
}

export default DieuHuongURL;