import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';


class Navbar extends Component{
  render() {
    //console.log(this.state.projects)
    return (
      <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/backend">Backend</Link>
          </li>
      </ul>
    )
  }
}

export default Navbar;
