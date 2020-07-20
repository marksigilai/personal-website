import React, { Component } from 'react';
import styles from '../styles/aboutme.module.css'

class AboutMe extends Component{
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.landing}>
          <h1 className={styles.title}>About Me</h1>
          <h2 className={styles.subtitle}>Junior Software developer</h2>
          <p>I am a 4th year software engineering student at the University of Victoria with extensive programming experience with C, React, Java, Python amongst other languages. My personal projects are listed below</p>
          <div className={styles.skills}>
            <div className={styles.skill}>Java</div>
            <div className={styles.skill}>C</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>Python</div>
          </div>
        </div>
      </div>      
    )
  }
}

export default AboutMe;
