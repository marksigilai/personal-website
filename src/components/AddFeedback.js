import React, { Component} from 'react';
import styles from '../styles/addfeedback1.module.css';
import feedback_img from '../images/flame-5-cropped.png'
import ContactUs from '../components/ContactUs'

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
            removed: null
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
  
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
  
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        console.log(this.state.width)
        var img
        if((this.state.width <= 10) && !this.state.removed){
            img = document.getElementById('image')
            img.parentNode.removeChild(img)
            this.setState({removed : true})
        }
    }

    validate = () => {
        var valid = false;
        if(this.state.feedback_name){
            valid = true
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
        
    }


    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)

        //TODO: CALL FORM VALIDATION HERE, PASS ALL STATES
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)

        };
        fetch('http://localhost:3002/feedback', requestOptions)
        .then(response => {
            response.json()
            if(!response.ok){
                throw new Error("The response was not ok")
            }else{
                this.setState({ feedback_success: true,
                    feedback_name: '',
                    feedback_email: '',
                    feedback_message: '',
                })
            }
            console.log(this.state.feedback_success)
        })
        .catch(error => (console.log("Error with the fetch : " + error)));
    }

    render(){
        const arrow_style = {
            fontSize:"24px",
            marginLeft: '100px',
            color: "white",
            //EDIT
            display: "inline"
        }
        if(this.state.feedback_success){
            return(
                //TODO: ANIMATION TO A HAPPY FACE OR TICK
                //LOTS OF ANIMATION IMAGES
                <div className="submitted"> 
                    <h3>Submitted</h3>
                    <button onClick={this.newFeedback.bind(this)}>Submit More Feedback</button>
                </div>
            )
        }else{
            return(
                <div className = {styles.feedback_page}>
                    <div className = {styles.feedback_section}>
                        <h2>We value your feedback! </h2>

                        <div className = {styles.form_container}>
                            <form method="POST" onSubmit={this.handleSubmit}>
                                <h5>Feedback! </h5>
                                <div id = {styles.triangletopleft}></div>
                                <input id={styles.feedback_name} placeholder= "Name" value = {this.state.feedback_name} name="feedback_name" type="text" onChange={this.myChangeHandler}/>
                                <br/>
                                <input id="feedback_email" placeholder="Email" value= {this.state.feedback_email} name = "feedback_email" type="text" onChange={this.myChangeHandler}/>
                                <br/>
                                <textarea id="feedback_message" placeholder="Message..." value= {this.state.feedback_message} name = "feedback_message" type="text" onChange={this.myChangeHandler}></textarea>
                                <br/>
                                <button type="submit" value="Send">
                                    <h6>Send</h6>   
                                    <i class="material-icons" style={arrow_style} >arrow_forward</i>
                                </button>
                            </form>
                        </div>
                        
                        <div className = {styles.img}>
                            
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <ContactUs/>
                    </div>
                </div>
            );
        }
    }
}

export default AddFeedback;

//TODO: RETURN THE FEEDBACK IMG TO THE STYLES.IMG DIV
//<img src={feedback_img} alt = "Feedback Side" id='image'></img>