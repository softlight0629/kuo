'use strict'

/**
 * image service api version
 */
const API_VERSION = 'v1'


/*
the maximum retina factor
 */
const MAX_DEVICE_PIXEL_RATIO = 2

/**
 * Enum string values of requested image fitting types
 * Note: TILE_HORIZONTAL, TILE_VERTICAL, FIT_AND_TILE are supported for legacy purposes but are not exposed
 * in the documentation because they should not be exposed for new features
 * @type {{SCALE_TO_FILL: string, SCALE_TO_FIT: string, TILE: string, ORIGINAL_SIZE: string, STRETCH: string}}
 */
const fittingTypes = {
    SCALE_TO_FILL: 'fill',
    SCALE_TO_FIT: 'fit',
    STRETCH: 'stretch',
    ORIGINAL_SIZE: 'original_size',
    TILE: 'tile',
    TILE_HORIZONTAL: 'tile_horizontal',
    TILE_VERTICAL: 'tile_vertical',
    FIT_AND_TILE: 'fit_and_tile',
    LEGACY_STRIP_TILE: 'legacy_strip_tile',
    LEGACY_STRIP_TILE_HORIZONTAL: 'legacy_strip_tile_horizontal',
    LEGACY_STRIP_TILE_VERTICAL: 'legacy_strip_tile_vertical',
    LEGACY_STRIP_SCALE_TO_FILL: 'legacy_strip_fill',
    LEGACY_STRIP_SCALE_TO_FIT: 'legacy_strip_fit',
    LEGACY_STRIP_FIT_AND_TILE: 'legacy_strip_fit_and_tile',
    LEGACY_STRIP_ORIGINAL_SIZE: 'legacy_strip_original_size',
    LEGACY_ORIGINAL_SIZE: 'actual_size',
    LEGACY_FIT_WIDTH: 'fitWidth',
    LEGACY_FIT_HEIGHT: 'fitHeight',
    LEGACY_FULL: 'full',
    LEGACY_BG_FIT_AND_TILE: 'legacy_tile',
    LEGACY_BG_FIT_AND_TILE_HORIZONTAL: 'legacy_tile_horizontal',
    LEGACY_BG_FIT_AND_TILE_VERTICAL: 'legacy_tile_vertical',
    LEGACY_BG_NORMAL: 'legacy_normal'
}

/**
 * Enum string values of image transform types as passed to the image service api
 */
const transformTypes = {
    FIT: 'fit',
    FILL: 'fill',
    FILL_FOCAL: 'fill_focal',
    CROP: 'crop',
    LEGACY_CROP: 'legacy_crop',
    LEGACY_FILL: 'legacy_fill'
}

/**
 * Enum string values of requested image align types
 * @type {{CENTER: string, RIGHT: string, LEFT: string, TOP: string, BOTTOM: string, TOP_RIGHT: string, TOP_LEFT: string, BOTTOM_RIGHT: string, BOTTOM_LEFT: string}}
 */
const alignTypes = {
    CENTER: 'center',
    TOP: 'top',
    TOP_LEFT: 'top_left',
    TOP_RIGHT: 'top_right',
    BOTTOM: 'bottom',
    BOTTOM_LEFT: 'bottom_left',
    BOTTOM_RIGHT: 'bottom_right',
    LEFT: 'left',
    RIGHT: 'right'
}

/**
 * Enum string values of image align types as passed to the image service
 */
const alignTypesMap = {
    center: 'c',
    top: 't',
    top_left: 'tl',
    top_right: 'tr',
    bottom: 'b',
    bottom_left: 'bl',
    bottom_right: 'br',
    left: 'l',
    right: 'r'
}

/**
 * Enum string values of html tag used to construct the css or svg attributes
 *  @type {{BG: string, IMG: string, SVG: string}}
 */
const htmlTag = {
    BG: 'bg',
    IMG: 'img',
    SVG: 'svg'
}

/**
 * Enum string values of upscale method
 *  @type {{DEFAULT: string, SUPER: string}}
 */
const upscaleMethods = {
    AUTO: 'auto',
    CLASSIC: 'classic',
    SUPER: 'super'
}

/**
 *  api values of upscale method
 *  @type {{default: number, super: number}}
 */
const upscaleMethodsValues = {
    classic: 1,
    super: 2
}


/**
 * default unsharp mask values
 *  @type {{radius: number, amount: number, threshold: number}}
 */
const defaultUSM = {
    radius: 0.66,
    amount: 1.0,
    threshold: 0.01
}

/**
 * default empty data
 *  @type {{uri: '', css: {img: {}, container: {}}, attr: {img: {}, container: {}}}}
 */
const emptyData = {
    uri: '',
    css: {
        img: {},
        container: {}
    },
    attr: {
        img: {},
        container: {}
    }
}

/**
 * super res machine learning upscale factor models -
 * @type {number[]}
 */
const SUPER_UPSCALE_MODELS = [1.5, 2, 4]

/**
 * image qualities
 */
const imageScaleDefaults = {
    HIGH: {
        size: 1400 * 1400,
        quality: 90,
        maxUpscale: 1
    },
    MEDIUM: {
        size: 600 * 600,
        quality: 85,
        maxUpscale: 1
    },
    LOW: {
        size: 400 * 400,
        quality: 80,
        maxUpscale: 1.2
    },
    TINY: {
        size: 0,
        quality: 80,
        maxUpscale: 1.4
    }
}

/**
 * image quality
 * @type {{HIGH: string, MEDIUM: string, LOW: string, TINY: string}}
 */
const imageQuality = {
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
    LOW: 'LOW',
    TINY: 'TINY'
}

const fileType = {
    JPG: 'jpg',
    JPEG: 'jpeg',
    PNG: 'png',
    WEBP: 'webp',
    WIX_ICO_MP: 'wix_ico_mp',
    WIX_MP: 'wix_mp',
    GIF: 'gif',
    SVG: 'svg',
    UNRECOGNIZED: 'unrecognized'
}

const supportedExtensions = [fileType.JPG, fileType.JPEG, fileType.PNG, fileType.GIF, fileType.WEBP]

const webp = {
    LOSSLESS: 'lossless',
    LOSSY: 'lossy',
    ALPHA: 'alpha',
    ANIMATION: 'animation'
}

export default {
    alignTypes,
    alignTypesMap,
    transformTypes,
    fittingTypes,
    htmlTag,
    upscaleMethods,
    upscaleMethodsValues,
    defaultUSM,
    emptyData,
    imageQuality,
    imageScaleDefaults,
    fileType,
    supportedExtensions,
    webp,
    SUPER_UPSCALE_MODELS,
    MAX_DEVICE_PIXEL_RATIO,
    API_VERSION
}
