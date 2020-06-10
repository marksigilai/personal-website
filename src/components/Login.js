import React, { Component} from 'react';
import auth from '../auth'
import { withRouter } from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            password: ""
        }
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        auth.setPassword(this.state.password)
        //push ocurring when login is not done  
        if(this.state.password.length > 0){
            auth.login().then(() => {
                this.props.history.push("/backend")
            })
        }      
       
        
    }
    render(){
        return(
            <form className='Login' method='POST' onSubmit={this.handleSubmit}>
                <h3>MARK SIGILAI</h3>
                <input type='password' value={this.state.password} onChange={this.myChangeHandler} name='password'/>
                <br/>
                <input type="submit" value="LogIn"/>            
            </form>
        )

    }

}

export default withRouter(Login)

