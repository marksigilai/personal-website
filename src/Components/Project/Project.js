import React, { Component, createRef} from 'react';
import propTypes from 'prop-types'
import './Project.css'
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


    }
    
    async componentDidMount(){
        await this.title.current
        await this.subtitle.current
        await this.icon.current
        await this.container.current
        await this.banner.current


    
        var tl = gsap.timeline({})
    
        tl.from(this.banner.container, {
          scrollTrigger:{
                animation: tl,
                toggleActions: "restart reverse restart reverse",
                trigger: this.banner.current,
                start: "top top",
                end: "bottom center",
                markers: true,
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
            markers: true,
            scrub: .1
          }
        })

        gsap.from(".project", {
            y: -30,
            ease: Power2.easeOut,
            opacity:0,
            stagger: 0.1, 
            
            scrollTrigger : {
                toggleActions: "restart reverse restart reverse",
                trigger: ".project",
                start: "top 600px",
                //markers: true,
            }
        })
    
    
    
      }


    render(){

        const projects = [
            {   title: 'Stock Trading Simulator', 
                description: "The stock trading simulator is a project where users can create an account and then trade stocks", 
                github: "https://github.com/marksigilai/stock-trading-app/"
            },
            { 
                title: 'Personal Website', 
                description: "The personal website is an ongoing project where I aim to maintain a portfolio of my past and current works ", 
                github: "https://github.com/marksigilai/personal-website" 
            },
            { 
                title: 'Cooperative Scheduler', 
                description: "The worm scheduler is a cooperative scheduler for the worm game", 
                github: "https://github.com/marksigilai/worm-scheduler" 
            },
            { 
                title: 'Log File System', 
                description: "The log file system is a", 
                github: "https://github.com/marksigilai/log-file-system"
            },
          ]

        

        return(
            <div ref={this.container} className="container">

                <div ref={this.banner} className="banner">
                    <span ref={this.icon} class="material-icons">explore</span>
                    <h1 ref={this.title}>...my projects</h1>
                    <p ref={this.subtitle}> a list of some of the recent school and personal projects I have worked on.</p>
                </div>

                <div className="projects">
                    {projects.map((project) => {
                        return(
                            <div ref = {this.projects} className="project">
                                
                                <h2 className="title">{ project.title } </h2>
                                
                                <div key={project.id} timeout={10} classNames="slide" >
                                    <p name="paragraph" className="paragraph"> {project.description} </p>

                                    <form className="btn" action={project.github}>
                                        <button type='submit'>GitHub</button>
                                        <span class="material-icons"> keyboard_arrow_right </span>
                                    </form>  
                                </div>

                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        );
    }
}


export default Project;