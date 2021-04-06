import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import firebaseApp from '../firebase/Firebase';
import isEmail from 'validator/lib/isEmail';

class Login extends Component {
	constructor(props) {
    	super(props);
    	this.state = {email: "", password:""};
    	//
    	this.handleEmailChange = this.handleEmailChange.bind(this)
    	this.handlePassChange = this.handlePassChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
   handlePassChange(e) {
    this.setState({password: e.target.value});
  }
	handleSubmit(e) {
	    e.preventDefault();
	    var email = this.state.email.trim();
	    var password = this.state.password.trim();
      if(isEmail(email)){
  	    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    		  // Handle Errors here.
    		  var errorMessage = error.message;
    		  alert("errorMessage: "+ errorMessage)
    		});
      }else{
        alert("Email Address in not valid");
      }
  }
  render() {
    return (
      <div className="Login">
        <h1>Login Screen</h1>
        <div className="col-md-4"></div>
           <div className="form-group col-md-4">
            
          <br/>
        
          <form onSubmit={this.handleSubmit}>
          	<input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Email" />
          	<input type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange} placeholder="Enter Password" /><br/>
          	<button type="submit" className="btn btn-default">Submit</button>
          </form>  
        	<br/><br/>
        	<p>Forgot Password? <Link to="/recover"> Click Here</Link></p>
          <p>Not SIgned up yet? <Link to="/signup"> Sign Up</Link></p>
        </div>
      </div>
    );
  }
}

export default Login;
