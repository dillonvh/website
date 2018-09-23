import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand'>
          Adam Pruner
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a className='nav-link'>Home<span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link'>About<span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link'>Resume<span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link'>Contact<span className='sr-only'>(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;