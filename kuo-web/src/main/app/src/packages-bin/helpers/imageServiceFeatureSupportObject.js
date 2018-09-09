'use strict'

/**
 * Global MUTABLE support object
 * For tests, override the getFeature function and not the object
 * @type {{isWEBP: {lossless: boolean, lossy: boolean, alpha: boolean, animation: boolean}, isObjectFitBrowser: boolean}}
 */
const globalFeaturesSupportObj = {
    /**
     * checks if the browser supports webp image type
     * @type {object<boolean>}
     */
    isWEBP: {
        lossless: false,
        lossy: false,
        alpha: false,
        animation: false
    },
    /**
     * checks if the browser supports 'objectFit'
     * @type {boolean}
     */
    isObjectFitBrowser: false
}

export default {
    getFeature(feature) {
        return globalFeaturesSupportObj[feature]
    },
    setFeature(feature, value) {
        globalFeaturesSupportObj[feature] = value
    }
}
