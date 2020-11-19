import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import {TweenMax, Power3} from 'gsap'

class Navbar extends Component{

  constructor(props){
    super(props)
    this.state = {
      width: 0,
      showLogin: false 
    }
    
    this.home = React.createRef();
    this.resume = React.createRef();
    this.about = React.createRef();
    this.navbar = React.createRef();
    this.login = React.createRef();
    this.logo = React.createRef();
    console.log(this.resume)

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  async componentDidMount() {
    await this.home.current
    await this.resume.current
    await this.about.current
    await this.navbar.current
    await this.login.current
    await this.logo.current


    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    
    TweenMax.to(this.navbar.current, 0, {css:{visibility: 'visible'}, delay:0})
    TweenMax.from(this.home.current, .7, {opacity:0, x:40, ease:Power3.easeInOut, delay:0.4})
    TweenMax.from(this.resume.current, .7, {opacity:0, x:40, ease:Power3.easeInOut, delay:0.6})
    TweenMax.from(this.about.current, .7, {opacity:0, x:40, ease:Power3.easeInOut, delay:0.8 })
    TweenMax.from([this.login.current, this.logo.current], .7, {opacity:0, y:-40, ease:Power3.easeInOut, delay:0})

  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);

  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  closeNavbar(){
    document.getElementById('phone_navbar').style = 'height: 0'
    document.getElementById('hamburger').style = 'opacity: 1'
  }
  openNavbar(){
    document.getElementById('phone_navbar').style = 'height: 50vh'
    document.getElementById('hamburger').style = 'opacity: 0'
  }

  async handleClick(victim){
    await victim
    TweenMax.to(victim.current, .4, {css:{color: 'black', transform: 'scale(1.3)'}, ease:Power3.easeInOut, delay:0})
    if(victim !== this.home){
      TweenMax.to(this.home.current, .4, {css:{color:'white', transform: 'scale(1.0)'}, ease:Power3.easeInOut, delay:0})      
    }
    if(victim !== this.resume){
      TweenMax.to(this.resume.current, .4, {css:{color:'white', transform: 'scale(1.0)'}, ease:Power3.easeInOut, delay:0})      
    }
    if(victim !== this.about){
      TweenMax.to(this.about.current, .4, {css:{color:'white', transform: 'scale(1.0)'}, ease:Power3.easeInOut, delay:0})      
    }
  }




  render() {

    if(this.state.width >= 600){
      return (
        <ul className={styles.desktop_navbar} ref={this.navbar}>
            <li className={styles.logo} ref={this.logo}>
              <h1>MS</h1>
            </li>

            <div className={styles.middle}>
              <li id='home'>
                <Link to="/"  className={styles.link} onClick={() => {this.handleClick(this.home)}} ref={this.home} >Home</Link>
              </li>
              <li id='resume'>
                <Link to="/resume" className={styles.link} onClick={() => {this.handleClick(this.resume)}} ref={this.resume} >Resume</Link>
              </li>
              <li id='about'  > 
                <Link to="/about" ref={this.about} onClick={() => {this.handleClick(this.about)}} className={styles.link} >About Me</Link>
              </li>
            </div>

            <li id = "showLogin" className={styles.login_button_container}>
              <Link to="/login" className={styles.login_button} ref={this.login} onClick={() => {this.handleClick(this.login)}}>Login</Link>
            </li>
        </ul>
      )
    }
    else if(this.state.width < 600){
      return (
        <div className={styles.navbar_container}>
            <button id='hamburger' type='button' className={styles.phone_hamburger} onClick={this.openNavbar}>
              <span class="material-icons">menu</span>
            </button>

            <ul className={styles.phone_navbar} id='phone_navbar'>
              <button type='button' className={styles.close_navbar} onClick={this.closeNavbar}>
                <span class="material-icons">close</span>
              </button>
              <li id='/'>
                <Link to="/" className={styles.link}>Home</Link>
              </li>
              <li id='/resume'>
                <Link to="/resume" className={styles.link}>Resume</Link>
              </li>
              <li id='/about'>
                <Link to="/about" className={styles.link}>About Me</Link>
              </li>
              <li id = "showLogin" className={styles.login_button_container}>
                <Link to="/login" className={styles.login_button} ref={this.login} onClick={() => {this.handleClick(this.login)}}>Login</Link>
              </li>
          </ul>
        </div>        
      )
    }
  }
}

export default Navbar;
