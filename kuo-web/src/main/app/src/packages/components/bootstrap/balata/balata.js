import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compRegistrar from '@packages/compUtils/compRegistrar';
import imageCommon from '@packages/core/components/imageCommon/imageCommon';
import imageCompProps from '@app/data/imageCompProps';
import compClassFactory from '@packages/compUtils/compClassFactory';

import './balata.less';

class Balata extends Component {

  getBgOverlayComponent() {}
  
  getMediaComponent() {}

  getBgComponent() {
    const { type } = this.props;

    if (type === 'Color') {
      return compClassFactory.createRRChildComponent('mila.components.background.BgColor', {
        color: this.props.color,
      });
    }

    return compClassFactory.createRRChildComponent('mila.components.background.BgMedia', {
      displayMode: "fill",
      filterEffect: null,
      compData: this.props.compData,
      type: this.props.type,
      maskData: {
        svgString: ""
      },
    })
  }

  render() {
    return (
      <div className="comp-balata">
        {
          this.getBgComponent()
        }
      </div>
    )
  }
}

Balata.propTypes = {
  compData: PropTypes.object,
  compDesign: PropTypes.object,
  compProp: PropTypes.object,
  color: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,

  enableVideo: PropTypes.bool,
  mediaQuality: PropTypes.string,
}

compRegistrar.register('mila.view.components.background.Balata', Balata);

export default Balata;
