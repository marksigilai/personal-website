import React from "react";
import "./Aboutme.css";
import profileImage from "../../images/mark-sigilai.jpeg";
import useWindowDimensions from "../../Helper/dimensions";

//import {TweenMax, Power2, gsap, TimelineMax} from 'gsap'
//import {ScrollTrigger} from 'gsap/ScrollTrigger'
import uuid from "uuid";

const AboutMe = () => {
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
			<div className="design" style={{ display: isPhone ? "none" : "initial" }}></div>

			<div className="intro-container">
				<img src={profileImage} alt="profile" />
				<h1>
					Hello! <br /> My name is Mark Sigilai and I'm a Software Engineering Student.
				</h1>
				<div>
					Currently, I am completing my final semester of classes in university, and actively looking for new experiences! I am
					really passionate and adaptable to any new situation. I have had experience in Web Development, Software Testing,
					Complex Algorithms, etc and enjoy the learning experience that comes with it.
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
