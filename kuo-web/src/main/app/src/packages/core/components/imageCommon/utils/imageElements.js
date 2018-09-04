'use strict'
const _ = require('lodash')
const coreUtilsLib = require('santa-core-utils')
const biErrors = require('../bi/errors')
const createReactElement = require('../../../utils/createReactElement')
const imageClientLib = require('image-client-api/dist/imageClientApi')
const svgFilters = coreUtilsLib.svgFilters

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

/**
 * Get the style attributes to add to an image for filter to take effect
 * @param filterId
 * @returns {{WebkitFilter: string, filter: string, outline: string}}
 */
function getCssStyleForFilterUse(filterId) {
    return {
        WebkitFilter: `url(#${filterId})`,
        filter: `url(#${filterId})`,
        // Override a Webkit bug where filter not applied on image in 3d context
        // Bug reported and resolved, https://bugs.webkit.org/show_bug.cgi?id=154108, still here for legacy reasons.
        outline: '1px solid transparent'
    }
}

/**
 * Get the attributes for an 'img' tag
 * @param {string} id comp Id
 * @param {string} dataType "image", "video" etc.
 * @param {ImageTransformResult} imageTransformObject
 * @param {string} altText
 * @param {string} filterId
 * @returns {object}
 */
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

/**
 * Get the atributes for an svg 'image' (or 'rect' if pattern) element
 * @param {string} id comp Id
 * @param {string} dataType "image", "video" etc.
 * @param {string} [filterId]
 * @param {string} [maskId]
 * @param {string} [patternId]
 * @returns {object}
 */
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
 * Verify that the passed effect name is valid, if not return an empty string
 * @param filterEffect
 * @param reportBIFunc
 * @returns {string}
 */
function getValidFilterName(filterEffect, reportBIFunc) {
    let name = ''
    if (filterEffect && filterEffect.effectType !== 'none') {
        //TODO: handle bad filter name in filter getters
        if (svgFilters.isFilterExists(filterEffect.effectType)) {
            name = filterEffect.effectType
        } else if (_.isFunction(reportBIFunc)) {
            reportBIFunc(biErrors.IMAGE_FILTER_NOT_VALID, {filterName: filterEffect.effectType})
        }
    }
    return name
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

function getPatternComponent(patternId) {
    return (
        createReactElement('svg', getSvgAttributes(getHelperSvgStyle(), patternId),
            createReactElement('defs', {
                ref: 'defs',
                key: `defs${patternId}`
            },
            createReactElement('pattern', {
                id: patternId,
                patternUnits: 'userSpaceOnUse',
                x: '0',
                y: '0'
            },
            createReactElement('image')
            )
            )
        )
    )
}

/**
 *
 * @param id
 * @param imageTransformObject
 * @param filterId
 * @param altText
 * @returns {*}
 */
function createReactImage(id, imageTransformObject, filterId, altText) {
    const imageAttributes = getImageAttributes(id, 'image', imageTransformObject, filterId, altText)
    return createReactElement('img', imageAttributes)
}

/**
 *
 * @param id
 * @param imageTransformObject
 * @param filterId
 * @param altText
 * @returns {*}
 */
function createReactSvgImage(id, imageTransformObject, filterId, altText) {
    const imageAttributes = getSvgImageAttributes(id, 'image', filterId)
    const containerAttributes = _.get(imageTransformObject, ['attr', 'container'], {})
    const svgImageAttributes = getSvgAttributes(_.assign({
        role: 'img',
        'aria-label': altText
    }, containerAttributes), id)
    return createReactElement('svg', svgImageAttributes, createReactElement('image', imageAttributes))
}

/**
 *
 * @param id
 * @param imageTransformObject
 * @param filterId
 * @param maskId
 * @param maskData
 * @param altText
 * @returns {*}
 */
function createReactSvgImageWithMask(id, imageTransformObject, filterId, maskId, maskData, altText) {
    const imageAttributes = getSvgImageAttributes(id, 'image', filterId, maskId)
    const containerAttributes = _.get(imageTransformObject, ['attr', 'container'], {})
    const svgImageAttributes = getSvgAttributes(_.assign({
        role: 'img',
        'aria-label': altText
    }, containerAttributes), id)
    const svgDomId = `${maskId}-svg`
    const svgStringWithId = replaceSVGMaskAttributes(maskData.svgString, svgDomId)
    const maskAttrs = {
        width: '100%',
        height: '100%',
        x: 0,
        y: 0
    }

    return createReactElement('svg', svgImageAttributes, [
        createReactElement('defs', {
            key: `defs-${id}`,
            dangerouslySetInnerHTML: {
                __html: coreUtilsLib.svgMask.getMask(maskId, `${svgDomId}`, svgStringWithId, maskAttrs, true)
            }
        }),
        createReactElement('image', imageAttributes)
    ])
}

/**
 *
 * @param id
 * @param imageTransformObject
 * @param filterId
 * @param patternId
 * @param altText
 * @returns {*}
 */
function createReactSvgRectForPattern(id, imageTransformObject, filterId, patternId, altText) {
    const imageAttributes = getSvgImageAttributes(id, 'image', filterId, null, patternId)
    const containerAttributes = _.get(imageTransformObject, ['attr', 'container'], {})
    const svgImageAttributes = getSvgAttributes(_.assign({
        role: 'img',
        'aria-label': altText
    }, containerAttributes), id)
    return createReactElement('svg', svgImageAttributes, createReactElement('rect', imageAttributes))
}

/**
 *
 * @param imageTransformObject
 * @param altText
 * @param isSvgFallback
 * @param {{id:string, filterId?:string, patternId?:string, maskId?:string, svgId?:string}} ids
 * @param {{svgString: string, flip?: string}} maskData
 * @param imageTransformHook
 * @returns {*}
 */
function getImageComponent(imageTransformObject, altText, isSvgFallback, ids, maskData, imageTransformHook) {
    const {id, filterId, patternId, maskId} = ids
    // Pass transform object to a hook function
    if (_.isFunction(imageTransformHook)) {
        imageTransformHook(imageTransformObject)
    }
    
    if (maskData && maskData.svgString) {
        return createReactSvgImageWithMask(id, imageTransformObject, filterId, maskId, maskData, altText)
    }

    if (isSvgFallback) {
        if (patternId) {
            return createReactSvgRectForPattern(id, imageTransformObject, filterId, patternId, altText)
        }
        return createReactSvgImage(id, imageTransformObject, filterId, altText)
    }
    return createReactImage(id, imageTransformObject, filterId, altText)
}

/**
 * Get the components for rendering an image and if defined an svg filter
 * @param {object} imageCompProps props of an image comp
 * @param {string} altText
 * @param {boolean} isSvgFallback
 * @param {function} imageTransformHook
 * @returns {Array<ReactElement>|ReactElement}
 */
function getImageComponents(imageCompProps, altText, isSvgFallback, imageTransformHook) {
    let filterComp
    let patternComp

    const imageInfo = _.pick(imageCompProps, [
        'imageData', 'containerWidth', 'containerHeight', 'fittingType', 'alignType', 'quality',
        'displayMode', 'addItemProp', 'itemProp', 'labelledById', 'describedById'
    ])
    const fittingType = imageInfo.fittingType || imageInfo.displayMode
    const id = imageCompProps.id
    const filterEffect = imageCompProps.filterEffect
    const getMediaFullStaticUrl = imageCompProps.getMediaFullStaticUrl
    const currentUrl = imageCompProps.currentUrl
    const devicePixelRatio = imageCompProps.devicePixelRatio
    const reportBIfunc = imageCompProps.reportBI
    const validEffectName = getValidFilterName(filterEffect, reportBIfunc)
    const shouldUsePattern = isSvgFallback && fittingType === 'tile'
    const transformType = isSvgFallback ? 'svg' : 'img'
    const imageTransformObject = coreUtilsLib.imageUtils.getImageComputedProperties(imageClientLib, imageInfo, getMediaFullStaticUrl, currentUrl, devicePixelRatio, transformType)

    const maskData = imageCompProps.maskData
    const maskId = maskData && maskData.svgString && `mask-${id}`
    const filterId = validEffectName && `${validEffectName}-${id}`
    const patternId = shouldUsePattern && `pattern-${id}`

    const comps = []

    if (patternId) {
        patternComp = getPatternComponent(patternId)
        comps.push(patternComp)
    }

    if (filterId) {
        filterComp = getFilterComponent(filterId, validEffectName)
        comps.push(filterComp)
    }

    const imageComp = getImageComponent(imageTransformObject, altText, isSvgFallback, {id, filterId, patternId, maskId}, maskData, imageTransformHook)

    if (_.isEmpty(comps)) {
        return imageComp
    }

    comps.push(imageComp)
    return comps
}

export default {
    getImageComponents,
    getFilterComponent,
    getValidFilterName,
    getCssStyleForFilterUse
}
