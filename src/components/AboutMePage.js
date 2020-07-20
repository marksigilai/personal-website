import React, { Component } from 'react';
import styles from '../styles/aboutmepage.module.css'

class AboutMePage extends Component{
  render() {
    return (
        <div className={styles.about}>
            <div id='about' className={styles.aboutme_landing}>
                <h1 className={styles.title}>About Me</h1>
                <h2 className={styles.subtitle}>a junior software developer</h2>
                <p>I am a 4th year software engineering student at the University of Victoria with extensive programming experience with C, React, Java, Python amongst other languages. My personal projects are listed below</p>
            </div>
        </div> 
    )
  }
}

export default AboutMePage;
