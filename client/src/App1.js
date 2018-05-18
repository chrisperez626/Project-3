import React, { Component } from "react";
import Nav from './components/Nav/Nav';
import ProjectPage from './components/ProjectPage';
import "./App.css";
import Wrapper from "./components/BootstrapGrid/Wrapper";
import Col from './components/BootstrapGrid/Col'
import Row from './components/BootstrapGrid/Row'

class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <ProjectPage/>  
      </div>
    )
  }

}

export default App;
