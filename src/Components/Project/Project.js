import React, { Component, createRef } from "react";
import Language from "../Language/Language";
import "./Project.css";
import { Power2, gsap } from "gsap";

class Project extends Component {
	constructor(props) {
		super(props);
		this.container = createRef();
		this.banner = createRef();
		this.title = createRef();
		this.subtitle = createRef();

		this.projects = createRef();
	}

	async componentDidMount() {
		await this.title.current;
		await this.subtitle.current;
		await this.container.current;
		await this.banner.current;

		var tl = gsap.timeline({});

		tl.from(this.banner.container, {
			scrollTrigger: {
				animation: tl,
				toggleActions: "restart reverse restart reverse",
				trigger: this.banner.current,
				start: "top top",
				end: "bottom center",
				markers: false,
				pin: true,
			},
		}).from([this.title.current, this.subtitle.current], 0.4, {
			y: -30,
			ease: Power2.easeOut,
			opacity: 0,
			stagger: 0.1,

			scrollTrigger: {
				toggleActions: "restart reverse restart reverse",
				trigger: this.banner.current,
				start: "top 80%",
				markers: false,
				scrub: 0.1,
			},
		});

		gsap.from(".project", {
			y: -30,
			ease: Power2.easeOut,
			opacity: 0,
			stagger: 0.1,

			scrollTrigger: {
				toggleActions: "restart reverse restart reverse",
				trigger: ".project",
				start: "top 60%",
				markers: true,
			},
		});
	}

	render() {
		const projects = [
			{
				title: "Stock Trading Simulator",
				description:
					"A scalable stock trading app where users can create accounts, add virtual funds and complete trading transactions.",
				github: "https://github.com/marksigilai/stock-trading-app/",
				languages: [
					{ language: "Python" },
					{ language: "React" },
					{ language: "NodeJS" },
					{ language: "MongoDB" },
					{ language: "NGINX" },
					{ language: "Docker" },
				],
			},
			{
				title: "Personal Website",
				description:
					"It is intended to have all the relevant info from my resume, and later iterations will have a blog, admin account for dynamic data management, and posts about my other hobbies.",
				github: "https://github.com/marksigilai/personal-website",
				languages: [{ language: "React" }, { language: "HTML" }, { language: "CSS" }],
			},
			{
				title: "Worm Scheduler",
				description:
					"A cooperative scheduler built in C that supports the scheduling of the functions of the worm game. The game runs on a terminal window.",
				github: "https://github.com/marksigilai/worm-scheduler",
				languages: [{ language: "C" }],
			},
			{
				title: "Log File System",
				description:
					"Modifies a simulated disk where creation/manipulation of files and directories is possible by allocating memory and the use of inodes to reference memory locations.",
				github: "https://github.com/marksigilai/log-file-system",
				languages: [{ language: "C" }],
			},
		];

		return (
			<div ref={this.container} className="container">
				<div ref={this.banner} className="banner">
					<h1 ref={this.title}>...my projects</h1>
					<p ref={this.subtitle}> a list of some of the recent school and personal projects I have worked on.</p>
				</div>

				<div className="projects">
					{projects.map((project) => {
						return (
							<div ref={this.projects} className="project">
								<h2 className="title">{project.title} </h2>

								<div key={project.id} timeout={10} classNames="slide">
									<p name="paragraph" className="paragraph">
										{" "}
										{project.description}{" "}
									</p>
									<div className="languages">
										{project.languages.map((language) => {
											return <Language language={language.language} />;
										})}
									</div>

									<form className="btn" action={project.github}>
										<button type="submit">GitHub</button>
										<span class="material-icons"> keyboard_arrow_right </span>
									</form>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Project;
