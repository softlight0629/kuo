import * as _ from 'lodash';

export default {
    /**
     * Returns the string with the first character capitalized
     *
     * @param {string} String to be capitalized
     * @param {boolean} [lowerCaseElse] Pass true if the rest of the string should be lower case
     * @returns {string}
     */
    capitalize(string, lowerCaseElse) {
        return _.upperFirst(lowerCaseElse ? string.toLowerCase() : string)
    },

    /**
     * Returns true if string starts with 'searchString' parameter, false otherwise.
     *
     * If 'ignoreCase' is true, the function will be case insensitive
     *
     * @param {string} string
     * @param {string} searchString
     * @param {boolean} [ignoreCase]
     * @returns {boolean}
     */
    startsWith: function startsWith(string, searchString, ignoreCase) {
        if (!string) {
            return false
        }
        if (ignoreCase) {
            return startsWith(string.toLowerCase(), searchString.toLowerCase(), false)
        }
        return _.startsWith(string, searchString)
    },

    /**
     * Returns true if string ends with 'endsWith' parameter, false otherwise.
     *
     * If 'ignoreCase' is true, the function will be case insensitive
     *
     * @param {string} string
     * @param {string} endsWith
     * @param {boolean} [ignoreCase]
     * @returns {boolean}
     */
    endsWith(string, endsWith, ignoreCase) {
        if (!string) {
            return false
        }
        if (ignoreCase) {
            return this.endsWith(string.toLowerCase(), endsWith.toLowerCase(), false)
        }
        return _.endsWith(string, endsWith)
    },

    isNullOrEmpty(str) {
        return !str || !str.trim()
    },

    isTrue(str) {
        return str === 'true'
    }
}
