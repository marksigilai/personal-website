import React, { Component} from 'react';
import propTypes from 'prop-types'
import styles from '../styles/project.module.css'


class Project extends Component{

    render(){
        return(
            <div className={styles.container}>
                {this.props.projects.map((project) => (
                    <div className={styles.project} key = {project.id}>
                        <div className={styles.titlecontainer}>
                            <h2 className={styles.title}>{ project.title } </h2>
                        </div>
                        <p className={styles.paragraph}>{ project.description } </p>
                        <div className={styles.languages}>
                            Languages used
                        </div>
                        <button className={styles.moreinfo} type='button'>More Info</button>
                    </div>
                ))}
            </div>
        );
    }
}

Project.propTypes = {
    projects: propTypes.array.isRequired
}

export default Project;