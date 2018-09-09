import imageServiceUtils from '../helpers/imageServiceUtils';
import transformParts from '../helpers/imageTransformParts';
import transformOptions from '../helpers/imageTransformOptions';

/**
 * returns image transform data
 *
 * @param {string}                  fittingType         imageServicesTypes.fittingTypes
 * @param {ImageTransformSource}    src                 source image
 * @param {ImageTransformTarget}    target              target component
 * @param {ImageTransformOptions}   [options]           transform options
 *
 * @returns {Object}
 */
function getTransform(fittingType, src, target, options) {
    const fileType = imageServiceUtils.getFileType(src.id)
    const fileName = imageServiceUtils.getFileName(src.id, src.name)
    const fileExtension = imageServiceUtils.getFileExtension(src.id)
    const isWEBPSupport = imageServiceUtils.isWEBPBrowserSupport(fileType)

    const transformsObj = {
        fileName,
        fileExtension,
        fileType,
        isWEBPSupport,
        fittingType,
        src: {
            id: src.id,
            width: src.width,
            height: src.height,
            isCropped: false
        },
        focalPoint: {
            x: src.focalPoint && src.focalPoint.x,
            y: src.focalPoint && src.focalPoint.y
        },
        quality: 0,
        upscaleMethod: imageServiceUtils.getUpscaleString(options),
        progressive: true,
        unsharpMask: {},
        watermark: '',
        parts: []
    }

    if (imageServiceUtils.isImageTransformApplicable(src.id)) {
        transformParts.setTransformParts(transformsObj, src, target)
        transformOptions.setTransformOptions(transformsObj, options)
    }

    return transformsObj
}

export default getTransform

/**
 * the source image to transform
 * @typedef  {object} ImageTransformSource
 * @property {string}  id               source image uri
 * @property {number}  width            source image width
 * @property {number}  height           source image height
 * @property {string}  [name]           source image display name
 * @property {object}  [crop]           source image crop values
 * @property {number}  crop.x           crop x
 * @property {number}  crop.y           crop y
 * @property {number}  crop.width       crop width
 * @property {number}  crop.height      crop height
 * @property {object}  [focalPoint]     source image focal point values
 * @property {number}  focalPoint.x     focal point x
 * @property {number}  focalPoint.y     focal point y
 */

/**
 * the destination container
 * @typedef  {object}  ImageTransformTarget
 * @property {number}  width                destination container width
 * @property {number}  height               destination container height
 * @property {number}  [pixelAspectRatio]   for retina and mobile displays, 1 (default)
 * @property {string}  [alignment]          how to align the image in the container, imageService.alignTypes  CENTER(default)
 * @property {string}  [htmlTag]            the css style, imageService.htmlTag IMG(default)
 */

/**
 * the transform options
 * @typedef  {object}   ImageTransformOptions
 * @property {boolean}  [progressive]               image transform progressive
 * @property {string}   [upscaleMethod]             image upscale method
 * @property {number}   [quality]                   image transform quality
 * @property {string}   [watermark]                 image watermark id
 * @property {object}   [unsharpMask]               unsharpMask filter
 * @property {number}   [unsharpMask.radius]        unsharpMask radius
 * @property {number}   [unsharpMask.amount]        unsharpMask amount
 * @property {number}   [unsharpMask.threshold]     unsharpMask threshold
 */

/**
 * the transform results
 * @typedef  {object} ImageTransformResult
 * @property {string} uri the generated image uri, *without* base path
 * @property {object} css CSS properties for the image and it's parent container, empty object for SVG
 * @property {object} css.img CSS for the image element
 * @property {object} css.container CSS for the image container
 * @property {object} attr HTML Attributes for the image and it's parent container, empty object for bg and img types
 * @property {object} attr.img HTML Attributes for the image element
 * @property {object} attr.container HTML Attributes for the image container
 *
 */
