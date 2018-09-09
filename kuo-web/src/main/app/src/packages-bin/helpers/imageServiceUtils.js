import utils from './utils';
import constants from './imageServiceConstants';
import globalFeatureSupportObject from './imageServiceFeatureSupportObject';

/**
 * Check once for browser support and store on global features support object
 * https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_using_javascript
 */
function checkWEBPSupport(type) {
    const webpTypes = {
        lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
        lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
        alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
        animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
    }

    const webpImg = new window.Image()
    webpImg.onload = function () {
        const isWebpFeature = globalFeatureSupportObject.getFeature('isWEBP')
        isWebpFeature[type] = webpImg.width > 0 && webpImg.height > 0
        globalFeatureSupportObject.setFeature('isWEBP', isWebpFeature)
    }

    webpImg.src = `data:image/webp;base64,${webpTypes[type]}`
}

/**
 * Populate the global feature support object with browser specific values
 */
function populateGlobalFeatureSupport() {
    if (typeof window !== 'undefined') {
        // jpg 2 webp
        checkWEBPSupport(constants.webp.LOSSY)
        // png 2 webp
        checkWEBPSupport(constants.webp.LOSSLESS)
        checkWEBPSupport(constants.webp.ALPHA)
        // 2 animation
        checkWEBPSupport(constants.webp.ANIMATION)

        // objectfit support
        globalFeatureSupportObject.setFeature('isObjectFitBrowser', isPropertySupported('objectFit'))
    }
}

/**
 * check if the browser supports webp image display
 * for the image source type
 * @param {string}    fileType
 *
 * @returns {boolean}
 */
function isWEBPBrowserSupport(fileType) {
    const isWebpFeature = globalFeatureSupportObject.getFeature('isWEBP')
    const isLosssyJPG = fileType === constants.fileType.JPG && isWebpFeature[constants.webp.LOSSY]
    const isLosslessPNG = fileType === constants.fileType.PNG && isWebpFeature[constants.webp.LOSSLESS]
    const isAlphaPNG = fileType === constants.fileType.PNG && isWebpFeature[constants.webp.ALPHA]

    return isLosssyJPG || isLosslessPNG && isAlphaPNG
}

/**
 * check if the browser supports ObjectFit css attribute
 *
 * @returns {boolean}
 */
function isObjectFitBrowserSupport() {
    return globalFeatureSupportObject.getFeature('isObjectFitBrowser')
}

/**
 * returns if a css property is supported
 * @param property
 *
 * @returns {boolean}
 */
function isPropertySupported(property) {
    return property in window.document.documentElement.style
}

/**
 * checks if image type is supported
 * @param {string}     uri      image source uri
 *
 * @returns {boolean}
 */
function isImageTypeSupported(uri) {
    const supportedImageExtensions = [
        constants.fileType.PNG,
        constants.fileType.JPEG,
        constants.fileType.JPG,
        constants.fileType.WIX_ICO_MP,
        constants.fileType.WIX_MP
    ]
    return utils.includes(supportedImageExtensions, getFileExtension(uri))
}

/**
 * check request integrity
 * @param {string}                  fittingType         imageService.fittingTypes
 * @param {ImageTransformSource}    src
 * @param {ImageTransformTarget}    target
 *
 * @returns {boolean}
 */
function isValidRequest(fittingType, src, target) {
    return target && (src && !isUrlEmptyOrNone(src.id)) && utils.includes(constants.fittingTypes, fittingType)
}

/**
 * check if image transform is supported for source image
 * @param {string}     uri
 *
 * @returns {boolean}
 */
function isImageTransformApplicable(uri) {
    return isImageTypeSupported(uri) && !isExternalUrl(uri)
}

/**
 * returns true if image is of JPG type
 * @param {string}  uri
 *
 * @returns {boolean}
 */
function isJPG(uri) {
    return utils.includes(['jpg', 'jpeg'], getFileExtension(uri))
}

/**
 * returns true if image is of PNG type
 * @param {string}  uri
 *
 * @returns {boolean}
 */
function isPNG(uri) {
    return utils.includes(['png'], getFileExtension(uri))
}

/**
 * returns true if image is of webP type
 * @param {string}  uri
 *
 * @returns {boolean}
 */
function isWEBP(uri) {
    return utils.includes(['webp'], getFileExtension(uri))
}

/**
 * returns true if the url starts with http, https, // or data
 * @param {string}  url
 *
 * @returns {boolean}
 */
function isExternalUrl(url) {
    return (/(^https?)|(^data)|(^\/\/)/).test(url)
}

/**
 * returns true if the url empty or none string
 * @param {string}  url
 *
 * @returns {boolean}
 */
function isUrlEmptyOrNone(url) {
    return !url || !url.trim() || url.toLowerCase() === 'none'
}

/**
 * returns source image file name (no extension)
 * @param {string}     uri      image source uri
 * @param {string}     [name]   optional image source name
 *
 * @returns {string}
 */
function getFileName(uri, name) {
    const beforeLeadingSlashRegexp = /\/(.*?)$/
    const fileExtensionRegexp = /\.([^.]*)$/

    // if name is a non empty string, remove only supported extension if exists and url encode the string
    if (typeof name === 'string' && name.length) {
        let fileName = name
        const extension = name.match(fileExtensionRegexp)
        if (extension && utils.includes(constants.supportedExtensions, extension[1])) {
            fileName = name.replace(fileExtensionRegexp, '')
        }
        return encodeURIComponent(fileName)
    }

    // else, trim any preceding media structure from the uri string (like "media/" etc.) and remove extension
    const trimmed = uri.match(beforeLeadingSlashRegexp)
    const fileName = trimmed ? trimmed[1] : uri
    return fileName.replace(fileExtensionRegexp, '')
}

/**
 * returns source image file name (no extension)
 * @param {string}     uri      image source uri
 *
 * @returns {string}
 */
function getFileType(uri) {
    if (isJPG(uri)) {
        return constants.fileType.JPG
    } else if (isPNG(uri)) {
        return constants.fileType.PNG
    } else if (isWEBP(uri)) {
        return constants.fileType.WEBP
    }
    return constants.fileType.UNRECOGNIZED
}

/**
 * returns source image file extension
 * @param {string}     uri      image source uri
 *
 * @returns {string}
 */
function getFileExtension(uri) {
    const splitURI = /[.]([^.]+)$/.exec(uri)
    return (splitURI && /[.]([^.]+)$/.exec(uri)[1] || '').toLowerCase()
}

/**
 * returns scale factor needed if FIT fitting
 * @param {number}  sWidth
 * @param {number}  sHeight
 * @param {number}  dWidth
 * @param {number}  dHeight
 *
 * @returns {number}
 */
function getFitScaleFactor(sWidth, sHeight, dWidth, dHeight) {
    return Math.min(dWidth / sWidth, dHeight / sHeight)
}

/**
 * returns scale factor needed if FILL fitting
 * @param {number}  sWidth
 * @param {number}  sHeight
 * @param {number}  dWidth
 * @param {number}  dHeight
 *
 * @returns {number}
 */
function getFillScaleFactor(sWidth, sHeight, dWidth, dHeight) {
    return Math.max(dWidth / sWidth, dHeight / sHeight)
}

/**
 * returns scale factor source target
 * @param {number}  sWidth
 * @param {number}  sHeight
 * @param {number}  dWidth
 * @param {number}  dHeight
 * @param {string}  transformType
 *
 * @returns {number}
 */
function getScaleFactor(sWidth, sHeight, dWidth, dHeight, transformType) {
    let scaleFactor

    if (transformType === constants.transformTypes.FILL) {
        scaleFactor = getFillScaleFactor(sWidth, sHeight, dWidth, dHeight)
    } else if (transformType === constants.transformTypes.FIT) {
        scaleFactor = getFitScaleFactor(sWidth, sHeight, dWidth, dHeight)
    } else {
        scaleFactor = 1
    }

    return scaleFactor
}

/**
 * returns the destination rectangle
 * @param {number}                  sWidth
 * @param {number}                  sHeight
 * @param {ImageTransformTarget}    target
 * @param {string}                  transformType
 * @param {string}                  upscaleMethod
 *
 * @returns {object}                {with, height, scaleFactor}
 */
function getCalculatedTransformedData(sWidth, sHeight, target, transformType, upscaleMethod) {
    // device pixel aspect ratio
    const DAR = getDevicePixelRatio(target)
    // target rectangle
    const transformedData = {
        width: 0,
        height: 0,
        scaleFactor: 0,
        upscaleMethodValue: constants.upscaleMethodsValues[constants.upscaleMethods.CLASSIC],
        forceUSM: false,
        cssUpscaleNeeded: false
    }

    // adjust target rectangle
    const scaleFactor = getScaleFactor(sWidth, sHeight, target.width * DAR, target.height * DAR, transformType)
    const scaleDescriptor = getScaleDescriptor(sWidth, sHeight, upscaleMethod, scaleFactor)
    const imageMaxAllowedUpscaleFactor = scaleDescriptor.maxScale

    transformedData.forceUSM = scaleDescriptor.forceUSM
    transformedData.upscaleMethodValue = scaleDescriptor.upscaleMethodValue

    if (scaleFactor > imageMaxAllowedUpscaleFactor) {
        // limited upscale
        switch (transformType) {
            case constants.transformTypes.FILL:
                transformedData.width = target.width * DAR * (imageMaxAllowedUpscaleFactor / scaleFactor)
                transformedData.height = target.height * DAR * (imageMaxAllowedUpscaleFactor / scaleFactor)
                break
            case constants.transformTypes.FIT:
                transformedData.width = sWidth * imageMaxAllowedUpscaleFactor
                transformedData.height = sHeight * imageMaxAllowedUpscaleFactor
                break
            default:
                break
        }
        // adjust scale factor value
        transformedData.scaleFactor = imageMaxAllowedUpscaleFactor
        transformedData.cssUpscaleNeeded = true
    } else {
        // upscale within limits or downscale
        switch (transformType) {
            case constants.transformTypes.FILL:
                transformedData.width = target.width * DAR
                transformedData.height = target.height * DAR
                break
            case constants.transformTypes.FIT:
                transformedData.width = sWidth * scaleFactor
                transformedData.height = sHeight * scaleFactor
                break
            default:
                break
        }
        // adjust scale factor value
        transformedData.scaleFactor = scaleFactor
        transformedData.cssUpscaleNeeded = false
    }

    // return calculated transform size
    return transformedData
}

/**
 * returns overlapping rectangle where sRect
 * id aligned (according to alignment) within dRect
 * @param {object}      sRect         rect 1
 * @param {object}      dRect         rect 2
 * @param {string}      alignment
 *
 * @returns {{x:number,y:number,width:number, height:number}}
 */
function getAlignedRect(sRect, dRect, alignment) {
    let x
    let y

    // calculate cropping x,y
    switch (alignment) {
        case constants.alignTypes.CENTER:
            x = Math.max(0, (sRect.width - dRect.width) / 2)
            y = Math.max(0, (sRect.height - dRect.height) / 2)
            break
        case constants.alignTypes.TOP:
            x = Math.max(0, (sRect.width - dRect.width) / 2)
            y = 0
            break
        case constants.alignTypes.TOP_LEFT:
            x = 0
            y = 0
            break
        case constants.alignTypes.TOP_RIGHT:
            x = Math.max(0, sRect.width - dRect.width)
            y = 0
            break
        case constants.alignTypes.BOTTOM:
            x = Math.max(0, (sRect.width - dRect.width) / 2)
            y = Math.max(0, sRect.height - dRect.height)
            break
        case constants.alignTypes.BOTTOM_LEFT:
            x = 0
            y = Math.max(0, sRect.height - dRect.height)
            break
        case constants.alignTypes.BOTTOM_RIGHT:
            x = Math.max(0, sRect.width - dRect.width)
            y = Math.max(0, sRect.height - dRect.height)
            break
        case constants.alignTypes.LEFT:
            x = 0
            y = Math.max(0, (sRect.height - dRect.height) / 2)
            break
        case constants.alignTypes.RIGHT:
            x = Math.max(0, sRect.width - dRect.width)
            y = Math.max(0, (sRect.height - dRect.height) / 2)
            break
    }

    // rect
    return {
        x: sRect.x ? sRect.x + x : x,
        y: sRect.y ? sRect.y + y : y,
        width: Math.min(sRect.width, dRect.width),
        height: Math.min(sRect.height, dRect.height)
    }
}

/**
 * returns overlapping rectangle between sRect and dRect
 * @param {object}      sRect         rect 1
 * @param {object}      dRect         rect 2
 *
 * @returns {{x:number,y:number,width:number, height:number} || null}
 */
function getOverlappingRect(sRect, dRect) {
    const width = Math.max(0, Math.min(sRect.width, dRect.x + dRect.width) - Math.max(0, dRect.x))
    const height = Math.max(0, Math.min(sRect.height, dRect.y + dRect.height) - Math.max(0, dRect.y))


    const isValidRect = width && height && (sRect.width !== width || sRect.height !== height)

    // return overlapping sRect/dRect rectangle(x, y, width, height)
    return isValidRect ? {
        x: Math.max(0, dRect.x),
        y: Math.max(0, dRect.y),
        width,
        height
    } : null
}

/**
 * returns pixel aspect ratio value
 * @param {ImageTransformTarget}    target
 *
 * @returns {number}
 */
function getDevicePixelRatio(target) {
    return Math.min(target.pixelAspectRatio || 1, constants.MAX_DEVICE_PIXEL_RATIO)
}

/**
 * returns target alignment value
 * @param {ImageTransformTarget}    target
 *
 * @returns {string}
 */
function getAlignment(target) {
    return constants.alignTypesMap[target.alignment] || constants.alignTypesMap[constants.alignTypes.CENTER]
}

/**
 * returns the focal point value, if no focal point passed use alignment
 * @param {{x: number, y: number}|undefined} focalPoint
 */
function getFocalPoint(focalPoint) {
    let fp = null

    if (typeof focalPoint.x === 'number' && typeof focalPoint.y === 'number') {
        fp = {
            x: roundToFixed(Math.max(0, Math.min(100, focalPoint.x)) / 100, 2),
            y: roundToFixed(Math.max(0, Math.min(100, focalPoint.y)) / 100, 2)
        }
    }

    return fp
}

/**
 * returns preferred image quality value
 * @param {number}    imageWidth
 * @param {number}    imageHeight
 *
 * @returns {number}
 */
function getPreferredImageQuality(imageWidth, imageHeight) {
    return constants.imageScaleDefaults[getImageQualityKey(imageWidth, imageHeight)].quality
}

/**
 * returns the scale descriptor of CLASSIC upscale method
 * @param sWidth
 * @param sHeight
 * @returns {{maxScale: number, upscaleMethodValue: number, forceUSM: boolean}}
 */

function getClassicScaleDescriptor(sWidth, sHeight) {
    const imageKey = getImageQualityKey(sWidth, sHeight)
    return {
        maxScale: constants.imageScaleDefaults[imageKey].maxUpscale,
        upscaleMethodValue: constants.upscaleMethodsValues.classic,
        forceUSM: false
    }
}

/**
 * returns the scale descriptor of AUTO upscale method
 * @param sWidth
 * @param sHeight
 * @returns {{maxScale: number, upscaleMethodValue: number, forceUSM: boolean}}
 */
function getAutoScaleDescriptor(sWidth, sHeight) {
    const imageKey = getImageQualityKey(sWidth, sHeight)
    return {
        maxScale: constants.imageScaleDefaults[imageKey].maxUpscale,
        upscaleMethodValue: constants.upscaleMethodsValues.classic,
        forceUSM: false
    }
}

/**
 * returns the scale descriptor of SUPER upscale method
 * @param sWidth
 * @param sHeight
 * @param scaleFactor
 * @returns {{maxScale: number, upscaleMethodValue: number, forceUSM: boolean}}
 */
function getSuperScaleDescriptor(sWidth, sHeight, scaleFactor) {
    const imageKey = getImageQualityKey(sWidth, sHeight)

    return {
        maxScale: utils.last(constants.SUPER_UPSCALE_MODELS) + constants.imageScaleDefaults[imageKey].maxUpscale - 1,
        upscaleMethodValue: constants.upscaleMethodsValues.super,
        forceUSM: !(constants.SUPER_UPSCALE_MODELS.includes(scaleFactor) || scaleFactor > utils.last(constants.SUPER_UPSCALE_MODELS))
    }
}

/**
 * returns upscale descriptor object
 * @param {number}    sWidth
 * @param {number}    sHeight
 * @param {string}    upscaleMethod
 *
 * @returns  {{maxScale: number, upscaleMethodValue: number, forceUSM: boolean}}
 */
function getScaleDescriptor(sWidth, sHeight, upscaleMethod, scaleFactor) {
    const descriptorFunc = {
        classic: getClassicScaleDescriptor,
        auto: getAutoScaleDescriptor,
        super: getSuperScaleDescriptor
    }
    return descriptorFunc[upscaleMethod](sWidth, sHeight, scaleFactor)
}
/**
 * returns image quality key
 * @param {number}    imageWidth
 * @param {number}    imageHeight
 *
 * @returns {string}
 */
function getImageQualityKey(imageWidth, imageHeight) {
    const size = imageWidth * imageHeight

    if (size > constants.imageScaleDefaults[constants.imageQuality.HIGH].size) {
        return constants.imageQuality.HIGH
    } else if (size > constants.imageScaleDefaults[constants.imageQuality.MEDIUM].size) {
        return constants.imageQuality.MEDIUM
    } else if (size > constants.imageScaleDefaults[constants.imageQuality.LOW].size) {
        return constants.imageQuality.LOW
    }
    return constants.imageQuality.TINY
}

/**
 * return the actual rounded dimension of a scaled rectangle
 * @param sWidth
 * @param sHeight
 * @param tWidth
 * @param tHeight
 * @param transformType
 * @returns {{width: number, height: number}}
 */
function getDimension(sWidth, sHeight, tWidth, tHeight, transformType) {
    const scaleFactor = getScaleFactor(sWidth, sHeight, tWidth, tHeight, transformType)
    return {
        width: Math.round(sWidth * scaleFactor),
        height: Math.round(sHeight * scaleFactor)
    }
}

/**
 * rounds number n digit precision and converts to string
 * @param {number}      value
 * @param {number}      precision
 *
 * @returns {string}
 */
function roundToFixed(value, precision) {
    const truncatePrecision = Math.pow(10, precision || 0)
    return (value * truncatePrecision / truncatePrecision).toFixed(parseInt(precision, 10))
}

/**
 * get normalize scale method
 * @param options
 * @returns {*}
 */
function getUpscaleString(options) {
    if (!options || !options.upscaleMethod || typeof options.upscaleMethod !== 'string') {
        return constants.upscaleMethods.AUTO
    }
    return constants.upscaleMethods[options.upscaleMethod.toUpperCase()] || constants.upscaleMethods.AUTO
}


export default {
    populateGlobalFeatureSupport,
    isWEBPBrowserSupport,
    isObjectFitBrowserSupport,
    isImageTransformApplicable,
    isValidRequest,
    isImageTypeSupported,
    isExternalUrl,
    isWEBP,
    getFileType,
    getFileExtension,
    getFileName,
    getAlignedRect,
    getOverlappingRect,
    getScaleFactor,
    getScaleDescriptor,
    getCalculatedTransformedData,
    getAlignment,
    getPreferredImageQuality,
    getDimension,
    getFocalPoint,
    getUpscaleString,
    roundToFixed
}
