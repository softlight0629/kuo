import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './index.less';

@observer
class AstvRadio extends Component {

  render() {
    const { store } = this.props.astm;
    const { radioBtns } = store;
    return (
      <div className="ast-radio">
        <div className="radio-items">
          {
            radioBtns.map(radioBtn => (
              <div className="radio-button">
                <label className="radio-button-container">
                  <input type="radio" className="radio-input" />
                  <div className="radio-circle-shadow">
                    <div className="radio-circle"></div>
                  </div>
                  <div className="radio-button-text">{radioBtn.label}</div>
                </label>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default AstvRadio;
