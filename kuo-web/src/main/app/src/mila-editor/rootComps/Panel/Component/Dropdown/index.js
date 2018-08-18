import React, { Component } from 'react';
import { Select } from 'antd'
import './index.less';

class DropDown extends Component {

  render() {
    const { label, value, onChange, options } = this.props;

    console.log(options);
    return (
      <div className="dropdown has-label">
        <label className="label">{label}</label>
        <div className="dropdown-container">
          <Select
            size="default"
            defaultValue={value}
            onChange={v => onChange(v) }
            style={{ width: '100%' }}
          >
            {options}
          </Select>
        </div>
      </div>
    )
  }
}

export default DropDown;
