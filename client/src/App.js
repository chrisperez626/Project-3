import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => (
  <Router>
    <div className="container-fuid">
      <Navbar />
      <br/>
      <Switch>
        <Route path="/" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/members" exact component={Home}/>
        <Route component={NoMatch} />
      </Switch>
      <br/>
    </div>
  </Router>
);


export default App;
