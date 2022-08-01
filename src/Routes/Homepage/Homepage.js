import React, { Component, createRef } from "react";
import Project from "../../Components/Project/Project";
import AddFeedback from "../../Components/AddFeedback/AddFeedback";
import Landing from "../../Components/Landing/Landing";
import AboutMe from "../../Components/AboutMe/AboutMe";
import styles from "./homepage.module.css";
import ContactUs from "../../Components/ContactUs/ContactUs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class Homepage extends Component {
	constructor(props) {
		super(props);

		this.landing = createRef();
		this.aboutme = createRef();
		this.projects = createRef();
		this.addfeedback = createRef();
		this.contactus = createRef();
		this.container = createRef();

		this.state = {
			projects: [],
		};
	}
	componentWillMount() {
		fetch("http://localhost:3002/projects")
			.then((res) => res.json())
			.then((data) => {
				this.setState({ projects: data });
			})
			.catch((error) => {
				console.log("Error with accessing the database" + error);
			});
	}

	render() {
		return (
			<div ref={this.container} className={styles.homepage}>
				<div ref={this.landing}>
					<Landing />
				</div>

				<div ref={this.aboutme}>
					<AboutMe />
				</div>

				<div ref={this.projects}>
					<Project projects={this.state.projects} />
				</div>

				<div ref={this.addfeedback}>
					<AddFeedback />
				</div>

				<div ref={this.contactus}>
					<ContactUs />
				</div>
			</div>
		);
	}
}

export default Homepage;
