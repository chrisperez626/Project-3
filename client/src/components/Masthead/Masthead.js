import React from 'react';
// import { Link } from 'react-router-dom';
import "./Masthead.css";

const Masthead = ({loggedIn, logout}) => {
    return (

        <div className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">NEW TO CODING OR TEAM PROJECTS?  THE PROJECT MANAGER MAKES IT EASY....</h1>
              <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">SIGN UP OR LOGIN!</a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={require("../../img/logo.jpg")} className="img-fluid" alt={"pm"}/>
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
  
);
}

export default Masthead;