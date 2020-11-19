import React, { Component } from 'react';
import './styles/app.css';
import Homepage from './components/Homepage';
import Backend from './components/Backend'
import Resume from './components/Resume'
import AboutMePage from './components/AboutMePage'
import Login from './components/Login'
import {Protectedroute} from './components/Protectedroute'
import { Route, withRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Navbar from './components/Navbar';


class App extends Component{

  render() {
    return (
      <div className="app">
        <Navbar current = {this.props.location.pathname}/>
        
        <Route render = { ({location}) => (
          <TransitionGroup>

            <CSSTransition key = {location.key} timeout={1000} classNames="fade" unmountOnExit>
              <Switch location = {location}>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/resume" component={Resume}/> 
                <Route exact path="/about" component={AboutMePage}/>
                <Route exact path="/login" component={Login}/>
                <Protectedroute exact path="/backend" component={Backend}></Protectedroute>  
              </Switch>
              
            </CSSTransition>
          </TransitionGroup>
        )}/>
        
      </div>
    )
  }
}

export default withRouter(App);
