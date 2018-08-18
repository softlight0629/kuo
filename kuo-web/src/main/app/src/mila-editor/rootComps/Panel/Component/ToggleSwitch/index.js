import React, { Component } from 'react';
import { Switch } from 'antd';

import './index.less';

class ToggleSwitch extends Component {

  render() {
    const { label, checked = false, onChange } = this.props;

    return (
      <div className="composite-toggle-switch">
        <div className="composite-toggle-switch-inner">
          <label className="label">{label}</label>
          <Switch checked={checked} onChange={v => onChange(v)}/>
        </div>
      </div>
    )
  }
}

export default ToggleSwitch;
