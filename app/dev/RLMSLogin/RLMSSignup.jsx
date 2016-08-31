import React from 'react';
import {render} from 'react-dom';
import Request from 'superagent';

class SignUpApp extends React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  ret: function(){
    this.context.router.push('/login');
  },
  
  render(){
    return (
      <div>
      <RegisterForm/>
      <button type="button" onClick={this.ret}>Cancel</button>
      </div>
    );
  }
  
}){}

const RegisterForm = (props) =>{
  return (
    <div>
    <h1><p>Join RLMS!</p></h1>
    <h2>Sign Up</h2>
    
    <form action="/api/signup" method="post">
      <label>First Name: </label>
      <input type="text" name="firstname" id="firstname"></input>
      <label>Last Name: </label>
      <input type="text" name="lastname" id="lastname"></input>
      <label>Username: </label>
      <input type="text" name="username" id="username"></input>
      <label>Password: </label>
      <input type="password" name="password" id="password"></input>
      <label>Confirm Password:</label>
      <input type="password" name="cPass" id="cPass"></input>
      <button type="submit">Register</button>
    </form>
    
    </div>
  )
}

export default SignUpApp;

if(module.hot){
  module.hot.accept();
}