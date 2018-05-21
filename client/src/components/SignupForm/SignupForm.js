import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Wrapper, Row, Col} from "../BootstrapGrid"
import API from "../../utils/API";
import Masthead from "../Masthead";
import Content1 from "../Content1";

const styles = {
  header: {
    color: "orange",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center"
  }
}

class SignupForm extends Component {
  state = {
    redirectTo:"",
    firstname:"",
    lastname:"",
    email: "",
    password: ""
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  };

  handleSignUp = event => {
    event.preventDefault();
    API.signUp({ firstname: this.state.firstname, lastname:this.state.lastname, email: this.state.email, password: this.state.password})
    .then(() => this.setState({
      redirectTo: "/login"
    }));
  }

  render(){
    if(this.state.redirectTo){
      return <Redirect to={this.state.redirectTo} />
    }
    return (
 
      <Wrapper>
        <Row>
          <Col>
            <h1 style={styles.header}>Signup Form</h1>
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Firstname: </label>
          </Col>
          <Col span={3}>
            <input name="firstname" type="text" value={this.state.firstname} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Lastname: </label>
          </Col>
          <Col span={3}>
            <input name="lastname" type="text" value={this.state.lastname} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Email: </label>
          </Col>
          <Col span={3}>
            <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Password: </label>
          </Col>
          <Col span={4}>
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <button onClick={this.handleSignUp}>Submit</button>
          </Col>
        </Row>
      </Wrapper>
 
    )
  }
}

export default SignupForm;