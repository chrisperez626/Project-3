import React from 'react';
import './Login.css';

const Login = () =>{
    return(
            <div className="card mx-auto col-md-6 col-md-offset-3">
                <h2 className="card-header">Login Form</h2>
                <div className="card-block">
                    <form className="login">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"/>
                        </div>
                        <button className="btn btn-primary">Login</button> 
                    </form>
                    <br />
                    <p>Or sign up <a href="/">here</a> Or </p>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                </div>
            </div>
    );
}

export default Login;