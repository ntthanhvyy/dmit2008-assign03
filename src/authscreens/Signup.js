import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import firebaseApp from '../firebase/Firebase';
import isEmail from 'validator/lib/isEmail';

class Signup extends Component {
	constructor(props) {
    	super(props);
    	this.state = {name: "",email: "", password:""};
    	//
      this.handleNameChange = this.handleNameChange.bind(this)
    	this.handleEmailChange = this.handleEmailChange.bind(this)
    	this.handlePassChange = this.handlePassChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
   handlePassChange(e) {
    this.setState({password: e.target.value});
  }
	handleSubmit(e) {
	    e.preventDefault();
      var name = this.state.name.trim();
	    var email = this.state.email.trim();
	    var password = this.state.password.trim();
      if(isEmail(email)){
  	    firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
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
      <div className="Signup">
        <h1>Sign up</h1>
        <div className="col-md-4"></div>

          <div className="form-group col-md-4">
           
          <br/>
      
          <form onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} placeholder="Enter Name" />
          	<input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Email" />
          	<input type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange} placeholder="Enter Password" /><br/>
          	<button type="submit" className="btn btn-default">Submit</button>
          </form>  
          	<br/>
        	<p>Already Signed up? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    );
  }
}

export default Signup;
