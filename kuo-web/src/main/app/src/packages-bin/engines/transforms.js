'use strict'
import utils from '../helpers/utils';
import constants from '../helpers/imageServiceConstants';

// transform templates
const fitTemplate = utils.template('fit/w_${width},h_${height}')
const fillTemplate = utils.template('fill/w_${width},h_${height},al_${alignment}')
const fillFocalTemplate = utils.template('fill/w_${width},h_${height},fp_${focalPointX}_${focalPointY}')
const cropTemplate = utils.template('crop/x_${x},y_${y},w_${width},h_${height}')

// legacy templates
const legacyCropTemplate = utils.template('crop/w_${width},h_${height},al_${alignment}')
const legacyFillTemplate = utils.template('fill/w_${width},h_${height},al_${alignment}')

// upscale template
const upscaleTemplate = utils.template(',lg_${upscaleMethodValue}')

// options templates
const qualityTemplate = utils.template(',q_${quality}')
const unSharpMaskTemplate = utils.template(',usm_${radius}_${amount}_${threshold}')
const nonProgressiveTemplate = utils.template(',bl')
const watermarkTemplate = utils.template(',wm_${watermark}')

/**
 * returns image transform uri
 * @param {object}  transformsObj
 *
 * @returns {string}
 */
function getImageURI(transformsObj) {
    // construct image transforms
    const transformsObjStrArr = []

    // construct transform
    transformsObj.parts.forEach(transformPart => {
        switch (transformPart.transformType) {
            case constants.transformTypes.CROP:
                transformsObjStrArr.push(cropTemplate(transformPart))
                break

            case constants.transformTypes.LEGACY_CROP:
                transformsObjStrArr.push(legacyCropTemplate(transformPart))
                break

            case constants.transformTypes.LEGACY_FILL:
                let legacyFillStr = legacyFillTemplate(transformPart)
                if (transformPart.upscale) {
                    legacyFillStr += upscaleTemplate(transformPart)
                }
                transformsObjStrArr.push(legacyFillStr)
                break

            case constants.transformTypes.FIT:
                let fitStr = fitTemplate(transformPart)
                if (transformPart.upscale) {
                    fitStr += upscaleTemplate(transformPart)
                }
                transformsObjStrArr.push(fitStr)
                break

            case constants.transformTypes.FILL:
                let fillStr = fillTemplate(transformPart)
                if (transformPart.upscale) {
                    fillStr += upscaleTemplate(transformPart)
                }
                transformsObjStrArr.push(fillStr)
                break

            case constants.transformTypes.FILL_FOCAL:
                let fillFocalStr = fillFocalTemplate(transformPart)
                if (transformPart.upscale) {
                    fillFocalStr += upscaleTemplate(transformPart)
                }
                transformsObjStrArr.push(fillFocalStr)
                break
        }
    })

    let transformsStr = transformsObjStrArr.join('/')

    // construct transform options
    // quality
    if (transformsObj.fileType === constants.fileType.PNG && transformsObj.isWEBPSupport ||
        transformsObj.fileType === constants.fileType.JPG) {
        transformsStr += qualityTemplate(transformsObj)
    }
    // un-sharp mask
    if (transformsObj.unsharpMask) {
        transformsStr += unSharpMaskTemplate(transformsObj.unsharpMask)
    }
    // progressive
    if (!transformsObj.progressive) {
        transformsStr += nonProgressiveTemplate(transformsObj)
    }
    // watermark
    if (transformsObj.watermark) {
        transformsStr += watermarkTemplate(transformsObj)
    }

    // image url string
    return `${transformsObj.src.id}/${constants.API_VERSION}/${transformsStr}/${transformsObj.fileName}.${transformsObj.isWEBPSupport ? 'webp' : transformsObj.fileExtension}`
}

export default {
    getImageURI
}
