import React, { Component } from 'react';
import styles from '../styles/contactus.module.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
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
        copied:false,
        copy_status:'copy to clipboard'
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
        document.getElementById('container').style.backgroundImage = 'none'
        document.getElementById('forms_container').style.cssText = 'width: 30vw; margin-left: 40px; float: none'
      }else{
        document.getElementById('forms_container').style.cssText = 'float: right'
      }
  }


  render() {
    return (
      <div className={styles.container} id="container">
        <div className={styles.main}>

          <h1 className={styles.heading} >contact me.</h1>
          <p className={styles.subheading} >Feel free to contact me through the phone or email below </p>
          


          <div className={styles.content} id='forms_container'>

            <p className={styles.email} >
              <span className={styles.sp1} >EMAIL</span> 
              <CopyToClipboard text="sigilaimark@gmail.com" onCopy={() => {this.setState({copied:'true', copy_status:'copied to clipboard'})}}>
                <button type='button' style={this.state.copied ? {color:'green'} : {color:'grey'}}><span class="material-icons">content_copy</span></button>
              </CopyToClipboard>
              <span className={styles.sp2}>sigilaimark@gmail.com</span>
            </p>

            <p className={styles.call} >
              <span className={styles.sp1} >CALL</span>
              <a href="tel:2368824370" className={styles.sp2} >(236) 882 4370</a>
            </p>

            <form className={styles.links_container}  action="http://www.facebook.com">
              <button type="submit" className={styles.links}>
                  <h2>Facebook</h2>

              </button>
            </form>

            <form className={styles.links_container} action="http://www.instagram.com">
              <button type="submit" className={styles.links}>
                <h2>Instagram</h2>

              </button>
            </form>

            <form className={styles.links_container} action="http://www.linkedin.com">
              <button type="submit" className={styles.links}>
                <h2>LinkedIn</h2>

              </button>
            </form>

            <form className={styles.links_container} action="http://www.github.com/marksigilai">
              <button type="submit" className={styles.links}>
                <h2>Github</h2>

              </button>
            </form> 
          </div>

        </div>
      </div>
      
    )
  }
}

export default ContactUs;
