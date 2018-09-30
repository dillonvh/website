import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import AdamPrunerResume from '../Assets/PDFs/AdamPruner-Resume.pdf'

import ContentContainer from './ContentContainer';

import './ContentContainer.css';

class ResumeContainer extends Component {
  render() {
    let content = (
      <Document
        file={AdamPrunerResume}
        className=''
      >
        <Page
          className='resume-page'
          pageNumber={1}
        />
      </Document>
    );

    return (
      <ContentContainer
        content={content}
      />
    );
  }
}

export default ResumeContainer