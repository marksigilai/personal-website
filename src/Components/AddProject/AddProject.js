import React, { Component} from 'react';

class AddProject extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            project_title: '',
            project_description: '',
            project_information: '',
            project_url: '',
            submitted: false
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)

        };
        fetch('http://localhost:3002/projects', requestOptions)
        .then(response => {
            response.json()
            console.log(response)
            if(!response.ok){
                throw new Error("The response was not ok")
            }else{
                this.setState({
                    submitted : true, 
                    project_title: '',
                    project_description: '',
                    project_information: '',
                    project_url: ''
                })
            }
        })
        .catch(error => (console.log("Error with the fetch : " + error)));

    }
    somefuncname(){
        this.setState({submitted:false})
    }


    render(){
        if(this.state.submitted){
            return(
                <div>
                    <h3>Submitted</h3>
                    <button onClick={this.somefuncname.bind(this)}>Add new project</button>
                </div>
            )
        }else{
            return(
                <div className = "addproject">
                    <h2>Add a new project</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <label htmlFor="project_title">Title: </label>
                        <input id="project_title" value = {this.state.project_title} name="project_title" type="text" onChange={this.myChangeHandler}/>
                        <br/>
                        <label htmlFor="project_description">Brief Description: </label>
                        <input id="project_description" value= {this.state.project_description} name = "project_description" type="text" onChange={this.myChangeHandler}/>
                        <br/>
                        <label htmlFor="project_information">Information: </label>
                        <input id="project_information" value= {this.state.project_information} name = "project_information" type="text" onChange={this.myChangeHandler}/>
                        <br/>
                        <label htmlFor="project_url">Github URL: </label>
                        <input id="project_url" value= {this.state.project_url} name = "project_url" type="text" onChange={this.myChangeHandler}/>
                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>            
                </div>
            );
        }
    }
}

export default AddProject;