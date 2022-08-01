import React, { Component } from "react";
import Project from "../../Components/Project/Project";
import AddFeedback from "../../Components/AddFeedback/AddFeedback";
import Landing from "../../Components/Landing/Landing";
import AboutMe from "../../Components/AboutMe/AboutMe";
import styles from "./homepage.module.css";
import ContactUs from "../../Components/ContactUs/ContactUs";

class Homepage extends Component {
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
					<Project />
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
