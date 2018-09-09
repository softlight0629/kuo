import * as _ from 'lodash';
import createReactElement from '@packages/coreUtils/core/createReactElement';
// import imageClientLib from '@packages-bin/image-client-api/imageClientApi';
import svgFilters from '@packages/coreUtils/core/svgFilters/svgFilters'

function reportBIfunc() {}

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

function getValidFilterName(filterEffect, reportBIfunc) {
  let name = ''
  if (filterEffect && filterEffect.effectType !== 'none') {
    if (svgFilters.isFilterExists(filterEffect.effectType)) {
      name = filterEffect.effectType
    }
  }
  return name
}

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

function getSvgImageAttributes(id, dataType, filterId, maskId, patternId) {
  const attributes = {
      id: `${id}image`,
      ref: 'image',
      key: 'image',
      'data-type': dataType
  }

  if (patternId) {
      attributes.fill = `url(#${patternId})`
  }
  if (maskId) {
      attributes.mask = `url(#${maskId})`
      attributes['data-svg-mask'] = `${maskId}-svg`
  }
  if (filterId) {
      attributes.filter = `url(#${filterId})`
  }

  return attributes
}

function replaceSVGMaskAttributes(svgString, svgId) {
  const svgTagMatch = svgString.match(/<svg[^>]*>/)

  if (svgTagMatch) {
      let svgTag = svgTagMatch[0]
      const idMatch = svgTag.match(/id="[-\w]+"/)
      const aspectRatioMatch = svgTag.match(/preserveAspectRatio="[-\w\s]+"/)

      if (aspectRatioMatch) {
          svgTag = svgTag.replace(aspectRatioMatch[0], 'preserveAspectRatio="none"')
      } else {
          svgTag = svgTag.replace('<svg ', '<svg preserveAspectRatio="none" ')
      }

      if (idMatch) {
          svgTag = svgTag.replace(idMatch[0], `id="${svgId}"`)
      } else {
          svgTag = svgTag.replace('<svg ', `<svg id="${svgId}" `)
      }

      svgString = svgString.replace(svgTagMatch[0], svgTag)
  }

  return svgString
}

function getImageAttributes(id, dataType, imageTransformObject, filterId, altText) {
  const styleFilter = filterId ? getCssStyleForFilterUse(filterId) : {}
  const attributes = {
      id: `${id}image`,
      ref: 'image',
      key: `image${filterId}`,
      style: styleFilter,
      alt: altText,
      'data-type': dataType,
      itemProp: imageTransformObject.itemProp,
      'aria-labelledby': imageTransformObject.labelledById,
      'aria-describedby': imageTransformObject.describedById
  }

  return _.omitBy(attributes, _.isUndefined)
}

function getSvgAttributes(componentAttributes, id) {
  id = id || ''
  return _.assign({
      ref: `svg${id}`,
      key: `svg${id}`,
      id: `svg${id}`,
      version: '1.1'
  }, componentAttributes)
}

function getCssStyleForFilterUse(filterId) {
  return {
      WebkitFilter: `url(#${filterId})`,
      filter: `url(#${filterId})`,
      // Override a Webkit bug where filter not applied on image in 3d context
      // Bug reported and resolved, https://bugs.webkit.org/show_bug.cgi?id=154108, still here for legacy reasons.
      outline: '1px solid transparent'
  }
}

function createReactImage(id, imageTransformObject, filterId, altText) {
  const imageAttributes = getImageAttributes(id, 'image', imageTransformObject, filterId, altText)
  return createReactElement('img', imageAttributes)
}

// function createReactSvgImageWithMask(id, imageTransformObject, filterId, maskId, maskData, altText) {
//   const imageAttributes = getSvgImageAttributes(id, 'image', filterId, maskId)
//   const containerAttributes = _.get(imageTransformObject, ['attr', 'container'], {})
//   const svgImageAttributes = getSvgAttributes(_.assign({
//       role: 'img',
//       'aria-label': altText
//   }, containerAttributes), id)
//   const svgDomId = `${maskId}-svg`
//   const svgStringWithId = replaceSVGMaskAttributes(maskData.svgString, svgDomId)
//   const maskAttrs = {
//       width: '100%',
//       height: '100%',
//       x: 0,
//       y: 0
//   }

//   return createReactElement('svg', svgImageAttributes, [
//       createReactElement('defs', {
//           key: `defs-${id}`,
//           dangerouslySetInnerHTML: {
//               __html: coreUtilsLib.svgMask.getMask(maskId, `${svgDomId}`, svgStringWithId, maskAttrs, true)
//           }
//       }),
//       createReactElement('image', imageAttributes)
//   ])
// }

function createReactSvgImage(id, imageTransformObject, filterId, altText) {
  const imageAttributes = getSvgImageAttributes(id, 'image', filterId)
  const containerAttributes = _.get(imageTransformObject, ['attr', 'container'], {})
  const svgImageAttributes = getSvgAttributes(_.assign({
      role: 'img',
      'aria-label': altText
  }, containerAttributes), id)
  return createReactElement('svg', svgImageAttributes, createReactElement('image', imageAttributes))
}

function getImageComponent(imageTransformObject, altText, isSvgFallback, ids, maskData, imageTransformHook) {
  const { id, filterId, patternId, maskId } = ids;

  // if (_.isFunction(imageTransformHook)) {
  //   imageTransformHook(imageTransformObject);
  // }

  // if (maskData && maskData.svgString) {
  //   return createReactSvgImageWithMask(id, imageTransformObject, filterId, maskId, maskData, altText);
  // }

  // if (isSvgFallback) {
  //   return createReactSvgImage(id, imageTransformObject, filterId, altText)
  // }

  return createReactImage(id, imageTransformObject, filterId, altText);
}

function getImageComponents(imageCompProps, altText, isSvgFallback, imageTransformHook) {
  let filterComp;
  let patternComp;

  const imageInfo = _.pick(imageCompProps, [
    'imageData', 'containerWidth', 'containerHeight', 'fittingType', 'alignType', 'quality',
    'displayMode', 'addItemProp', 'itemProp', 'labelledById', 'describedById'
  ]);

  const fittingType = imageInfo.fittingType || imageInfo.displayMode
  const id = imageCompProps.id;
  const filterEffect = imageCompProps.filterEffect;
  const getMediaFullStaticUrl = imageCompProps.getMediaFullStaticUrl;
  const currentUrl = imageCompProps.currentUrl;
  const devicePixelRatio = imageCompProps.devicePixelRatio;
  const validEffectName = getValidFilterName(filterEffect, reportBIfunc);
  const shouldUsePattern = isSvgFallback && fittingType === 'tile';
  const transformType = isSvgFallback ? 'svg' : 'img';
  const imageTransformObject = {};

  const maskData = imageCompProps.maskData;
  const maskId = maskData && maskData.svgString && `mask-${id}`;
  const filterId = validEffectName && `${validEffectName}-${id}`;
  const patternId = shouldUsePattern && `pattern-${id}`;

  const comps = [];

  if (filterId) {
    filterComp = getFilterComponent(filterId, validEffectName);
    comps.push(filterComp);
  }

  const imageComp = getImageComponent(imageTransformObject, altText, isSvgFallback, { id, filterId, patternId, maskId }, maskData, imageTransformHook);

  if (_.isEmpty(comps)) {
    return imageComp;
  }

  comps.push(imageComp);
  return comps;
}

export default {
  getImageComponents,
  getFilterComponent,
  getValidFilterName,
}
