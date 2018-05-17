import React from 'react';
import './Signup.css';

const Signup = () =>{
    return(
            <div className="card mx-auto col-md-6 col-md-offset-3">
                <h4 className="card-header">Sign Up Form</h4>
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
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <br />
                <p>Or Login <a href="/login">here</a> Or </p>
                <div className="g-signin2" data-onsuccess="/"></div>
                </div>
            </div>
    );
}

export default Signup;