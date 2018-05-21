import React from 'react';
// import { Link } from 'react-router-dom';
import "./Content3.css";

const Content3 = ({loggedIn, logout}) => {
    return (

        <div className="cta">
        <div className="cta-content">
          <div className="container">
            <h2>Stop waiting....Start building.</h2>
            <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
  
    );
}

export default Content3;