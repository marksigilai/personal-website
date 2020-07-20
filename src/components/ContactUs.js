import React, { Component } from 'react';
import styles from '../styles/contactus.module.css';

import linkedin from '../images/icons8-linkedin-64.png';
import fb from '../images/icons8-facebook-64.png';
import insta from "../images/icons8-instagram-64.png";
import github from "../images/icons8-github-64.png";



class ContactUs extends Component{

  constructor(props) {
    super(props);
    this.state = { 
        width: window.innerWidth,
        height: window.innerHeight,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
}


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      console.log(this.state.width)
      if(this.state.width <= 700){
      }
  }


  render() {
    return (
      <div className={styles.container}>
        <div className={styles.main} id="contact_section">
          <h1 className={styles.heading} >Contact Us </h1>
          <p className={styles.subheading} >Feel free to get in touch with us. </p>
          
          <p className={styles.email} >
            <span className={styles.sp1} >EMAIL</span> 
            <span className={styles.sp2} >sigilaimark@gmail.com</span>
          </p>
          <p className={styles.call} >
            <span className={styles.sp1} >CALL</span>
            <span className={styles.sp2} >(236) 882 4370</span>
          </p>

          <div className={styles.forms_container}>
            <form className={styles.forms}  action="http://www.facebook.com">
              <button type="submit" className={styles.links}>
                  <h2>Facebook</h2>
                  <img src={fb} alt="FB"/>
              </button>
            </form>

            <form className={styles.forms} action="http://www.instagram.com">
              <button type="submit" className={styles.links}>
                <h2>Instagram</h2>
                <img src={insta} alt = "Instagram"></img>
              </button>
            </form>

            <form className={styles.forms} action="http://www.linkedin.com">
              <button type="submit" className={styles.links}>
                <h2>LinkedIn</h2>
                <img src={linkedin} alt = "LinkedIn"></img>
              </button>
            </form>

            <form className={styles.forms} action="http://www.github.com/marksigilai">
              <button type="submit" className={styles.links}>
                <h2>Github</h2>
                <img src={github} alt = "Github"></img>
              </button>
            </form> 
          </div>

        </div>
      </div>
      
    )
  }
}

export default ContactUs;
