
import React, { Component } from 'react';
import styles from '../styles/landing.module.css'
import  { Power3, Power1, gsap} from 'gsap'


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
  }


  async componentDidMount() {
    await this.title.current
    await this.subheading.current
    await this.btn.current
    await this.hello.current


    var tl = gsap.timeline({defaults:{opacity:0}})

    tl.from(this.hello.current, .7, {y:4, ease:Power1.easeInOut, delay:2})
    .from(this.title.current, 1, {y:-4, ease:Power3.easeInOut, delay:.8})
    .from(this.subheading.current, .7, {y:-4, ease:Power3.easeInOut, delay:.7})
    .from(this.btn.current, 1, {y:-10, ease:Power3.easeInOut, delay:.5})

      
    
  }


  async handleHover(){

  }


  render() {
    return (
        <div className={styles.landing}>
          <div className={styles.info_container}>
            <h3 ref={this.hello}><span>HELLO</span> I'm</h3>
            <h1 ref={this.title} className={styles.title}>Mark Sigilai</h1>
            <h2 ref={this.subheading} className={styles.subtitle}>a junior software developer</h2>
          </div>

          <button id="btn" onClick ={() =>{window.scrollTo({top:650, behavior:"smooth"})}} ref={this.btn} className={styles.btn} type='button'>
            <span ref={this.arrow} class="material-icons">keyboard_arrow_down</span>
          </button>
          
        </div>
    )
  }
}

export default Landing;