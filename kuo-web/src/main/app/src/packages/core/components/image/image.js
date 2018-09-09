import React, { Component } from 'react';
import * as _ from 'lodash';
import imageCommon from '../imageCommon/imageCommon';
import compRegistrar from '@packages/compUtils/compRegistrar';

const imageElements = imageCommon.imageElements;

class Image extends Component {

  hasEffect() {}

  render() {
    const altText = _.get(this, 'props.imageData.alt', '');
    const isSvgfallbackForFilters = this.hasEffect() && !this.props.cssFiltersSupported;

    const style = {
      position: 'relative',
      width: '',
      height: '',
    }
    return (
      <div className="wp2img" style={style}>
        { imageElements.getImageComponents(this.props, altText, isSvgfallbackForFilters) }
      </div>
    )
  }
}

compRegistrar.register('mila.components.core.Image', Image);
export default Image;
