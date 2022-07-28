import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css'

class Resume extends Component{
  render() {

    return (
      <div className="Resume-container">
        <div className="Resume-notice">
            <h1>Page under construction.</h1>
            <p>For access to my latest resume please reach me through my email or the feedback form on the home screen.</p>
            <Link className='Resume-link' to="/">Home</Link>
        </div>
      </div>

    )
  }
}

export default Resume;
