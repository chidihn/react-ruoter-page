import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  
class Contanct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedireact: false
        }
    }
    
    submitForm = (event)=>{
        event.preventDefault();
        this.setState({
            isRedireact:true
        });
        
    }
    render() {
        if (this.state.isRedireact) return <Redirect to="/thank" />;
        return (
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100" style={{ paddingTop: '150px' }}>
                        <div className="col-xl-12 text-center">
                            <form>
                                <h1 style={{ marginBottom: '100px' }}>Lien he voi chung toi</h1>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="yourname" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Messenger</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                </div>
                            </form>
                            <div className="text-left"><button type="submit" onClick = {(event) => this.submitForm(event)} className="btn btn-primary ">Submit</button></div>
                        </div>
                    </div>
                </div>
                <section className="contact bg-primary" id="contact">
                    <div className="container">
                        <h2>We
                  <i className="fas fa-heart" />
                            new friends!</h2>
                        <ul className="list-inline list-social">
                            <li className="list-inline-item social-twitter">
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item social-facebook">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list-inline-item social-google-plus">
                                <a href="#">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
        );
    }
}

export default Contanct;