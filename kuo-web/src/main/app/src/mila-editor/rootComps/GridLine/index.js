import React, { Component } from 'react';

import './index.less';

class GridLine extends Component {

  render() {
    return (
      <div className="grid-lines">
        <svg className="grid-lines ">
          <line x1="230" y1="0" x2="230" y2="100%" className="back-line"></line>
          <line x1="1210" y1="0" x2="1210" y2="100%" className="back-line"></line>
          <line x1="0" y1="492" x2="100%" y2="492" className="back-line"></line>
          <line x1="0" y1="2545" x2="100%" y2="2545" className="back-line"></line>
          <line x1="230" y1="0" x2="230" y2="100%" className="front-line"></line>
          <line x1="1210" y1="0" x2="1210" y2="100%" className="front-line"></line>
          <line x1="0" y1="492" x2="100%" y2="492" className="front-line"></line>
          <line x1="0" y1="2545" x2="100%" y2="2545" className="front-line"></line>
        </svg>
      </div>
    )
  }
}

export default GridLine;
