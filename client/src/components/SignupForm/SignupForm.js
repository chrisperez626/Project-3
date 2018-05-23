import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Wrapper} from "../BootstrapGrid"
import API from "../../utils/API";


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


        <form class="create-form">
        <div class="form-group">
          <label>First Name: </label>
          <input name="firstname" type="text" class="form-control" placeholder="first name" value={this.state.firstname} onChange={this.handleInputChange}></input>
          <br></br>
          <label>Last Name: </label>
          <input name="lastname" type="text" class="form-control" placeholder="last name" value={this.state.lastname} onChange={this.handleInputChange}></input>
          <br></br>
          <label>Email: </label>
          <input name="email" type="text" class="form-control" placeholder="email" value={this.state.email} onChange={this.handleInputChange}></input>
          <br></br>
          <label>Password: </label>
          <input name="password" type="password" class="form-control" placeholder="password" value={this.state.password} onChange={this.handleInputChange}></input>
          <button onClick={this.handleSignUp} class="express-btn btn btn-primary btn-xl rounded-pill mt-5">Login</button>
        </div>
      </form>


      </Wrapper>
 
 
    )
  }
}

export default SignupForm;