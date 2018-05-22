import React from 'react';
import { Link } from 'react-router-dom';
// import {BrowserRouter as Router, Route } from "react-router-dom"; 
import "./Masthead.css";
import Welcome from "../Welcome";
import {Wrapper} from "../BootstrapGrid";


const Masthead = ({loggedIn, logout, user, text}) => {
    return (
      !loggedIn ?
      <div className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-6 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">{text}</h1>
              <Link className="btn btn-outline btn-xl js-scroll-trigger" to="/Signup">SIGNUP</Link>
              <a>OR</a>
              <Link className="btn btn-outline btn-xl js-scroll-trigger" to="/login">LOGIN</Link>
            </div>
          </div>
          <div className="col-lg-6 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={require("../../img/team.jpg")} className="img-fluid mastimg" alt={"pm"}/>
                  </div>
                  <div className="button">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    <div className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <Wrapper>
            <Welcome user={user}/>
          </Wrapper>
        </div>
      </div>
    </div>
  
);
}

export default Masthead;