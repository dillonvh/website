import React, { Component } from 'react';

import './ContentContainer.css';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='container'>
          <div>
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentContainer;