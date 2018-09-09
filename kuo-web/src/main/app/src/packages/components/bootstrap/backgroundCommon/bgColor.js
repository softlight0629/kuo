import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compRegistrar from '@packages/compUtils/compRegistrar';

class BgColor extends Component {

  render() {
    const style = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: this.props.color,
    }
    return (
      <div className="bg-color" style={style}>
        <div className="bg-color-overlay" style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}></div>
      </div>
    )
  }
}

BgColor.propTypes = {
  color: PropTypes.string.isRequired,
  opacity: PropTypes.number,
}

compRegistrar.register('mila.components.background.BgColor', BgColor);

export default BgColor;
