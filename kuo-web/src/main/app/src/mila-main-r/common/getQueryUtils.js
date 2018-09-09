/**
 * Get value of URL parameter by its name
 * @param {string} name
 * @param {string} query
 * @returns {string}
 */
function getParameterFromQuery(query, name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(query);
  return results && results[1] ? decodeURIComponent(results[1]).replace(/\+/g, ' ') : '';
}

/**
 * Get state of boolean URL parameter by its name
 * @param {string} name
 * @param {string} query
 * @returns {boolean}
 */
function isParameterTrueInQuery(query, name) {
  return getParameterFromQuery(query, name) === 'true';
}

function getQueryUtils(window) {
  return {
    getParameterFromQuery: getParameterFromQuery,
    isParameterTrueInQuery: isParameterTrueInQuery,
    getParameterByName: getParameterFromQuery.bind(null, window.location.search),
    isParameterTrue: isParameterTrueInQuery.bind(null, window.location.search)
  };
}

export default getQueryUtils;
