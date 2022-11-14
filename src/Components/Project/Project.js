import React, { Component } from "react";
import Language from "../Language/Language";
import "./Project.css";
import { Power2, gsap } from "gsap";

class Project extends Component {
	async componentDidMount() {
		var tl = gsap.timeline();

		tl.from(["#title"], {
			ease: Power2.easeOut,
			opacity: 0,
			stagger: 0.2,

			scrollTrigger: {
				toggleActions: "restart reverse restart reverse",
				trigger: ["#title"],
				start: "+=100 center",
				end: "+=200 10%",
				markers: false,
				scrub: 0.1,
				pin: true,
			},
		}).from(["#subtitle"], {
			ease: Power2.easeOut,
			opacity: 0,
			stagger: 0.2,

			scrollTrigger: {
				toggleActions: "restart reverse restart reverse",
				trigger: ["#subtitle"],
				start: "top 80%",
				markers: false,
				scrub: 0.1,
			},
		});

		var projects = gsap.utils.toArray(".project");

		projects.forEach((project) => {
			tl.from(project, {
				y: -10,
				ease: Power2.easeOut,
				opacity: 0,
				stagger: 0.1,
				delay: 0.1,

				scrollTrigger: {
					trigger: project,
					start: "center 70%",
					end: "center 30%",
					markers: true,
					scrub: 0.1,
				},
			}).to(project, {
				opacity: 0.5,
				y: -10,
				ease: Power2.easeOut,
				scrollTrigger: {
					trigger: project,
					start: "center 30%",
					end: "+=60",
					markers: true,
					scrub: 0.1,
				},
			});
		});
	}

	render() {
		const projects = [
			{
				title: "Stock Trading App",
				description:
					"A full stack web application that supports authentication, adding virtual funds and completing simple trading transactions. This is a distributed system with a microservices architecture that allowed for horizontal and vertical scaling of its components.",
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
				title: "Schedulater",
				description:
					"An implementation of the genetic algorithm for solving an optimization problem - the course scheduling problem. Able to find an optimal solution within 3.5 seconds.",
				github: "https://github.com/marksigilai/log-file-system",
				languages: [{ language: "Go" }],
			},
			{
				title: "Space Shooter",
				description:
					"An infinite game built using C++, with the OpenGl and GLUT libraries. Objective of the game is to dodge obstacles and/or shoot as many obstacles as possible to obtain points.",
				github: "https://github.com/marksigilai/log-file-system",
				languages: [{ language: "C++" }, { language: "OpenGL" }, { language: "GLUT" }],
			},
			{
				title: "Personal Website",
				description:
					"A website containing information on my personal experience and accomplishments, as well as being a project where I could learn and experiment with web development, especially front end work. ",
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
			<div className="container">
				<div className="banner">
					<h1 id="title">...my projects</h1>
					<p id="subtitle"> a list of some of the recent school and personal projects I have worked on.</p>
				</div>

				<div className="projects">
					{projects.map((project) => {
						return (
							<div className="project">
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
