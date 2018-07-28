import React, { Component } from 'react';
import { Icon, Slider, Tabs, Select, InputNumber } from 'antd';

import './index.less';

class InputSlider extends Component {

  render() {
    const { label, value, onChange } = this.props;

    return (
      <div className="input-slider has-label">
        <label className="label">{label}</label>
        <div className="input-slider-container">
          <Slider defaultValue={value}  onChange={v => onChange(v)} />
          <InputNumber
            min={0}
            value={value}
            onChange={v => onChange(v)}
          />
        </div>
      </div>
    )
  }
}

export default InputSlider;
