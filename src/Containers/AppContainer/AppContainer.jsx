import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './AppContainer.css';

class AppContainer extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
      </div>
    );
  }
}

export default AppContainer;