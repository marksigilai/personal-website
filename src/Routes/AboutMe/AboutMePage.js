import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './aboutmepage.css'

class AboutMePage extends Component{
  render() {
    return (
        <div className="AboutMe-container">
            <div className="AboutMe-notice">
                <h1>Page under construction.</h1>
                <p>For more info about me, please reach me through my email on the home screen.</p>
                <Link className='AboutMe-link' to="/">Home</Link>
            </div>
        </div> 
    )
  }
}

export default AboutMePage;
