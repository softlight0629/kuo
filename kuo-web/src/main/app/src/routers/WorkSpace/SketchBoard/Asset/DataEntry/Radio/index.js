import React, { Component } from 'react';

import './index.less';

class AstvRadio extends Component {

  render() {
    return (
      <div className="ast-radio">
        <div className="radio-items">
          <div className="radio-button">
            <label className="radio-button-container">
              <input type="radio" className="radio-input" />
              <div className="radio-circle-shadow">
                <div className="radio-circle"></div>
              </div>
              <div className="radio-button-text">Yep, I'll come</div>
            </label>
          </div>
          <div className="radio-button">
            <label className="radio-button-container">
              <input type="radio" className="radio-input" />
              <div className="radio-circle-shadow">
                <div className="radio-circle"></div>
              </div>
              <div className="radio-button-text">Nope, can't make it</div>
            </label>
          </div>
          <div className="radio-button">
            <label className="radio-button-container">
              <input type="radio" className="radio-input" />
              <div className="radio-circle-shadow">
                <div className="radio-circle"></div>
              </div>
              <div className="radio-button-text">Maybe, we'll see</div>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default AstvRadio;
