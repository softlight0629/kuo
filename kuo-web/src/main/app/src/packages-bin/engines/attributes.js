import constants from '../helpers/imageServiceConstants';
import imageServiceUtils from '../helpers/imageServiceUtils';
import backgroundAttributes from '../engines/attributes/backgroundAttributes';
import imgAttributes from '../engines/attributes/imgAttributes';
import SVGAttributes from '../engines/attributes/SVGAttributes';
import imgPolyfillAttributes from '../engines/attributes/imgPolyfillAttributes';

/**
 * get CSS or SVG attributes to be used in the browser
 * @param {object}                  transformsObj    transform parts object
 * @param {ImageTransformTarget}    target
 *
 * @returns object
 */
function getAttributes(transformsObj, target) {
    let attributesGetter

    if (target.htmlTag === constants.htmlTag.BG) {
        attributesGetter = backgroundAttributes
    } else if (target.htmlTag === constants.htmlTag.SVG) {
        attributesGetter = SVGAttributes
    } else if (imageServiceUtils.isObjectFitBrowserSupport()) {
        attributesGetter = imgAttributes
    } else {
        attributesGetter = imgPolyfillAttributes
    }

    return attributesGetter.get(transformsObj, target)
}

export default {
    getAttributes
}
