import React, { Component } from 'react';
import * as _ from 'lodash';
import { observer } from 'mobx-react';
import cssrender from '../runtime/cssRender';
import compRegistrar from '../compUtils/compRegistrar';
import svgFilters from '@packages/coreUtils/core/svgFilters/svgFilters';
import createReactElement from '@packages/coreUtils/core/createReactElement';
import './photo.less';

/**
 * Get the style for the SVG enclosing the filter
 * @returns {{style: {width: (*|number), height: (*|number), left: number, top: number, overflow: string, position: string, visibility: string}}}
 */
function getHelperSvgStyle() {
  return {
      style: {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
          overflow: 'hidden',
          position: 'absolute'
      }
  }
}

/**
 * Get an SVG element attributes
 * @param {object} componentAttributes
 * @param {string} [id]
 * @returns {object}
 */
function getSvgAttributes(componentAttributes, id) {
  id = id || ''
  return _.assign({
      ref: `svg${id}`,
      key: `svg${id}`,
      id: `svg${id}`,
      version: '1.1'
  }, componentAttributes)
}

/**
 * Get the filter svg component
 * @param {string} filterId
 * @param {string} filterName
 * @param {object} [filterOverrides]
 * @returns {*}
 */
function getFilterComponent(filterId, filterName, filterOverrides) {
  return (
      createReactElement('svg', getSvgAttributes(getHelperSvgStyle(), filterId),
          createReactElement('defs', {
              ref: 'defs',
              key: `defs${filterId}`,
              dangerouslySetInnerHTML: {__html: svgFilters.getFilter(filterId, filterName, filterOverrides)}
          })
      )
  )
}

@observer
class Photo extends Component {

  render() {
    const { astm } = this.props;
    const { spec, store: { src, alt } } = astm;
    const { rect: { width, height }, corner, border, shadow, layout, fill } = spec;
    const filterId = fill.filterEffect && `${fill.filterEffect}-${astm.compId}`;
    
    return (
      <div className="ast-image">
        <div className="ast-image-container">
          <div
            className="ast-image-inner" 
            style={cssrender({ layout, rect: { width, height }, corner, border, shadow })}
          >
            { filterId && getFilterComponent(filterId, fill.filterEffect, false) }
            <img alt={alt}
              data-type="image"
              style={cssrender({ rect: { width, height }, fill: { ...fill, ...(filterId ? { filter: filterId } : {}) } })}
              onDragStart={() => { return false }}
              src={src}
            />
          </div>
        </div>
      </div>
    )
  }
}

compRegistrar.register('mila.components.view.Photo', Photo);
