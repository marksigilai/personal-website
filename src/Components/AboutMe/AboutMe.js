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
			title: "Experience",
			description: "Previous work experiences includes working at the ICBC Headquarters as part of the automation testing team. Achievements during my 1 year internship iclude"
		},{
			id: uuid(),
			title: "Education",
			description: "I am a student at the University of Victoria pursuing a degree in Software Engineering. Currently, I am in my 4th and final year."
		},{
			id: uuid(),
			title: "Location",
			description: "Currently I am based in Victoria, B.C. taking classes as part of my last semester. I am actively looking for a new challenge!  Feel free to reach out to me through my email listed in the contact details on the last page!"
		},
		{
			id: uuid(),
			title: "Background",
			description: "I'm an international from Nairobi, Kenya where I was born and raised. Came to Canada in August 2017 to study Software Engine"
		}
	];
  

    return (
      <div className="Aboutme-container">
        
        <div className='title-container'>
			<img src={profileImage} alt='profile'/>
			<h1>
				Hello! <br/> My name is Mark Sigilai and I'm a Software Engineering Student. 
			</h1>
			<div>
				I created this website to be a personal tracker and as a web dev practice. Hope you enjoy the experience!
			</div>
        </div>

		<div className="sections">		

			<SwitchTransition>
				{sections.map(({id, title, description}) => (
					<CSSTransition key={ id } classNames="center-item" timeout={500}>
						<div className="sections-next">   
							<h1>{ title } </h1>
							<p>{ description }</p>
						</div>	
					</CSSTransition>
				))}
			</SwitchTransition>

			<SwitchTransition>
				<CSSTransition key={ sections[(current+1)%4].id } classNames="center-item" timeout={600}>
						<div className="sections-next">   
							<h1>{ sections[(current+1)%4].title } </h1>
							<p>{ sections[(current+1)%4].description }</p>
						</div>
				</CSSTransition>
			</SwitchTransition>


			<SwitchTransition>
				<CSSTransition key={ sections[(current+2)%4].id } classNames="center-item" timeout={700}>
					<div className="sections-next">   
						<h1>{ sections[(current+2)%4].title } </h1>
						<p>{ sections[(current+2)%4].description }</p>
					</div>
				</CSSTransition>
			</SwitchTransition>

		</div>
		


      </div>      
    )
}

export default AboutMe;
