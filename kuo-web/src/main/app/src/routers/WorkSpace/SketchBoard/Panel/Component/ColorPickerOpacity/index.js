import React, { Component } from 'react';
import { Icon, Slider, Tabs, Select, InputNumber } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

@withRouter
@inject('colorPickerUiStore')
@observer
class ColorPickerOpacity extends Component {

  showColorPicker(cb) {
    this.props.colorPickerUiStore.show();
    this.props.colorPickerUiStore.callback(cb);
  }

  render() {
    const { label, onOpacityChange, opacity, onColorChange, color } = this.props;

    return (
      <div className="color-picker-input-with-opacity">
        <label className="label">{label}</label>
        <div className="color-picker-input-with-opacity-slider">
          <div className="input-slider">
            <div className="input-slider-container">
              <Slider defaultValue={opacity} onChange={v => onOpacityChange(v)} />
              <InputNumber
                min={0}
                value={opacity}
                onChange={v => onOpacityChange(v) }
              />
            </div>
          </div>
          <div className="color-picker-input" onClick={() => this.showColorPicker(color => onColorChange(color))}>
            <div className="color-picker-wrapper">
              <div className="color-picker-color" style={{ backgroundColor: color, opacity: opacity / 100 }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPickerOpacity;
