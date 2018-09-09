import utils from '../../helpers/utils';
import constants from '../../helpers/imageServiceConstants';
import imageServiceUtils from '../../helpers/imageServiceUtils';

/**
 * returns alternative Image tag CSS data
 * @param {object}                  transformsObj    transform parts object
 * @param {ImageTransformTarget}    target
 *
 * @returns {{css: {img: {}, container: {}}}}
 */
function getCSS(transformsObj, target) {
    const attributes = {
        css: {
            container: {},
            img: {}
        }
    }
    const css = attributes.css
    const fittingType = transformsObj.fittingType
    const fittingTypes = constants.fittingTypes
    const alignType = target.alignment
    const alignTypes = constants.alignTypes
    let sourceWidth
    let sourceHeight
    if (transformsObj.parts && transformsObj.parts.length) {
        sourceWidth = transformsObj.parts[0].width
        sourceHeight = transformsObj.parts[0].height
    } else {
        sourceWidth = transformsObj.src.width
        sourceHeight = transformsObj.src.height
    }
    let cssValues

    css.img.display = 'block'
    css.container.position = 'relative'
    css.img.position = 'absolute'
    css.img.top = 'auto'
    css.img.right = 'auto'
    css.img.bottom = 'auto'
    css.img.left = 'auto'

    // set css
    switch (fittingType) {
        case fittingTypes.ORIGINAL_SIZE:
        case fittingTypes.LEGACY_ORIGINAL_SIZE:
            css.img.width = sourceWidth
            css.img.height = sourceHeight
            break
        case fittingTypes.SCALE_TO_FIT:
        case fittingTypes.LEGACY_FIT_WIDTH:
        case fittingTypes.LEGACY_FIT_HEIGHT:
        case fittingTypes.LEGACY_FULL:
            cssValues = imageServiceUtils.getDimension(sourceWidth, sourceHeight, target.width, target.height, constants.transformTypes.FIT)
            utils.assign(css.img, cssValues)
            break

        case fittingTypes.STRETCH:
            css.img.width = target.width
            css.img.height = target.height
            break

        case fittingTypes.SCALE_TO_FILL:
            const uri = transformsObj.src.id
            if (imageServiceUtils.isImageTypeSupported(uri) || imageServiceUtils.isExternalUrl(uri)) {
                css.img.width = target.width
                css.img.height = target.height
            } else {
                cssValues = imageServiceUtils.getDimension(sourceWidth, sourceHeight, target.width, target.height, constants.transformTypes.FILL)
                utils.assign(css.img, cssValues)
                css.container.overflow = 'hidden'
            }
            break
    }

    //no need to align when sizing are the same
    if (css.img.width !== target.width || css.img.height !== target.height) {
        const verticalMiddle = Math.round((target.height - css.img.height) / 2)
        const horizontalMiddle = Math.round((target.width - css.img.width) / 2)

        switch (alignType) {
            default:
            case alignTypes.CENTER:
                css.img.top = verticalMiddle
                css.img.left = horizontalMiddle
                break

            case alignTypes.LEFT:
                css.img.left = 0
                css.img.top = verticalMiddle
                //0% 50%
                break

            case alignTypes.RIGHT:
                css.img.right = 0
                css.img.top = verticalMiddle
                //100% 50%
                break

            case alignTypes.TOP:
                css.img.left = horizontalMiddle
                css.img.top = 0
                //50% 0%
                break

            case alignTypes.BOTTOM:
                css.img.left = horizontalMiddle
                css.img.bottom = 0
                //50% 100%
                break

            case alignTypes.TOP_RIGHT:
                css.img.right = 0
                css.img.top = 0
                //100% 0%
                break

            case alignTypes.TOP_LEFT:
                css.img.left = 0
                css.img.top = 0
                //0% 0%
                break

            case alignTypes.BOTTOM_RIGHT:
                css.img.right = 0
                css.img.bottom = 0
                //100% 100%
                break

            case alignTypes.BOTTOM_LEFT:
                css.img.left = 0
                css.img.bottom = 0
                //0% 100%
                break
        }
    }
    // returns alternative Image tag CSS data
    return attributes
}

export default {
    get: getCSS
}
