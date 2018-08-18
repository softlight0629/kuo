import * as _ from 'lodash';
import React, { Component } from 'react';
import svgFilters from '@packages/coreUtils/core/svgFilters/svgFilters';

function mergeProps(inline, external) {
  var res = _.assign({}, inline, external);
  if (inline.hasOwnProperty('style')) {
      res.style = _.defaults(res.style, inline.style);
  }
  if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
      res.className = external.className + ' ' + inline.className;
  }
  return res;
}

function svgImageTemplate({ src, x, y, width, height, transform, preserveAspectRatio, filter, mask }) {
  filter = filter ? ` filter="${filter}"` : '';
  mask = mask ? ` mask="${mask}"` : '';
  return `<image xlink:href="${src}" x="${x}" y="${y}" width="${width}" height="${height}" transform="${transform}" preserveAspectRatio="${preserveAspectRatio}"${filter}${mask}/>`;
}

class UiImage extends Component {

  filterId: ''
  effectName: ''
  imageHtmlTag: 'img'

  constructor(props) {
    super(props);
    const effectName = _.get(this.props.imageData, 'effectName', 'none');

    if (effectName !== 'none') {
      this.effectName = effectName;
      this.filterId = `filter_${_.uniqueId()}`;
      this.imageHtmlTag = 'svg';
    }

    this.state = {
      imageUrl: '',
    }
  }

  getSvgStyle() {
    return {
      width: this.props.imageWidth,
      height: this.props.imageHeight,
      left: 0,
      top: 0,
      overflow: 'hidden',
      position: 'absolute'
    };
  }

  getFilterDefinition() {
    return this.filterId ? svgFilters.getFilter(this.filterId, this.effectName) : '';
  }

  getContainerStyle(baseStyle) {
    return _.assign({}, this.props.style || {}, baseStyle);
  }

  getImageStyle(baseStyle) {
    if (this.effectName) {
      return _.assign({
        WebkitFilter: this.filterId ? `url(#${this.filterId})` : '',
        filter: this.filterId ? `url(#${this.filterId})` : ''
      }, baseStyle);
    }
    return baseStyle;
  }

  getLegacySvgStyle() {
    return _.assign({
        width: Math.round(this.props.imageWidth),
        height: Math.round(this.props.imageHeight)
    });
  }

  getImageProps() {
    return {
      width: this.props.imageWidth,
      height: this.props.imageHeight,
      transfrom: '',
      preserveAspectRatio: 'xMidyMid slice',
      x: 0,
      y: 0,
    }
  }

  getLegacySvgInnerHtml() {
    const defs = `<defs>${this.getFilterDefinition()}</defs>`;
    const imageTemplateObj = _.assign({
        filter: this.filterId && `url(#${this.filterId})`,
        src: 'https://static.wixstatic.com/media/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.jpg/v1/fill/w_144,h_144,al_c,lg_1,q_80/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.webp',
    }, this.getImageProps());
    const image = svgImageTemplate(imageTemplateObj);
    const crop = this.props.crop;

    return `${defs}${image}`;
  }

  getLegacyKey(imageProps) {
    return `svg_type_svg111`;
  }

  render() {
    const imageTemplateObj = _.assign({
      filter: this.filterId && `url(#${this.filterId})`,
      src: 'https://static.wixstatic.com/media/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.jpg/v1/fill/w_144,h_144,al_c,lg_1,q_80/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.webp',
    })

    console.log(imageTemplateObj, this.imageHtmlTag);

    return (
      <div
        style={this.getContainerStyle(this.props.containerStyle)}
      >
        {this.imageHtmlTag === 'img ' && (
          <img key="image_type_img" src={this.props.imageData.src} style={this.getImageStyle(this.props.imgStyle)} />
        )}
        {this.imageHtmlTag === 'svg' && (
          React.createElement('svg', mergeProps({
            'key': this.getLegacyKey(),
            'version': '1.1',
            'xmlns': 'http://www.w3.org/2000/svg',
            'xmlnsXlink': 'http://www.w3.org/1999/xlink',
            'style': this.getLegacySvgStyle(),
            'dangerouslySetInnerHTML': { __html: this.getLegacySvgInnerHtml() }
          }))
        )}
      </div>
    )
  }
} 

export default UiImage;
