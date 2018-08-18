'use strict'
import * as _ from 'lodash';

/**
 * @private
 * @param name
 * @returns {{}}
 */
function findFilter(filters, name) {
    const filter = _.find(filters.templates, {name})
    return filter || {}
}

/**
 * Get an filter (SVG filter) string from filters list
 * @param {string} id
 * @param {string} name
 * @param {object} [overrides]
 * @returns {string} a compiled filter template
 */
function getFilter(filters, id, name, overrides) {
    const filter = findFilter(filters, name)
    console.log(filters, name);
    const params = {
        id,
        content: filter.template(_.assign({}, filter.defaults, overrides || {}))
    }
    return filters.masterTemplate(params)
}

/**
 * checks if filter key exists
 * @param effectName
 * @returns {boolean}
 */
function isFilterExists(filters, effectName) {
    return !_.isEmpty(_.find(filters.templates, {name: effectName}))
}


/**
 * Get the list of supported filter names
 * @returns {Array}
 */
function getFilterNames(filters) {
    return _.map(filters.templates, 'name')
}

/**
 * Get the defaults (== the dynamic values) of a filter
 * @param {string} name
 * @returns {{}}
 */
function getFilterDefaults(filters, name) {
    return _.clone(findFilter(filters, name).defaults || {})
}

export default {
  getFilter,
  getFilterNames,
  getFilterDefaults,
  isFilterExists,
}
