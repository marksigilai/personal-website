import React, { Component} from 'react';
import Project from './Project';
import AddFeedback from './AddFeedback';
import Navbar from './Navbar';
import Login from './Login';
import '../styles/homepage.css'

class Homepage extends Component{
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }
    componentDidMount(){
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
            <div className="Homepage">
                <h1>Homepage</h1>
                <Navbar />
                <Login/>
                <Project projects={this.state.projects} />
                <AddFeedback />
                
            </div>
            
        );
    }
}

export default Homepage;