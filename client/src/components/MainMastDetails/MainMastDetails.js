import React from 'react';
import { Link } from 'react-router-dom';
// import {BrowserRouter as Router, Route } from "react-router-dom"; 
import "./MainMastDetails.css";



const MainMastDetails = ({loggedIn, logout}) => {
    return (
  
      <div className="container-fluid">
        <div className="row">
        {!loggedIn ? (
          <div className="col-8 txtcol">
              <h1>"NEW TO CODING OR TEAM CODING PROJECTS?   SYNERGY MAKES IT EASY...."</h1>
              <br></br>
              <br></br>
              <Link className="btn btn-outline btn-xl js-scroll-trigger" to="/Signup">SIGNUP</Link>
              <a>OR</a>
              <Link className="btn btn-outline btn-xl js-scroll-trigger" to="/login">LOGIN</Link>
              
          </div>
          ):(
            <div className="col-8 txtcol">
              <h1>"NEW TO CODING OR TEAM CODING PROJECTS?   SYNERGY MAKES IT EASY...."</h1>
              {/* <Link className="btn btn-outline btn-xl js-scroll-trigger" to="/Signup">SIGNUP</Link>
              <a>OR</a>
              <Link className="btn btn-outline btn-xl js-scroll-trigger" to="/login">LOGIN</Link>
               */}
          </div>
          )}
          <div className="col-4 mastimgcol">
                    <img src={require("../../img/team.jpg")} className="img-fluid mastimg" alt={"pm"}/>
                  </div>
                  <div className="button">
                
            </div>
          </div>
          </div>
         
       );
}

export default MainMastDetails;


