import React, { Component } from 'react';
import SingleItem from './components/SingleItem'
import auth from './auth'
import AddProject from './components/AddProject'

class Backend extends Component{

    constructor(props){
        super(props)
        this.state = {
            projects: [],
            feedbacks: []
        }
    }
    componentDidMount(){
        Promise.all([fetch('http://localhost:3002/projects'), fetch('http://localhost:3002/feedback')])
        .then(([res1, res2]) => {
            return Promise.all([res1.json(), res2.json()])
        })
        .then(([data1, data2]) => {
            this.setState({projects : data1, feedbacks: data2})
        })
        
    }

    performLogout(){
        auth.logout()
        this.props.history.push("/")
    }

  render() {
    console.log(this.state.feedbacks)
    return (
        <div className="backend">
            <table>
                <thead>
                    <tr>
                        <th>Projects:</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.projects.map((project) => (
                        <SingleItem key = {project.id} type="projects" item = {project}/>
                    ))}
                </tbody>
                
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Feedback:</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.feedbacks.map((feedback) => (
                        <SingleItem key = {feedback.id} type="feedback" item = {feedback}/>
                    ))}
                </tbody>
                
            </table>
            <button onClick={this.performLogout.bind(this)}>Logout</button>
            <AddProject/>
        </div>
        
    )
  }
}

export default (Backend);

