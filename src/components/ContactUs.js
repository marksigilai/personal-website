import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/contactus.css';


class ContactUs extends Component{
  render() {
    return (
      <ul>
          <h1>
              Contact Us
          </h1>
          <li>
            <a href="/">FB</a>
          </li>
          <li>
            <a href="/">IG</a>
          </li>
          <li>
            <a href="/">LinkedIn</a>
          </li>
          <li>
            <a href="/">Github</a>
          </li>
      </ul>
    )
  }
}

export default ContactUs;
