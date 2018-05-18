<<<<<<< HEAD
import React, {Component} from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import {Navbar, Home, SignupForm, Login} from "./components";
import API from './utils/API';


class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    email: "",
    password: "",
  }

  setUser = (user) => {
    console.log("USER", user);
    this.setState({
      user,
      loggedIn: true
    })
  }

  handleLogout = () => {
    API.logout()
    .then(() => {
      console.log("LOGOUT SUCCESS!");
      this.setState({
        user: null,
        loggedIn: false
      });
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    API.getCurrentUser()
    .then(res => {
      this.setState({
        user: res.data.user,
        loggedIn: res.data.user || false
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar loggedIn={this.state.loggedIn} logout={this.handleLogout}/>
          <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user}/>} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
        </div>
      </Router>
    );
  }
}
=======
import React from "react";
import Whiteboard from "./components/Whiteboard/Whiteboard";


const App = () => (
  <div className= "siteLayout">
    <Whiteboard />
  </div>
);


>>>>>>> 492e98dc9e4b78b1c23ddf8ecaf4e0b7424a22c3

export default App;
