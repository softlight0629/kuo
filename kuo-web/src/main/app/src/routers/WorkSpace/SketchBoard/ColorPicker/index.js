import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { BlockPicker } from 'react-color';
import { observer, inject } from 'mobx-react';

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
    console.log(color);
    this.props.colorPickerUiStore.onCompleteCallback(color);
  }

  render() {
    return (
      <Rnd
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
        onDragStart={() => false}
      >
        <BlockPicker onChangeComplete={this.handleChangeComplete.bind(this)}/>
      </Rnd>
    )
  }
}

export default ColorPicker;
