import React, { Component } from 'react';
import cssrender from '../../../../helper/cssrender';
import './index.less';

class AstvSwitch extends Component {

  render() {
    const { astm } = this.props;
    const { spec, store: { text }, meta } = astm;
    
    return (
      <div className="ast-switch" style={cssrender(spec)}>
        <div className="switch-root">
          <label className="switch-root-inner">
            <input type="checkbox" className="switch-input"/>
            <div className="outer-label"></div>
            <div className="inner-label"></div>
          </label>
        </div>
      </div>
    )
  }
}

export default AstvSwitch;
