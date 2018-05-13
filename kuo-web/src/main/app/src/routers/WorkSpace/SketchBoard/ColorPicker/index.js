import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { BlockPicker } from 'react-color';
import { Icon } from 'antd';
import { observer, inject } from 'mobx-react';

import './index.less';

@inject('colorPickerUiStore')
@observer
class ColorPicker extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      x: 100,
      y: 100,
    }
  }

  handleChangeComplete = (color) => {
    this.props.colorPickerUiStore.onCompleteCallback(color);
  }

  close() {
    this.props.colorPickerUiStore.close();
  }

  render() {
    return (
      <Rnd
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
        onDragStart={() => false}
        dragHandleClassName=".color-picker-header"
      >
        <div className="color-picker">
          <div className="color-picker-header">
            <span className="title">Color Picker</span>
            <span className="close-btn" onClick={() => this.close()}>
              <Icon type="close" />
            </span>
          </div>
          <div className="color-picker-body">
            <BlockPicker onChangeComplete={this.handleChangeComplete.bind(this)}/>
          </div>
        </div>
        
      </Rnd>
    )
  }
}

export default ColorPicker;
