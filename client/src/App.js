import React, {Component} from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Whiteboard from "./components/Whiteboard";
import ProjectPage from "./components/ProjectPage";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import API from './utils/API';

import Footer from "./components/Footer";


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
        user: res.data,
        loggedIn: res.data || false
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    console.log("in app js", this.state.user)
    return (
      <Router>
        <div>
          <Navbar loggedIn={this.state.loggedIn} logout={this.handleLogout} user={this.state.user}/>
          <Route exact path="/" render={() => <Masthead loggedIn={this.state.loggedIn} logout={this.handleLogout} user={this.state.user}/>}/>
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
          <Route exact path="/whiteboard" component={Whiteboard}/>
          <Route exact path="/projectpage" render={() => <ProjectPage loggedIn={this.state.loggedIn} />}/>
          <Footer loggedIn={this.state.loggedIn} logout={this.handleLogout} />

        </div>
      </Router>
    );
  }
}

export default App;
