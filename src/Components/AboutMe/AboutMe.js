import React, { useEffect } from "react";
import "./Aboutme.css";
import profileImage from "../../images/mark-sigilai.jpeg";
import useWindowDimensions from "../../Helper/dimensions";
import { gsap, Power3, Power2 } from "gsap";
import uuid from "uuid";

const AboutMe = () => {
	useEffect(() => {
		var tl = gsap.timeline();

		tl.from([".intro"], {
			y: 20,
			duration: 1,
			opacity: 0,
			delay: 0.5,
			stagger: 0.3,
		})

			.from([".sections-next"], {
				y: 20,
				opacity: 0,
				duration: 0.2,
				stagger: 0.3,
			})
			.to("#name", {
				color: "#FF8C00",
				ease: Power3.easeInOut,
			})
			.to([".intro-container", ".sections"], {
				opacity: 0,
				duration: 0.1,
				ease: Power2.easeInOut,
				scale: 0.5,

				scrollTrigger: {
					trigger: [".sections"],
					start: "bottom 100%",
					end: "bottom 50%",
					markers: true,
					scrub: 0.1,
				},
			});
	});

	const { width } = useWindowDimensions();

	var isPhone;

	if (width > 600) {
		isPhone = false;
	} else {
		isPhone = true;
	}

	var sections = [
		{
			id: uuid(),
			icon: "badge",
			title: "Experience",
			descriptions: [
				{
					description: "Insurance Corporation of British Columbia",
				},
				{
					description: "Jan to Dec 2021 - 12 months",
				},
				{
					description: "Automation Testing",
				},
				{
					description: "Tools used - Selenium, Java, Maven",
				},
			],
		},
		{
			id: uuid(),
			icon: "menu_book",
			title: "Education",
			descriptions: [
				{
					description: "University of Victoria",
				},
				{
					description: "Bachelor of Software Engineering",
				},
				{
					description: "2017 to present",
				},
				{
					description: "Graduation - May 2023",
				},
			],
		},
		{
			id: uuid(),
			icon: "location_city",
			title: "Location",
			descriptions: [
				{
					description: "Based in Victoria, B.C. Canada",
				},
			],
		},
		{
			id: uuid(),
			icon: "public",
			title: "Background",
			descriptions: [
				{
					description: "From Nairobi, Kenya.",
				},
				{
					description: "Came to Canada in August 2017",
				},
			],
		},
	];

	return (
		<div className="Aboutme-container" style={{ "--aboutme-align-default": isPhone ? "center" : "left" }}>
			<div className="intro-container">
				<img id="profile-img" class="intro" src={profileImage} alt="profile" />
				<h1 class="intro">
					Hello! <br /> My name is <span id="name">Mark Sigilai</span> and I'm a Junior Software Engineer.
				</h1>
				<div class="intro">
					Currently, I am completing my final semester in university, and actively looking for new experiences! <br />
					<br />
					Super passionate about Web Development, Complex Algorithms, and really enjoy the challenges that come with solving
					coding problems.
				</div>
			</div>

			<div className="sections">
				{sections.map((section) => {
					return (
						<div className="sections-next" key={section.id}>
							<div>
								<span class="material-icons">{section.icon}</span>
								<h1>{section.title} </h1>
							</div>
							<ul>
								{section.descriptions.map((description) => {
									return <li>{description.description}</li>;
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AboutMe;
