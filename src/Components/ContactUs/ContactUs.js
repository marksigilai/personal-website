import React, { Component } from "react";
import styles from "./contactus.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
			phoneCopied: false,
			emailCopied: false,
			copy_status: "copy to clipboard",
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
		console.log(this.state.width);
		if (this.state.width <= 700) {
			document.getElementById("container").style.backgroundImage = "none";
			document.getElementById("forms_container").style.cssText = "width: 30vw; margin-left: 40px; float: none";
		} else {
			document.getElementById("forms_container").style.cssText = "float: right";
		}
	}

	render() {
		return (
			<div className={styles.container} id="container">
				<div className={styles.main}>
					<div>
						<h1 className={styles.heading}>contact me.</h1>
						<p className={styles.subheading}>Feel free to contact me through the phone or email below </p>
					</div>

					<div className={styles.content} id="forms_container">
						<p className={styles.email}>
							<span className={styles.sp1}>EMAIL</span>
							<CopyToClipboard
								text="sigilaimark@gmail.com"
								onCopy={() => {
									this.setState({ emailCopied: "true", copy_status: "copied to clipboard" });
								}}
							>
								<button type="button" style={this.state.emailCopied ? { color: "green" } : { color: "grey" }}>
									<span class="material-icons">content_copy</span>
								</button>
							</CopyToClipboard>
							<span className={styles.sp2}>sigilaimark@gmail.com</span>
						</p>

						<p className={styles.call}>
							<span className={styles.sp1}>PHONE</span>
							<CopyToClipboard
								text="236) 882 6885"
								onCopy={() => {
									this.setState({ phoneCopied: "true", copy_status: "copied to clipboard" });
								}}
							>
								<button type="button" style={this.state.phoneCopied ? { color: "green" } : { color: "grey" }}>
									<span class="material-icons">call</span>
								</button>
							</CopyToClipboard>
							<a href="tel:2368826885" className={styles.sp2}>
								(236) 882 4370
							</a>
						</p>

						<form className={styles.links_container} action="http://www.facebook.com">
							<button type="submit" className={styles.links}>
								<h2>Facebook</h2>
							</button>
						</form>

						<form className={styles.links_container} action="http://www.instagram.com">
							<button type="submit" className={styles.links}>
								<h2>Instagram</h2>
							</button>
						</form>

						<form className={styles.links_container} action="http://www.linkedin.com">
							<button type="submit" className={styles.links}>
								<h2>LinkedIn</h2>
							</button>
						</form>

						<form className={styles.links_container} action="http://www.github.com/marksigilai">
							<button type="submit" className={styles.links}>
								<h2>Github</h2>
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactUs;
