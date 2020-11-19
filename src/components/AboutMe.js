import React, { Component, createRef } from 'react';
import styles from '../styles/aboutme.module.css'
import {TweenMax, Power2, gsap, TimelineMax} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


class AboutMe extends Component{

  constructor(props){
    super(props)

    this.title = createRef()
    this.paragraph = createRef()
    this.skills = createRef()
    this.container = createRef()
  }

  async componentDidMount(){
    await this.title.current
    await this.paragraph.current
    await this.skills.current
    await this.container.current

    var tl = gsap.timeline({})

    



    gsap.from(this.title.current, .8, {

      x: -30,
      ease: Power2.easeOut,
      opacity:0,
      
      scrollTrigger : {
        toggleActions: "restart reverse restart reverse",
        trigger: this.container.current,
        start: "top 100px",
        end: "bottom 700px",
    //    markers: true,
      }
    }
    )

    gsap.from(this.paragraph.current, 0.8, {
      opacity: 0, 
      x: 30, 
      ease: Power2.easeOut,
      
      scrollTrigger : {
        toggleActions: "restart reverse restart reverse",
        trigger: this.container.current,
        start: "top 100px",
        end: "bottom 700px",
      //  markers: true,
      }}
    )
    
    gsap.from(this.skills.current, .8, {
      opacity: 0, 
      x:-30, 
      ease: Power2.easeOut, 

      
      scrollTrigger : {
        toggleActions: "restart reverse restart reverse",
        trigger: this.container.current,
        start: "top 100px",
        end: "bottom 700px",
       // markers: true,

      }}
    )


  }

  render() {
    return (
      <div ref={this.container} className={styles.container}>
        <div className={styles.main}>
          <h1 ref={this.title} className={styles.title}>about me</h1>
          <div className={styles.paragraph_container} ref={this.paragraph}o>
              <p >I am a student at the <span>University of Victoria</span> pursuing a
                degree in <span>software engineering</span>. I have extensive programming experience 
                with full stack web development, as well as object oriented programming in Java and Python. 
              </p>
              <p>Currently I am based in <span>Victoria, B.C. </span>taking classes although I am always interested in a new challenge! 
                Feel free to reach out to me through the contact details on the last page, or through the feedback form below.
              </p>
          </div>
            
          <div ref={this.skills} className={styles.skills}>
            <h3>LANGUAGES</h3>
            <div className={styles.tiles}>
              <div className={styles.skill}>&lt;Java&gt;</div>
              <div className={styles.skill}>&lt;C&gt;</div>
              <div className={styles.skill}>&lt;Python&gt;</div>
              <div className={styles.skill}>&lt;React&gt;</div>
              <div className={styles.skill}>&lt;MySql&gt;</div>
              <div className={styles.skill}>&lt;HTML&gt;</div>
              <div className={styles.skill}>&lt;CSS&gt;</div>
              <div className={styles.skill}>&lt;NodeJS&gt;</div>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}

export default AboutMe;
