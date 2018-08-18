/*eslint no-extra-parens:0*/
/* eslint-disable prefer-template */
'use strict'

function getSepia(amount) {
    return (0.393 + 0.607 * (1 - amount)) + ' ' + (0.769 - 0.769 * (1 - amount)) + ' ' + (0.189 - 0.189 * (1 - amount)) + ' 0 0 ' +
        (0.349 - 0.349 * (1 - amount)) + ' ' + (0.686 + 0.314 * (1 - amount)) + ' ' + (0.168 - 0.168 * (1 - amount)) + ' 0 0 ' +
        (0.272 - 0.272 * (1 - amount)) + ' ' + (0.534 - 0.534 * (1 - amount)) + ' ' + (0.131 + 0.869 * (1 - amount)) + ' 0 0 ' +
        '0 0 0 1 0'
}

function getContrast(amount) {
    return '<feFuncR type="linear" slope="' + amount + '" intercept="' + Math.round(((-0.5 * amount) + 0.5) * 100) / 100 + '"/>' +
        '<feFuncG type="linear" slope="' + amount + '" intercept="' + Math.round(((-0.5 * amount) + 0.5) * 100) / 100 + '"/>' +
        '<feFuncB type="linear" slope="' + amount + '" intercept="' + Math.round(((-0.5 * amount) + 0.5) * 100) / 100 + '"/>'
}

function getBrightness(amount) {
    return '<feFuncR type="linear" slope="' + amount + '" />' +
        '<feFuncG type="linear" slope="' + amount + '" />' +
        '<feFuncB type="linear" slope="' + amount + '" />'
}

/**
 * @param {{r: number, g: number, b: number}} color
 * @returns {string}
 */
function getTint(color) {
    return (1 - color.r / 255) + ' 0 0 0 ' + color.r / 255 + ' ' +
        (1 - color.g / 255) + ' 0 0 0 ' + color.g / 255 + ' ' +
        (1 - color.b / 255) + ' 0 0 0 ' + color.b / 255 + ' ' +
        '0 0 0 1 0'
}

/**
 * lighten darken by color
 * @param {{r: number, g: number, b: number}}  whiteParams
 * @param {{r: number, g: number, b: number}}  blackParams
 * @returns {string}
 */
function getLumaMatrix(whiteParams, blackParams){
    return whiteParams.r + ' 0 0 0 ' + blackParams.r + ' ' +
        whiteParams.g + ' 1 0 0 ' + blackParams.g + ' ' +
        whiteParams.b + ' 0 1 0 ' + blackParams.b + ' ' +
        '0 0 0 1 0'
}

/**
 * @param {{r: number, g: number, b: number}} color
 * @returns {string}
 */
function getColor(color) {
    return '0 0 0 0 ' + (color.r / 255) + ' ' +
        '0 0 0 0 ' + (color.g / 255) + ' ' +
        '0 0 0 0 ' + (color.b / 255) + ' ' +
        '0 0 0 1 0'
}

/**
 * colors the source to 2 colors , input should be gray scale
 * @param {{r: number, g: number, b: number}} whiteColor
 * @param {{r: number, g: number, b: number}} blackColor
 * @returns {string} color matrix
 */
function getDoutone(whiteColor, blackColor) {
    const r_diff = whiteColor.r / 255 - blackColor.r / 255
    const g_diff = whiteColor.g / 255 - blackColor.g / 255
    const b_diff = whiteColor.b / 255 - blackColor.b / 255

    return r_diff + ' 0 0 0 ' + blackColor.r / 255 + ' ' +
        g_diff + ' 0 0 0 ' + blackColor.g / 255 + ' ' +
        b_diff + ' 0 0 0 ' + blackColor.b / 255 + ' ' +
        '0 0 0 1 0'
}

function getAlpha(amount) {
    return '<feFuncA type="linear" slope="' + amount + '" />'
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

module.exports = {hexToRgb, getAlpha, getDoutone, getColor, getTint, getLumaMatrix, getBrightness, getSepia, getContrast}

