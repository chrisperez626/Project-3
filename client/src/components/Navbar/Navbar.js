import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({loggedIn, logout}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {loggedIn ? 
            [
              <li key="logout" className="nav-item">
                <a className="nav-item nav-link" href="#" onClick={logout} >Logout</a>
              </li>
            ]
            : 
            [
              <li key="signup" className="nav-item">
                <Link className="nav-item nav-link" to="/signup">Signup</Link>
              </li>,
              <li key="login" className="nav-item">
                <Link className="nav-item nav-link" to="/login">Login</Link>
              </li>
            ]            
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;