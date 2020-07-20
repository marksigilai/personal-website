import React, { Component} from 'react';
import styles from '../styles/addfeedback.module.css';

class AddFeedback extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            feedback_name: '',
            feedback_email: '',
            feedback_message: '',
            feedback_success: false,
            width: window.innerWidth,
            height: window.innerHeight,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
  
    componentWillMount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        
    }
  
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        console.log(this.state.width)
        if(window.innerWidth <= "650"){
            document.getElementById('img').style.display = "none";
            document.getElementById('form').style.border = "none";
        }else{
            document.getElementById('img').style.display = "block";
            document.getElementById('form').style.border = "1px solid white";
        }   
    }

    validate = () => {
        var valid = false;

        //validate message
        if(this.state.feedback_message){
            var msg = document.getElementById('feedback_message')
            msg.style = "border-bottom: 1px solid green"
            if(this.state.feedback_message.length < 5){
                msg.style = "border-bottom: 1px solid red"
            }
        }
        //validate fname
        if(this.state.feedback_name){
            var reg = /^[a-zA-Z ]+$/;
            var name = document.getElementsByName('feedback_name')[0]
            name.style = "border-bottom: 1px solid green"

            if(reg.test(this.state.feedback_name)){
                valid = true
            }else{
                valid = false
                name.style = 'border-bottom: 1px solid red'
            }
        }
        if(!valid){
            return valid
        }
        //validate email
        if(this.state.feedback_email){
            var re = /^(([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-.]+)@{[a-zA-Z0-9_\-.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
            var email = document.getElementById('feedback_email')
            email.style = 'border-bottom: 1px solid green'
            if(re.test(this.state.feedback_email)){
                valid =  true;
            }else{
                valid = false
                email.style = 'border-bottom: 1px solid red'
            }
        }
        if(!valid){
            return valid
        }
        
        return valid
    }

    newFeedback = () => {
        this.setState({ feedback_success: false })
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        this.validate()
    }

    handleSubmit = (event) => {

        event.preventDefault()
        if(!this.validate()){
            return
        }
        const msg = {
            feedback_name: this.state.feedback_name,
            feedback_email: this.state.feedback_email,
            feedback_message: this.state.feedback_message,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(msg)

        };
        fetch('http://localhost:3002/feedback', requestOptions)
        .then(response => {
            console.log("Hre")
            response.json()
            if(!response.ok){
                throw new Error("The response was not ok")
            }else{
                this.setState({ 
                    feedback_success: true,
                    feedback_name: '',
                    feedback_email: '',
                    feedback_message: '',
                })
            }
            if(this.state.feedback_success){
                this.happyFace()
            }
            
        })
        .catch(error => (console.log("Error with the fetch : " + error)));
    }

    render(){
        return(
            <div className = {styles.feedback_page} id="feedback_page">
                <div className={styles.container}>

                    <div id='img' className={styles.img}>
                        <p>Send us some feedback,</p>
                        <h1>we'll get in touch as soon as possible!</h1>
                        <h2>2</h2>
                    </div>

                    <form id='form' method="POST" onSubmit={this.handleSubmit} className={styles.form} autoComplete="off">
                        <div className={styles.banner} id="banner">
                            <h1 className='heading'>Feedback!</h1>
                        </div>
                        
                        <input className={styles.feedback_name} placeholder= "Name" value = {this.state.feedback_name} name="feedback_name" type="text" onChange={this.myChangeHandler} />
                        <input id="feedback_email" placeholder="Email" value= {this.state.feedback_email} name = "feedback_email" type="text" onChange={this.myChangeHandler}/>
                        <textarea id="feedback_message" placeholder="Message..." value= {this.state.feedback_message} name = "feedback_message" type="text" onChange={this.myChangeHandler}></textarea>
                        
                        <button className={styles.send_button} type="submit" value="Send">
                            <h3>Send</h3>   
                            <i className="material-icons" id = "arrow_f">arrow_forward</i>
                        </button>
                    </form>



                </div>
            </div>
        );
    }
}

export default AddFeedback;
