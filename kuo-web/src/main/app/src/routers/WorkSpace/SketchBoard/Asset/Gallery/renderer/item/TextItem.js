import React, { Component } from 'react';

class TextItem extends Component {

  componentWillMount() {

  }

  getTextDimensions() {

  }

  render() {
    const {
      visible,
      id,
      styleParams,
      html,
      style,
      actions,
    } = this.props;

    const dimensions = this.getTextDimensions();
    const styleIsDimensions = {
      style: {
        dimensions,
      },
    };
    const changeBgColor = {
      style: Object.assign(dimensions, styleParams.cubeType === 'fit' ? { backgroundColor: style.bgColor } : {})
    };
    const show = visible ? _.extend({}, changeBgColor) : _.extend({}, styleIsDimensions);
    const attributes = show ? _.extend({}, changeBgColor) : _.extend({}, styleIsDimensions);

    return (
      <div
        className="gallery-item-visible gallery-item loaded text-item"
        key={`item-text-${id}`}
        onTouchStart={actions.handleItemMouseDown}
        onTouchEnd={actions.handleItemMouseUp}
        data-hook="text-item"
        {...attributes}
      >
      </div>
    )
  }
}

export default TextItem;
