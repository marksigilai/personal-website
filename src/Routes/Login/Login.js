import React, { Component, createRef } from "react";
import auth from "../../Helper/auth";
import { withRouter } from "react-router-dom";
import styles from "./login.module.css";
import img from "../../Images/rastafari.png";
import { Power3, Power0, gsap } from "gsap";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			password: "",
			visibility: false,
		};

		this.container = createRef();
		this.login_form = createRef();
		this.login_heading = createRef();
		this.welcome_header = createRef();
		this.welcome_msg = createRef();
	}

	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({ [nam]: val });
	};

	async componentDidMount() {
		if (window.innerWidth <= 600) {
			document.getElementById("welcome").style = "display: none";
		}

		await this.container.current;
		await this.login_form.current;
		await this.login_heading.current;

		var tl = gsap.timeline({ defaults: { opacity: 0 } });

		tl.to(this.container.current, 1.3, { opacity: 1, y: -10, ease: Power3.easeInOut, delay: 0.5 })
			.from(this.login_heading.current, 1, { x: -10, ease: Power3.easeInOut, delay: 0.5 })
			.from(this.welcome_header.current, 0.5, { y: 4, ease: Power3.easeInOut, delay: 0 })
			.from(this.welcome_msg.current, 0.5, { y: -4, ease: Power0.easeInOut, delay: 0.2 })
			.from(this.login_form.current, 1, { x: 10, ease: Power3.easeInOut, delay: 0 });
	}

	handleSubmit = (event) => {
		event.stopPropagation();
		event.preventDefault();
		auth.setPassword(this.state.password);
		//push ocurring when login is not done

		if (this.state.password.length > 0) {
			auth.login().then(() => {
				if (auth.isAuthenticated()) {
					this.props.history.push("/backend");
				} else {
					document.getElementById("signin_password").style = "border: 2px solid red";
					document.getElementById("signin_password").value = "";
				}
			});
		}
	};

	showLogin = (event) => {
		//this.setState({visibility : true})
		console.log("button has been clicked!");

		//document.getElementById('login').style = 'width: 68vw'
		//document.getElementById('form').style = 'height: 75vh'
		//document.getElementById('emptydiv').style = 'width: 100%; height: 100%; opacity: 0.5'
	};

	closeLogin = (event) => {
		//this.setState({visibility:false})
		//document.getElementById('emptydiv').style = 'width: 0; height: 0; opacity: 0'
		//document.getElementById('login').style = 'width: 0;'
		//document.getElementById('form').style = 'height: 0;'
	};

	render() {
		return (
			<div id="login" ref={this.container} className={styles.login}>
				<div id="welcome" ref={this.login_heading} className={styles.login_heading}>
					<h1 ref={this.welcome_header}>Welcome home!</h1>
					<h2 ref={this.welcome_msg}>Sign in to view the latest feedback messages or add new projects.</h2>
				</div>
				<form id="form" ref={this.login_form} className={styles.login_form} method="POST" onSubmit={this.handleSubmit}>
					<h1 className={styles.signin}>
						<span className={styles.sp1}>Sign </span>
						<span className={styles.sp2}>In</span>
					</h1>
					<button type="button" className={styles.close_login} onClick={this.closeLogin}>
						<span class="material-icons">close</span>
					</button>
					<div className={styles.login_myname}>
						<img src={img} alt="user" className={styles.login_icon}></img>
						<h2>Mark Sigilai</h2>
					</div>
					<input
						id="signin_password"
						className={styles.login_password}
						type="password"
						value={this.state.password}
						onChange={this.myChangeHandler}
						name="password"
					/>
					<br />
					<input className={styles.login_submit} type="submit" value="Login" />
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
