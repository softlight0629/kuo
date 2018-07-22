import React, { Component } from 'react';
import { Switch } from 'antd';

class ToggleSwitch extends Component {

  render() {
    const { label } = this.props;

    return (
      <div className="composite-toggle-switch">
        <div className="composite-toggle-switch-inner">
          <label className="label">{label}</label>
          <Switch defaultChecked />
        </div>
      </div>
    )
  }
}

export default ToggleSwitch;
