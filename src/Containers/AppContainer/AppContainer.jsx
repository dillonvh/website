import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomeContainer from '../HomeContainer';
import AboutContainer from '../AboutContainer';
import ResumeContainer from '../ResumeContainer';
import ContactContainer from '../ContactContainer';

import Navbar from '../../Components/Navbar/Navbar';

import './AppContainer.css';

class AppContainer extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Navbar />
          <Route exact path='/' component={HomeContainer} />
          <Route path='/about' component={AboutContainer} />
          <Route path='/resume' component={ResumeContainer} />
          <Route path='/contact' component={ContactContainer} />
        </div>
      </Router>
    );
  }
}

export default AppContainer;