import React, { Component } from 'react';

import './ContentContainer.css';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='container content-container' >
          Here is where content will go!
        </div>
      </div>
    );
  }
}

export default ContentContainer;