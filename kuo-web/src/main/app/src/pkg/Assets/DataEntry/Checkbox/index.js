import React, { Component } from 'react';

import './index.less';

class AstvCheckbox extends Component {

  render() {
    return (
      <div className="ast-checkbox">
        <div className="checkbox-content">
          <div className="checkbox-text">
            <p className="font_8">
              <span style={{ color: '#000000' }}>Send me breaking news</span>
            </p>
          </div>
          <div className="checkbox-box">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox-input"/>
              <span className="checkbox-shadow"></span>
              <div className="checkbox-mark"></div>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default AstvCheckbox;
