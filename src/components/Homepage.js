import React, { Component} from 'react';
import Project from './Project';
import AddFeedback from './AddFeedback';
import Landing from './Landing';
import AboutMe from './AboutMe'
import styles from '../styles/homepage.css'
import ContactUs from './ContactUs';

class Homepage extends Component{
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }
    componentWillMount(){
        fetch('http://localhost:3002/projects')
        .then(res => res.json())
        .then((data) =>{
            this.setState({projects : data})
        })
        .catch(error => {
            console.log("Error with accessing the database"+ error)
        })
    }

    render(){
        return(
            <div className={styles.homepage}>
                <Landing/>
                <AboutMe/>
                <Project projects={this.state.projects} />
                <AddFeedback />
                <ContactUs/>
            </div>
            
        );
    }
}

export default Homepage;