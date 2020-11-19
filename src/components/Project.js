import React, { Component, createRef} from 'react';
import propTypes from 'prop-types'
import styles from '../styles/project.module.css'
import  { Power3, TimelineLite, Power2, gsap} from 'gsap'
import { CSSTransition } from 'react-transition-group';


class Project extends Component{

    constructor(props){
        super(props)
        this.container = createRef()
        this.banner = createRef()
        this.title = createRef()
        this.subtitle = createRef()
        this.icon = createRef()
        this.projects = createRef()


        this.state = {
            key : null
        }


    }
    

    animate(id, index){
 
        this.setState({key : id})

        var tl1 = new TimelineLite()
        var tl2 = new TimelineLite()

        var paragraphs = document.getElementsByName('paragraph')
        var infos = document.getElementsByName('information')
    
        
        tl1.to(infos[0], 3, {x:-200, opacity: 0, ease:Power3.easeInOut})
    
        //tl2.from(infos[0], 3, {x:-200, opacity: 0, ease:Power3.easeInOut})
    }

    async componentDidMount(){
        await this.title.current
        await this.subtitle.current
        await this.icon.current
        await this.container.current
        await this.banner.current
        await this.projects.current


    
        var tl = gsap.timeline({})
    
        tl.from(this.banner.container, {
          scrollTrigger:{
                animation: tl,
                toggleActions: "restart reverse restart reverse",
                trigger: this.banner.current,
                start: "top top",
                end: "bottom center",
        //        markers: true,
                pin: true,

          }
        }).from([this.icon.current, this.title.current, this.subtitle.current], 0.4, {
          y: -30,
          ease: Power2.easeOut,
          opacity:0,
          stagger: 0.1,

          scrollTrigger : {
            toggleActions: "restart reverse restart reverse",
            trigger: this.banner.current,
            start: "top 800px",
     //       markers: true,
            scrub: .1
          }
        })

        console.log(this.projects.current)


        gsap.from(this.projects.current, .2, {
            x: 10,
            opacity:0,
            ease: Power2.easeInOut,

            scrollTrigger : {
                toggleActions: "restart reverse restart reverse",
                trigger: this.projects.current,
                start: "top 800px",
//                markers: true,
                scrub: .1
              }
        })

        var i = 0;
        for(i = 0; i < this.projects.length; i++){
            gsap.from(this.projects[i].current, {
              y: -300,
              ease: Power2.easeOut,
              opacity:0,
              stagger: 0.1,  
            })
        }
    
    
      }










    render(){

        

        return(
            <div ref={this.container} className={styles.container}>

                <div ref={this.banner} className={styles.banner}>
                    <span ref={this.icon} class="material-icons">explore</span>
                    <h1 ref={this.title}>...my projects</h1>
                    <p ref={this.subtitle}> a list of some of the recent school and personal projects I have worked on.</p>
                </div>

                <div className={styles.wrapper}>
                    {this.props.projects.map((project, index) => {
                        console.log(index)
                        return(
                            <div ref = {this.projects} className={styles.project} key = {project.id}>
                                <div className={styles.project_number}>#{index+1}</div>
                                
                                <h2 className={styles.title}>{ project.title } </h2>
                                
                                    {!(this.state.key === project.id) && 
                                        <div key={project.id} timeout={10000} classNames="slide" >
                                            <p name="paragraph" className={styles.paragraph}> {project.description} </p>
                                            <div className={styles.btn}>
                                                <button type='button' onClick = {() => this.setState({key:project})}>More Info</button>
                                                <span class="material-icons">
                                                    keyboard_arrow_right
                                                </span>
                                            </div>  
                                        </div>
                                    }
                                
                                    {this.state.key === project.id && 
                                        <div key={project.id} timeout={1000} classNames="slide">
                                            <div name="information" className={styles.info} >{project.information}</div>
                                            <div className={styles.btn}>
                                                <span class="material-icons">
                                                    keyboard_arrow_left
                                                </span>
                                                <button type='button' onClick = {() => this.setState({key : null})}>Back</button>
                                            </div>
                                        </div>
                                    }
                            </div>
                        )

                    }
                        
                    )}
                </div>
            </div>
        );
    }
}

Project.propTypes = {
    projects: propTypes.array.isRequired
}

export default Project;