import React, { Component} from 'react';
import propTypes from 'prop-types'

class Project extends Component{

    render(){
        return(
            this.props.projects.map((project) => (
                <div  key = {project.id}>
                    <h2>{ project.title } </h2>
                    <p>{ project.description } </p>
                </div>
            ))
        );
    }
}

Project.propTypes = {
    projects: propTypes.array.isRequired
}

export default Project;