import * as _ from 'lodash';

const alwaysInViewportList = ['siteBackground']

/**
 * Test if a component should be always in viewport
 * @param {string} compId
 * @returns {boolean}
 */
function isAlwaysInViewport(siteAPI, compId) {
    return _.includes(alwaysInViewportList, compId)
}

/**
 * Test if a component is in the viewport
 * "In viewport" means that either the top position of the component is in screen bounds,
 * or bottom of component is in screen bounds
 * or bottom is under the screen and top is above the screen, meaning the component "wraps" the viewport
 * @param {SiteAPI} siteAPI
 * @param {{x: number, y:number}} scroll
 * @param {string} compId
 * @param {number} [componentHeightThreshold=0] a number between 0 to 1 represents the percentage of the component that should be in the screen before it counts as "in viewport", normalized to window height
 * @returns {boolean}
 */
function isInViewport(siteAPI, scroll, compId, componentHeightThreshold) {
    const siteData = siteAPI.getSiteData()
    const windowHeight = _.get(siteData, 'measureMap.height.screen')
    const compAbsTop = _.get(siteData, ['measureMap', 'absoluteTop', compId])
    const compHeight = _.get(siteData, ['measureMap', 'height', compId])
    const normalizedThreshold = (componentHeightThreshold || 0) * Math.min(compHeight, windowHeight)

    if (_.isUndefined(compAbsTop) || _.isUndefined(compHeight)) {
        return false //throw new Error('utils.isInViewport: Component ' + compId + ' is not registered in SiteData.measureMap heights or absoluteTops');
    }

    const targetTop = Math.max(compAbsTop + normalizedThreshold, 0)
    const targetBottom = Math.max(compAbsTop + compHeight - normalizedThreshold, 0)

    const isTopInViewPort = scroll.y <= targetTop && targetTop < scroll.y + windowHeight
    const isBottomInViewPort = scroll.y < targetBottom && targetBottom <= scroll.y + windowHeight
    const isWrappingViewPort = targetTop <= scroll.y && targetBottom > scroll.y + windowHeight

    return isTopInViewPort || isBottomInViewPort || isWrappingViewPort
}

export default {
    isInViewport,
    isAlwaysInViewport
}
