import React, { Component } from 'react';
import { Radio } from 'antd';
import './index.less';

const RadioGroup = Radio.Group;

class RadioButtonGroup extends Component {

  render() {
    const { label, value, onChange } = this.props;

    return (
      <div className="composite-radio-buttons has-label">
        <label className="label">{label}</label>
        <div className="radio-buttons-list">
          <RadioGroup value={value} onChange={e => onChange(e) }>
            { this.props.children }
          </RadioGroup>
        </div>
      </div>
    )
  }
}

export default RadioButtonGroup;
