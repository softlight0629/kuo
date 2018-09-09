'use strict'
const _ = require('lodash')
const cookieUtils = require('./cookieUtils')
const urlUtils = require('./urlUtils')

/**
 * @param {utils.Store.requestDescriptor} request
 * @param {function} doneCallback
 * @param {function} fetchFunc
 */
function createAndSendRequest(request, doneCallback, fetchFunc) {
    const fallbackUrls = getUrlsArray(request)

    if (_.isUndefined(request.maxTimeouts)) {
        request.maxTimeouts = 1
    }

    if (_.isUndefined(request.current)) {
        request.current = 0
    } else {
        request.current++
    }
    const url = fallbackUrls[request.current]
    if (!url) {
        doneCallback(null, 'missing URL')
    }

    const requestToSend = {
        url,
        dataType: request.dataType || 'json',
        type: 'GET',
        cache: request.cache,
        syncCache: request.syncCache,
        name: request.name,
        failSsrOnError: request.failSsrOnError
    }
    if (request.data) {
        requestToSend.type = 'POST'
        requestToSend.contentType = 'application/json; charset=UTF-8'
        requestToSend.data = JSON.stringify(request.data)
        if (urlUtils.parseUrl(requestToSend.url).hostname === 'editor.wix.com') {
            requestToSend.headers = {'X-XSRF-TOKEN': cookieUtils.getCookie('XSRF-TOKEN')}
        }
    }

    if (requestToSend.dataType === 'jsonp' && request.jsonpCallback) {
        requestToSend.jsonpCallback = request.jsonpCallback
    }

    if (request.requestTimeout && request.current < request.maxTimeouts) {
        requestToSend.timeout = request.requestTimeout
    }

    // If this request returns with an error, request the next fallback url
    requestToSend.error = function (xhrRequest, errName, err) {
        if (errName === 'timeout') {
            _.invoke(request, 'ontimeout')
        }
        _.invoke(request, 'onUrlRequestFailure', requestToSend.url, _.get(xhrRequest, 'status'), {
            name: errName,
            status: _.get(xhrRequest, 'status'),
            responseText: _.get(xhrRequest, 'responseText')
        })
        if (fallbackUrls.length && request.current < fallbackUrls.length - 1) {
            createAndSendRequest(request, doneCallback, fetchFunc)
        } else {
            // TODO - consider collecting all errors for debug purposes.
            doneCallback(xhrRequest.status, err || errName)
        }
    }
    requestToSend.success = function (resData, status, xhr) {
        if (_.isFunction(request.isValidResponse) && !request.isValidResponse(resData)) {
            //420 = our made up xhr status code for invalid responses. The content returned from the server/statics wasn't real/valid
            requestToSend.error({status: 420}, 'error')
            return
        }

        const headersStr = _.invoke(xhr, 'getAllResponseHeaders') || ''
        const headersObj = parseResponseHeaders(headersStr)
        doneCallback(resData, null, headersObj)
    }

    _.invoke(request, 'onBeforeFetch')

    fetchFunc(requestToSend)
}

function wrappedFetch(...args) {
    if (args.length === 1) {
        args.push({credentials: 'same-origin'})
    }

    if (args[1] && args[1].method === 'POST' && urlUtils.parseUrl(args[0]).hostname === 'editor.wix.com') {
        args[1].headers = args[1].headers || new Headers()
        args[1].headers.set('X-XSRF-TOKEN', cookieUtils.getCookie('XSRF-TOKEN'))
    }

    return fetch(...args)
        .then(response => {
            if (response.ok) {
                return response
            }
            return Promise.reject(response)
        })
}

function fetchJson(...args) {
    return wrappedFetch(...args)
        .then(response => response.json())
}

function getUrlsArray(request) {
    let urlsArray = []

    if (request.url) {
        urlsArray.push(request.url)
    }
    if (request.urls && _.isArray(request.urls)) {
        urlsArray = urlsArray.concat(request.urls)
    }

    return urlsArray
}

/**
 * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
 * headers according to the format described here:
 * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
 * This method parses that string into a user-friendly key/value pair object.
 * Taken from here: https://gist.github.com/monsur/706839
 */
function parseResponseHeaders(headersStr) {
    const headersObj = {}

    if (!headersStr) {
        return headersObj
    }

    const headersPairs = headersStr.split('\n')
    _.forEach(headersPairs, headerPair => {
        const colonIndex = headerPair.indexOf('\u003a\u0020') // Can't use split() here because it does the wrong thing if the header value has the string ": " in it.
        if (colonIndex > 0) {
            const key = headerPair.substring(0, colonIndex)
            headersObj[key] = headerPair.substring(colonIndex + 2)
        }
    })

    return headersObj
}

module.exports = {
    createAndSendRequest,
    fetchJson,
    fetch: wrappedFetch,
    getUrlsArray,
    parseResponseHeaders
}
