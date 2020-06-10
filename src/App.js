import React, { Component } from 'react';
import './styles/app.css';
import Homepage from './components/Homepage';
import Backend from './Backend'
import {Protectedroute} from './components/Protectedroute'
import { Route, withRouter } from 'react-router-dom';

class App extends Component{
  render() {
    //console.log(this.state.projects)
    return (
      <div className="app">
          <Route exact path="/" component={Homepage}/> 
          <Protectedroute exact path="/backend" component={Backend}/> 
      </div>
    )
  }
}

export default withRouter(App);
