import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

@inject('colorPickerUiStore')
@observer
class ColorPicker extends Component {

  showColorPicker(cb) {
    this.props.colorPickerUiStore.show();
    this.props.colorPickerUiStore.callback(cb);
  }

  render() {
    const { label, value, onChange } = this.props;
    return (
      <div className="color-picker-input has-label" onClick={() => this.showColorPicker((color) => onChange(color))}>
        <label className="label">{label}</label>
        <div className="color-picker-wrapper">
          <div className="color-picker-color" style={{ backgroundColor: value }}></div>
        </div>
      </div>
    )
  }
}

export default ColorPicker;
