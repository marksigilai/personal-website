import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useWindowDimensions from '../../Helper/dimensions'
import {TweenMax, Power3} from 'gsap'
import { useLocation } from 'react-router-dom'


const setCurrentTab = (currentTab) => {
  TweenMax.to('.Navbar-link', .1, {css:{color:'white', transform: 'scale(0.8)'}, ease:Power3.easeInOut, delay:0})      

  if(currentTab === "/"){
    TweenMax.to('.Navbar-link-home', .1, {css:{transform: 'scale(1.3)'}, ease:Power3.easeInOut, delay:0})
  }
  else if(currentTab === "/resume"){
    TweenMax.to('.Navbar-link-resume', .1, {css:{transform: 'scale(1.3)'}, ease:Power3.easeInOut, delay:0})
  }
  else if(currentTab === "/about"){
    TweenMax.to('.Navbar-link-about', .1, {css:{transform: 'scale(1.3)'}, ease:Power3.easeInOut, delay:0})
  }
}



const Navbar = () =>{

  const { height, width } = useWindowDimensions();
  console.log(width, height)

  const location = useLocation();
  useEffect(() => {
    setCurrentTab(location.pathname)
  });


  if(width >= 600){
    return (
      <ul className="Navbar-desktop">

          <li className="Navbar-logo" >
            <h1>MS</h1>
          </li>

          <div>
            <li>
              <Link to="/"  className="Navbar-link Navbar-link-home" >Home</Link>
            </li>
            <li>
              <Link to="/resume" className="Navbar-link Navbar-link-resume" >Resume</Link>
            </li>
            <li> 
              <Link to="/about" className="Navbar-link Navbar-link-about" >About Me</Link>
            </li>
          </div>

          <li>
            <Link to="/login" className="Navbar-link Navbar-login-button" >Login</Link>
          </li>
      </ul>
    )
  }
  else if(width < 600){
    return (
      <div className="Navbar-phone">
          <button id='hamburger' type='button' className="Navbar-phone_hamburger" onClick={this.openNavbar}>
            <span class="material-icons">menu</span>
          </button>

          <ul className="Navbar-phone_navbar" id='phone_navbar'>
            <button type='button' className="Navbar-close_navbar" onClick={this.closeNavbar}>
              <span class="material-icons">close</span>
            </button>
            <li id='/'>
              <Link to="/" className="Navbar-link">Home</Link>
            </li>
            <li id='/resume'>
              <Link to="/resume" className="Navbar-link">Resume</Link>
            </li>
            <li id='/about'>
              <Link to="/about" className="Navbar-link">About Me</Link>
            </li>
            <li id = "showLogin" className="Navbar-login_button_container">
              <Link to="/login" className="Navbar-login_button" onClick={() => {this.setCurrentTab(this.login)}}>Login</Link>
            </li>
        </ul>
      </div>        
    )
  }
}


export default Navbar
