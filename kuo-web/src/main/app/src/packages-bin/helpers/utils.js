'use strict'

/**
 * Shallow object 'extend' function.
 * Receives any number of objects and assigns all by order to the first
 * @returns {{}}
 */
function assign() {
    const target = arguments[0] || {}
    const sources = Array.prototype.slice.call(arguments, 1, arguments.length)

    for (let i = 0; i < sources.length; i++) {
        const source = sources[i]
        for (const prop in source) {
            if (source.hasOwnProperty(prop)) {
                target[prop] = source[prop]
            }
        }
    }
    return target
}

/**
 * return if an Array, String or Object includes a value
 * @param source
 * @param value
 * @returns {boolean}
 */
function includes(source, value) {
    // Array and String
    if (source.indexOf) {
        return source.indexOf(value) > -1 // eslint-disable-line lodash/prefer-includes
    }
    // Object
    if (source && typeof source === 'object') {
        return Object.keys(source).some(key => source[key] === value)
    }
    return false
}

/**
 * Simple templates.
 * Receives a string with es6 ${...} style template arguments and returns a transformed string.
 * @param string
 * @returns {Function}
 */
function template(string) {
    return function templateFunc(data) {
        let result = string
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                result = result.replace(new RegExp(`\\$\{${key}\}`, 'g'), data[key])
            }
        }
        return result
    }
}

/**
 * Get the last element in an array
 * @param array
 * @returns {*}
 */
function last(array) {
    return array[array.length - 1]
}

export default {
    assign,
    includes,
    last,
    template
}

