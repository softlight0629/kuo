import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import compClassFactory from '@packages/compUtils/compClassFactory';
import compRegistrar from '@packages/compUtils/compRegistrar';

const CompType = {
  Image: 'mila.components.core.Image',

  BgImage: 'mila.components.background.BgImage',

  BgVideo: 'mila.components.background.BgVideo',
}

class BgMedia extends Component {

  getCompType() {
    return CompType.Image;
  }

  getMediaCompProps(compType) {
    const e = this.props;
    if (compType === CompType.BgImage) {
      return {
        filterEffect: e.filterEffect,
      };
    }

    if (compType === CompType.Image) {
      return {
        key: 'img_' + e.bgEffectName,
        containerWidth: 706,
        containerHeight: 650,
        imageData: e.compData,
        filterEffect: e.filterEffect,
        displayMode: e.fittingType,
        fittingType: e.fittingType,
        alignType: e.alignType,
      }
    }

    if (compType === CompType.BgVideo) {
      return {
        key: "vid_" + e.compData.videoId,
        notifyMediaState: e.notifyMediaState,
        isPlayingAllowed: e.isPlayingAllowed,
        setMediaAPI: e.setMediaAPI,
        mediaQuality: e.mediaQuality,
        format: e.playbackFormat,
        config: e.playbackConfig,
        playbackUrl: e.playbackUrl,
        videoRenderParts: e.renderParts.media.video,
        compProp: e.compProp
      }
    }
  }

  getMediaComponent() {
    const compType = this.getCompType();
    const compProps = this.getMediaCompProps(compType);

    return compClassFactory.createRRChildComponent(compType, compProps);
  }

  render() {
    const style = _.assign({}, this.props.style, {
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
    });

    return (
      <div className="bg-media" style={style}>
        {this.getMediaComponent()}
      </div>
    )
  }
}

BgMedia.propTypes = {
  compData: PropTypes.object.isRequired,
  alignType: PropTypes.string,
  fittingType: PropTypes.string,
  mediaTransfroms: PropTypes.object,
  bgEffectName: PropTypes.string,
  style: PropTypes.object,
  enableVideo: PropTypes.bool,
  mediaQuality: PropTypes.string,
}

compRegistrar.register('mila.components.background.BgMedia', BgMedia);

export default BgMedia;
