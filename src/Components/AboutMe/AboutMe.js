import React from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './Aboutme.css'
import profileImage from '../../Images/mark-sigilai.jpeg'
//import {TweenMax, Power2, gsap, TimelineMax} from 'gsap'
//import {ScrollTrigger} from 'gsap/ScrollTrigger'
import uuid from 'uuid';

const AboutMe = () =>{
	const [mode, setMode] = React.useState("out-in");
	const [current, setState] = React.useState(0);

	var sections = [{
			id: uuid(),
			icon: "badge",
			title: "Experience",
			descriptions: [{
				description: "Insurance Corporation of British Columbia"
			},{
				description: "Jan to Dec 2021 - 12 months"
			},{
				description: "Automation Testing"
			},
			{
				description: "Tools used - Selenium, Java, Maven"
			}]
		},{
			id: uuid(),
			icon: "menu_book",
			title: "Education",
			descriptions: [{
				description: "University of Victoria"
			},{
				description: "Bachelor of Software Engineering"
			},{
				description: "2017 to present"
			},{
				description: "Graduation - May 2023"
			}
				
			],
		},{
			id: uuid(),
			icon: "location_city",
			title: "Location",
			descriptions: [{
				description: "Based in Victoria, B.C. Canada"
			}]
		},
		{
			id: uuid(),
			icon: "public",
			title: "Background",
			descriptions: [{
				description: "From Nairobi, Kenya.",
			},{
				description: "Came to Canada in August 2017"
			}]
		}
	];
  

    return (
      <div className="Aboutme-container">

		<div className='design'></div>
        
        <div className='intro-container'>
			<img src={profileImage} alt='profile'/>
			<h1>
				Hello! <br/> My name is Mark Sigilai and I'm a Software Engineering Student. 
			</h1>
			<div>
				I created this website to be a personal tracker and as a web dev practice. Hope you enjoy the experience!
			</div>
        </div>


		<div className="sections">		

			{ sections.map( (section) => {
				return(
					<div className="sections-next" key={section.id}>   
						<div>
							<span class="material-icons">{section.icon}</span>
							<h1>{ section.title } </h1>
						</div>
						<ul>
							{ section.descriptions.map( (description) => {
								return(
									<li>	
										{description.description}
									</li>
								)
							})}
						</ul>
					</div>	
				)
			})}
		</div>
		


      </div>      
    )
}

export default AboutMe;
