import React, { Component } from 'react';
import './app.css';
import Homepage from './Routes/Homepage/Homepage';
import Backend from './Routes/Backend/Backend'
import Resume from './Routes/Resume/Resume'
import AboutMePage from './Routes/AboutMe/AboutMePage'
import Login from './Routes/Login/Login'
import Navbar from './Components/Navbar/Navbar';
import {Protectedroute} from './Components/ProtectedRoute/Protectedroute'
import { Route, withRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

const routes = [
  { path: '/', name: 'Home', Component: Homepage },
  { path: '/resume', name: 'About', Component: Resume },
  { path: '/about', name: 'Contact', Component: AboutMePage },
  { path: '/login', name: 'Contact', Component: Login },
]

class App extends Component{

  render() {
    return (
      <div className="app">
        <Navbar/>
        <>
          {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => ( 
                  
                  <CSSTransition in={match != null} timeout={300} classNames="fade" unmountOnExit >
                    <div className="fade">
                      <Component />
                    </div>
                  </CSSTransition>
                
                )}
              </Route>
          ))}
        </>
          
        
      </div>
    )
  }
}

export default withRouter(App);
