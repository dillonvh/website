import React, { Component } from 'react';

import LinkedInLogo from '../Assets/Images/In-2C-34px-TM.png'
import GitHubLogo from '../Assets/Images/GitHub-Mark-32px.png'

import emoji from 'react-easy-emoji';

import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid bg-info footer-container'>
        <div className='row footer-text'>
          <div className='col-xs-6'>
            <p>
              Made with {emoji('❤')} with React
            </p>
          </div>
          <div className='col-xs-6 ml-auto'>
            <p>
              Connect with me!
              <a className='github-link' href='https://github.com/apruner'>
                <img className='github-icon' src={GitHubLogo} alt='LinkedIn'/>
              </a>
              <a className='linkedin-link' href='https://linkedin.com/in/adam-pruner'>
                <img className='linkedin-icon' src={LinkedInLogo} alt='GitHub' />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;