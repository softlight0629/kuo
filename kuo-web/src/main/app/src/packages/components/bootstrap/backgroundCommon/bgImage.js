import React, { Component } from 'react';
import * as _ from 'lodash';
import imageCommon from '@packages/core/components/imageCommon/imageCommon';
import compRegistrar from '@packages/compUtils/compRegistrar';

const imageElements = imageCommon.imageElements;

class BgImage extends Component {

  render() {
    const style = {
      position: 'absolute',
      width: '100%',
    };

    if (_.isNumber(this.props.compData.opacity)) {
      style.opacity = this.props.compData.opacity;
    }

    const filterName = imageElements.getValidFilterName(this.props.filterEffect);
    if (filterName) {
      const filterId = this.props.id + '_' + filterName;
      const filterComponent = imageElements.getFilterComponent(filterId, filterName);
      _.assign(style, imageElements.getCssStyleForFilterUse(filterId));
    }

    return (
      <div style={{ width: '100%'}}>
        <img />
      </div>
    )
  }
}

compRegistrar.register('mila.components.background.BgImage', BgImage);

export default BgImage;
