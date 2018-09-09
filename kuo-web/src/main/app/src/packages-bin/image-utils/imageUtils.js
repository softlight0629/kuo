import * as _ from 'lodash';
import imageAnalyzer from './imageAnalyzer';

function getDevicePixelRatio(currentUrl, devicePixelRatio) {
    //we should be able to force devicePixelRatio from url by using the query param -
    var query = _.get(currentUrl, 'query', {});
    var devicePixelRatioQueryParam = _.chain(query).keys().find(function (key) {
        return _.includes(['devicepixelratio'], key.toLowerCase());
    });
    var devicePixelRatioValueForceFromUrl = Number(query[devicePixelRatioQueryParam]);
    return devicePixelRatioValueForceFromUrl || devicePixelRatio || 1;
}

/**
 * Get image full path and css from imageServices
 * @param {object} imageInfo
 * @param {object} imageInfo.imageData
 * @param {number} imageInfo.containerWidth
 * @param {number} imageInfo.containerHeight
 * @param {string} [imageInfo.fittingType]
 * @param {string} [imageInfo.alignType]
 * @param {string} [imageInfo.quality]
 * @param {string} [imageInfo.displayMode]
 * @param {function} getMediaFullStaticUrl
 * @param {object} currentUrl
 * @param {number} devicePixelRatio
 * @param {string} [htmlTag='img']
 * @returns {Object}
 */
function getImageComputedProperties(imageClientApi, imageInfo, getMediaFullStaticUrl, currentUrl, devicePixelRatio, htmlTag) {
    //todo: CLNT-5323 , wixapp sildergallery proxy is generating image data without uri
    if (!imageInfo.containerWidth || !imageInfo.containerHeight || !imageInfo.imageData.uri) {
        return { uri: '', css: {} };
    }
    var imageData = imageInfo.imageData;
    var fittingType = imageInfo.displayMode || imageClientApi.fittingTypes.SCALE_TO_FILL;
    var imageOptions = _.assign(_.pick(imageData, ['upscaleMethod']), imageInfo.quality || imageData.quality);

    devicePixelRatio = getDevicePixelRatio(currentUrl, devicePixelRatio);

    var src = _.assign(_.pick(imageData, ['width', 'height', 'crop', 'name']), { id: imageData.uri });
    var target = {
        width: imageInfo.containerWidth,
        height: imageInfo.containerHeight,
        htmlTag: htmlTag || 'img',
        pixelAspectRatio: devicePixelRatio,
        alignment: imageInfo.alignType || imageClientApi.alignTypes.CENTER
    };

    var imageComputedProperties = imageClientApi.getData(fittingType, src, target, imageOptions);
    imageComputedProperties.uri = getMediaFullStaticUrl(imageComputedProperties.uri);
    if (imageData.itemProp || imageInfo.addItemProp) {
        imageComputedProperties.itemProp = imageData.itemProp || 'image';
    }

    if (_.has(imageInfo, 'labelledById')) {
        imageComputedProperties['aria-labelledby'] = imageInfo.labelledById;
    }

    if (_.has(imageInfo, 'describedById')) {
        imageComputedProperties['aria-describedby'] = imageInfo.describedById;
    }

    return imageComputedProperties;
}

/**
 * Get the size to be set for a containing component (when it's mutable), after taking the image's display mode into account
 *
 * @deprecated Please use imageClientApi if possible
 *
 * @param imageClientApi
 * @param containerOriginalSize {{width: number, height: number}}
 * @param {{width: number, height: number}} originalImageSize  the original image size (e.g. image data)
 * @param displayMode
 * @returns {{width: number, height: number}} the containing element correct size
 */
function getContainerSize(imageClientApi, containerOriginalSize, originalImageSize, displayMode) {
    var imageProportion = originalImageSize.width / originalImageSize.height;
    var containerSize = void 0;
    var exactWidth = void 0;
    var exactHeight = void 0;
    var isFitWidth = displayMode === imageClientApi.fittingTypes.LEGACY_FIT_WIDTH;
    var isFitHeight = displayMode === imageClientApi.fittingTypes.LEGACY_FIT_HEIGHT;

    if (isFitWidth) {
        exactHeight = containerOriginalSize.width / imageProportion;
        containerSize = getRoundedSize(containerOriginalSize.width, exactHeight);
    } else if (isFitHeight) {
        exactWidth = containerOriginalSize.height * imageProportion;
        containerSize = getRoundedSize(exactWidth, containerOriginalSize.height);
    } else {
        containerSize = _.clone(containerOriginalSize);
    }

    return containerSize;
}

/**
 * @private
 * @param exactWidth
 * @param exactHeight
 * @returns {{width: number, exactWidth: *, height: number, exactHeight: *}}
 */
function getRoundedSize(exactWidth, exactHeight) {
    return {
        width: Math.ceil(exactWidth),
        exactWidth: exactWidth,
        height: Math.ceil(exactHeight),
        exactHeight: exactHeight
    };
}

/**
 * @class imageCommon.imageUtils
 */
export default {
    getContainerSize: getContainerSize,
    getImageComputedProperties: getImageComputedProperties,
    getImageMeanBrightness: imageAnalyzer.getImageMeanBrightness
};
//# sourceMappingURL=imageUtils.js.map
