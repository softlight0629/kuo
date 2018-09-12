function _getUserAgent(window) {
    return window.navigator && window.navigator.userAgent
}

function create(window) {
    const browserDetection = require('./browserDetection')
    const detected = browserDetection(_getUserAgent(window))

    function getUserAgent() {
        return _getUserAgent(window)
    }

    function isMacintosh() {
        return !!detected.os.mac
    }

    function isChrome() {
        return !!detected.browser.chrome
    }

    function isIE() {
        return !!detected.browser.ie
    }

    function isEdge() {
        return !!detected.browser.edge
    }

    function isSafari() {
        return !!detected.browser.safari
    }

    function isSpecialKeyPressed(event) {
        if (isMacintosh()) {
            return event.metaKey
        }
        return event.ctrlKey
    }

    function getDevicePixelRatio() {
        return window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI
    }

    function getKeyboardSpecialKey() {
        return {
            label: isMacintosh() ? '⌘' : 'Ctrl',
            value: isMacintosh() ? 'command' : 'ctrl'
        }
    }

    return {
        isMacintosh,
        isChrome,
        isIE,
        isEdge,
        isSafari,
        getUserAgent,
        getDevicePixelRatio,
        isSpecialKeyPressed,
        getKeyboardSpecialKey
    }
}

export default {
    create
}
