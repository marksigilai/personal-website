





import React, { Component} from 'react';
import propTypes from 'prop-types'
import styles from '../styles/project.module.css'
import  { Power3, TimelineLite} from 'gsap'
import { CSSTransition } from 'react-transition-group';


class Project extends Component{

    constructor(props){
        super(props)

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

    render(){

        

        return(
            <div className={styles.container}>
                <div className={styles.banner}>
                    <span class="material-icons">explore</span>
                    <h1>...my projects</h1>
                    <p> a list of some of the recent school and personal projects I have worked on.</p>
                </div>

                <div className={styles.wrapper}>
                    {this.props.projects.map((project, index) => {
                        console.log(index)
                        return(
                            <div className={styles.project} key = {project.id}>
                                <div className={styles.project_number}>#{index+1}</div>
                                
                                <h2 className={styles.title}>{ project.title } </h2>

                                <div key={project.id} timeout={10000} classNames="slide" >
                                    <p name="paragraph" className={styles.paragraph}> {project.description} </p>
                                    <div className={styles.btn}>
                                        <button type='button' onClick = {() => this.setState({key:project})}>More Info</button>
                                        <span class="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </div>  
                                </div>

                                
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