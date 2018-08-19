import React, { Component } from 'react';
import * as _ from 'lodash';
import gfppData from '@packages/gfppData/gfppData';
import gfppButtonGenerator from './gfppButtonGenerator';
import mapToProps from './gfppMapper';
import './gfpp.less';

class Gfpp extends Component {

  // getButtons() {
  //   const compGfppData = gfppData.getComponentData(this.props.selectedComponent.kind);
  //   return compGfppData;
  // }

  stopEventPropagation(e) {
    e.stopPropagation();
  }

  repeatButton(button, index) {
    return React.createElement(gfppButtonGenerator, _.assign({}, {
      key: button.icon || button.label || button.tooltip,
    }, button, { rtStore: this.props.rtStore}));
  }

  render() {
    const { rtStore } = this.props;
    const { buttons } = mapToProps(rtStore, this.props.compRef);

    return (
      <ul
        id="gfpp"
        ref="gfpp"
        className="gfpp"
        onMouseDown={this.stopEventPropagation}
        onMouseUp={this.stopEventPropagation}
        onDoubleClick={this.stopEventPropagation}
        onContextMenu={this.stopEventPropagation}
        onMouseMove={this.stopEventPropagation}
        onClick={this.stopEventPropagation}
      >
      { _.map(buttons, this.repeatButton.bind(this)) }
      </ul>
    )
  }
}

export default Gfpp;
