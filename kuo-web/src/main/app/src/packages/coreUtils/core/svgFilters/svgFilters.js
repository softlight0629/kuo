'use strict'
import filters from './svgFiltersTemplates';
import getters from './svgFiltersGetters';

export default {
  getFilter: getters.getFilter.bind(null, filters),
  getFilterNames: getters.getFilterNames.bind(null, filters),
  getFilterDefaults: getters.getFilterDefaults.bind(null, filters),
  isFilterExists: getters.isFilterExists.bind(null, filters),
}
