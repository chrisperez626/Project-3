import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import { Wrapper} from "../BootstrapGrid";
import API from "../../utils/API";
import "./Login.css";


class Login extends Component{ 
  state = {
    email: "",
    password: "",
    redirectTo: ""
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  };

  handleLogin = event => {
    API.login({ email: this.state.email, password: this.state.password})
    .then((res) => {
        console.log("RES", res);
        this.props.setUser(res.data)
        this.setState({
          redirectTo: "/"
        });
      });
  }

  render(){
    if(this.state.redirectTo){
      return <Redirect to={this.state.redirectTo} />
    }
    return (
      <Wrapper>



<form class="create-form">
        <div class="form-group">
          <label>Email: </label>
          <input name="email" type="text" class="form-control" placeholder="email" value={this.state.email} onChange={this.handleInputChange}></input>
          <br></br>
          <label>Password: </label>
          <input name="password" type="password" class="form-control" placeholder="password" value={this.state.password} onChange={this.handleInputChange}></input>
          <button onClick={this.handleLogin} class="express-btn btn btn-primary btn-xl rounded-pill mt-5" >Login</button>
        </div>
      </form>
      </Wrapper>
    );
  }
}

export default Login;


