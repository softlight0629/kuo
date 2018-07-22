import React, { Component } from 'react';
import { Checkbox } from 'antd';

class CheckboxGroup extends Component {

  render() {
    const { label } = this.props;
    return (
      <div className="composite-checkboxes has-label">
        <label className="label">{label}</label>
        <div className="checkbox-list">

          { this.props.children }
        </div>
      </div>
    )
  }
}

export default CheckboxGroup;
