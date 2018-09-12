/**
 * Parse a cookie string into an object
 * @param {string} cookieStr - valid cookie string (; separated key=value pairs)
 */
function parseCookieString(cookieStr) {
    const cookieObj = {}
    const cookiesArr = cookieStr.split(/;\s*/)
    for (let i = 0, n = cookiesArr.length; i < n; i++) {
        const cookie = cookiesArr[i].split('=')
        cookieObj[cookie[0]] = cookie[1]
    }
    return cookieObj
}

/**
 * Get a cookie by name
 * @param name
 * @returns {string}
 */
function getCookie(name) {
    if (typeof document === 'undefined') {
        return undefined
    }
    const cookieAsObj = parseCookieString(window.document.cookie)
    return cookieAsObj[name]
}

/**
 * Set a cookie in the browser (client-side only)
 * @param name
 * @param value
 * @param time
 * @param domain
 * @param path
 * @param secure
 */
function setCookie(name, value, time, domain, path, secure) {
    if (typeof document === 'undefined') {
        return
    }

    let cookie = `${name}=${value}`
    if (time) {
        cookie += ';expires='
        if (typeof time === 'number'){
            cookie += (new Date((new Date()).getTime() + time)).toGMTString()
        } else {
            cookie += (new Date(time)).toGMTString()
        }

    }
    cookie += `;path=${path || '/'}`
    if (domain) {
        cookie += `;domain=${domain}`
    }
    if (secure) {
        cookie += ';secure'
    }
    window.document.cookie = cookie
}

/**
 * Delete a cookie from the browser (client-side only)
 * @param {string} name - cookie name
 * @param {string} domain - should delete the cookie from the root domain and not the subdomain
 * @param {string} [path] - the path, if it exists
 */
function deleteCookie(name, domain, path) {
    if (typeof document === 'undefined') {
        return
    }
    domain = domain || (window.document ? window.document.location.host : '')
    setCookie(name, '', 'Thu, 01-Jan-1970 00:00:01', domain, path || '/')
}

const cookieUtils = {
    parseCookieString,
    setCookie,
    getCookie,
    deleteCookie
}

const nop = () => undefined
const nodeCookieUtils = {
    parseCookieString,
    setCookie: nop,
    getCookie: nop,
    deleteCookie: nop
}

export default typeof document === 'undefined' ? nodeCookieUtils : cookieUtils
