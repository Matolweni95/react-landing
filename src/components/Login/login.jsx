import React, { Component } from 'react';
import { icons } from 'react-icons';
import {FaFacebook, FaTwitter, FaGoogle, FaInstagram} from "react-icons/fa"

class Login extends Component {
    state = {  }
    render() { 
        return (
            <div className="login">
        <body>
        <link rel="stylesheet" type="text/css" href="App.css"/>

          <div className="loginbox">
            <img src={require("./batman.png")} className="avatar" alt="batman"/>
              <h1>Login</h1>
            <form>
            <p>Username</p>
            <input type="text" name="" placeholder="Enter Username"/>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password"/>
            <input type="submit" name="" value="Login"></input>
            
            <script src="https://kit.fontawesome.com/b427aa8f03.js" crossorigin="anonymous"></script>
            <div class ="social-media">
                <a href= "https://facebook.com/" class ="social">
                  <i class="fab fa-facebook-f"> </i>
                </a>
                <a class = "social" href= "https://google.com/">
                  <i class = "fab fa-google"></i>
                </a>
                <a class = "social" href= "https://twitter.com/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class = "social" href= "https://instagram.com/">
                  <i class="fab fa-instagram"></i>
                </a> 
            </div>
            </form>
            <div class = "account-links">
            <a style={{padding: '15px'}}href="#">Forgot password?</a>             
            <a style={{padding: '15.5px'}} href="#">Create Account</a>            
            </div>
          </div>
          
        </body>
      
        <div className ="footer">
          <a href="#home" > &nbsp; &nbsp; &nbsp; &nbsp;Home</a>
          <a href="#about" >About</a>
          <a href="#help" >Help Center</a>
          <a href="#t&c">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#blog">Blog</a>
          <a href="#status">Staus</a>
          <a href="#advertising">Advertising</a>
          <a href="#marketing">Marketing</a>
          <a href="#developers">Developers</a>
          <a href="#dir">Directory</a>
          <a href="#cookie">Cookie Policy</a>
          <a href="#business">Business</a>
          <a href="#settng">Setting</a>
          <a href="#settng">Brand Resources</a>
          
          </div> 
      
        </div>
        );
    }
}
 
export default Login;