import React from 'react';
import { Link } from 'react-router-dom';
// import {BrowserRouter as Router, Route } from "react-router-dom"; 
import "./MainMastDetails.css";



const MainMastDetails = () => {
    return (
  
      <div className="mastmaindetails">
          <div className="col-lg-6 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">"NEW TO CODING OR TEAM CODING PROJECTS?   THE PROJECT MANAGER MAKES IT EASY...."</h1>
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
       );
}

export default MainMastDetails;


