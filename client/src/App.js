import React, {Component} from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import { Home, SignupForm, Login} from "./components";
import Whiteboard from "./components/Whiteboard";
import ProjectPage from "./components/ProjectPage";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import API from './utils/API';
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
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
          <Navbar loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          <Masthead loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          <Content1 loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          <Content2 loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          <Content3 loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          <Footer loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          {/* <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user}/>} /> */}
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
          <Route exact path="/whiteboard" component={Whiteboard}/>
          <Route exact path="/projectpage" component={ProjectPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
