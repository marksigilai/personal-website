import React, { Component } from 'react';
import styles from './landing.module.css'
import  { Power3, Power1, gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

class Landing extends Component{
  constructor(props){
    super(props)
    this.state = [

    ]
    this.title = React.createRef()
    this.subheading = React.createRef()
    this.arrow = React.createRef()
    this.btn = React.createRef()
    this.hello = React.createRef()
    this.img = React.createRef()
  }


  async componentDidMount() {
    await this.title.current
    await this.subheading.current
    await this.btn.current
    await this.hello.current
    await this.img.current


    var tl = gsap.timeline({defaults:{opacity:0}})

    tl.from(this.hello.current, .7, {y:4, ease:Power1.easeInOut, delay:2})
    .from(this.title.current, 1, {y:-4, ease:Power3.easeInOut, delay:.8})
    .from(this.subheading.current, .7, {y:-50, ease:Power3.easeInOut, delay:.7})
    .from(this.btn.current, 1, {y:-10, ease:Power3.easeInOut, delay:.5})
    
    gsap.to(this.img.current, 1, { 
      y: 0,
      scrollTrigger : {
        toggleActions: "restart reverse restart reverse",
        scrub: .1,
        trigger: this.img.current,
        start: "top top"
      }
    })

      
    
  }

  render() {
    return (
        <div className={styles.landing}>
          <div className={styles.info_container}>
            <p className={styles.img} ref={this.img}></p>
            <h3 ref={this.hello}><span>HELLO</span> I'm</h3>
            <div className={styles.titles_container}>
              <h1 ref={this.title} className={styles.title}>Mark Sigilai</h1>
              <h2 ref={this.subheading} className={styles.subtitle}>a junior software developer</h2>
            </div>
          </div>

          <button id="btn" ref={this.btn} className={styles.btn} type='button'>
            <span ref={this.arrow} class="material-icons">keyboard_arrow_down</span>
          </button>
          
        </div>
    )
  }
}

export default Landing;