import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" ><Link to="/">Invigroup</Link></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" ><Link to="/download">Download</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger"><Link to="/features">Features</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" ><Link to="/contact">Contact</Link></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;