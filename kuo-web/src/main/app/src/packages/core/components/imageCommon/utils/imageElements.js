import * as _ from 'lodash';
import createReactElement from '@packages/coreUtils/core/createReactElement';
import imageClientApi from '@packages-bin/image-client-api/imageClientApi';
import imageUtils from '@packages-bin/image-utils/imageUtils';
import urlUtils from '@packages/coreUtils/core/urlUtils';

function getCssStyleForFilterUse(filterId) {
  return {
    WebkitFilter: `url(#${filterId})`,
    filter: `url(#${filterId})`,
    // Override a Webkit bug where filter not applied on image in 3d context
    // Bug reported and resolved, https://bugs.webkit.org/show_bug.cgi?id=154108, still here for legacy reasons.
    outline: '1px solid transparent'
  }
}

function getImageAttributes(id, dataType, imageTransformObject, filterId, altText) {
  const styleFilter = filterId ? getCssStyleForFilterUse(filterId) : {};
  const attributes = {
    id: `${id}image`,
    ref: 'image',
    key: `image${filterId}`,
    style: styleFilter,
    alt: altText,
    'data-type': dataType,
    src: imageTransformObject.uri,
    itemProp: imageTransformObject.itemProp,
    'aria-labelledby': imageTransformObject.labelledById,
    'aria-describedby': imageTransformObject.describedById,
  };

  return _.omitBy(attributes, _.isUndefined);
}

function createReactImage(id, imageTransformObject, filterId, altText) {
  const imageAttributes = getImageAttributes(id, 'image', imageTransformObject, filterId, altText);
  return createReactElement('img', imageAttributes);
}

function getImageComponent(imageTransformObject, altText, isSvgFallback, ids) {
  const { id } = ids;

  return createReactImage(id, imageTransformObject);
}

function getImageComponents(imageCompProps, altText, isSvgFallback) {
  const imageInfo = _.pick(imageCompProps, [
    'imageData', 'containerWidth', 'containerHeight', 'fittingType', 'alignType', 'quality',
    'displayMode', 'addItemProp', 'itemProp', 'labelledById', 'describedById'
  ]);

  function getMediaFullStaticUrl(imgRelativeUrl) {
    const mediaRootUrl = 'https://static.wixstatic.com';
    const mediaStaticUrl = 'https://static.wixstatic.com/media';

    return urlUtils.getMediaUrlByContext(imgRelativeUrl, mediaStaticUrl, mediaRootUrl);
  }

  const fittingType = imageInfo.fittingType || imageInfo.displayMode;
  const id = imageCompProps.id;
  const filterEffect = imageCompProps.filterEffect;
  // const getMediaFullStaticUrl = imageCompProps.getMediaFullStaticUrl;
  const currentUrl = imageCompProps.currentUrl;
  const devicePixelRatio = imageCompProps.devicePixelRatio;
  const transformType = isSvgFallback ? 'svg' : 'img';
  const imageTransformObject = imageUtils.getImageComputedProperties(imageClientApi, imageInfo, getMediaFullStaticUrl, currentUrl, devicePixelRatio, transformType);

  const comps = [];

  const imageComp = getImageComponent(imageTransformObject, altText, isSvgFallback, { id });

  if (_.isEmpty(comps)) {
    return imageComp;
  }
  comps.push(imageComp);
  return comps;
}


export default {
  getImageComponents,
}
