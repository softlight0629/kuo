import * as _ from 'lodash';
import cssUtils from '@packages/coreUtils/core/cssUtils';
import CONSTANTS from './constants';

const GOOGLE_FONT_SERVICE_URL = '//fonts.googleapis.com/css?family='

const createFontUtils = fontsMetadata => {
    const parseFontStr = cssUtils.parseFontStr

    function getFontsUrlWithParams(fontNamesObject, documentType, characterSets) {
        const fontsFamiliesArray = _.isArray(fontNamesObject) ? fontNamesObject : _.keys(fontNamesObject)
        const query = getFontsQuery(fontsFamiliesArray, documentType, characterSets)
        if (query) {
            return GOOGLE_FONT_SERVICE_URL + query
        }

        return ''
    }

    function getFontsQuery(fontsFamiliesArray, documentType, characterSets) {
        let fontQuery = ''
        const permissions = getFontsPermissions(documentType)
        _.forEach(fontsFamiliesArray, function (fontFamily) {
            const font = fontsMetadata[fontFamily]
            if (font && font.cdnName && _.includes(permissions, font.permissions)) {
                fontQuery += `${font.cdnName}:n,b,i,bi|`
            }
        })
        if (fontQuery === '') {
            return null
        }
        if (characterSets) {
            fontQuery += `&subset=${characterSets.join(',')}`
        }
        return fontQuery
    }

    function getFontsPermissions(documentType) {
        const permissions = ['all', 'legacy']
        if (documentType === 'WixSite') {
            permissions.push('studio')
        }
        return permissions
    }

    function getWixStoredFontsCssUrlsWithParams(baseUrl, characterSets, altBaseUrl) {
        if (altBaseUrl && /localhost|127.0.0.\d/.test(baseUrl)) {
            baseUrl = altBaseUrl
        }
        baseUrl = baseUrl.replace(/^http:/, '')
        const fontsCssBaseUrl = `${baseUrl.replace(/\/$/, '')}/static/css/user-site-fonts/`
        return _.map(characterSets, cs => `${fontsCssBaseUrl + cs}.css`)
    }

    function parseStyleFont(fontStyleName, themeFonts, themeColors) {
        if (themeFonts[fontStyleName]) {
            const fontObject = parseStringFont(themeFonts[fontStyleName])
            return parseThemeFontColor(fontObject, themeColors)
        }
        return parseStringFont(fontStyleName)
    }

    function parseStringFont(fontValue) {
        const fontObject = parseFontStr(fontValue)
        fontObject.fontWithFallbacks = getFontFamilyWithFallbacks(fontObject.family)
        return fontObject
    }

    function getFontFamilyWithFallbacks(fontName) {
        const font = fontsMetadata[fontName.toLowerCase()]
        const fontFamily = font && font.fontFamily
        let fallbacks

        if (font) {
            fallbacks = fontFamily
            if (font.fallbacks !== '') {
                fallbacks += `,${font.fallbacks}`
            }
            fallbacks += `,${font.genericFamily}`
        } else {
            fallbacks = fontName
        }

        return formatFallbackList(fallbacks)
    }

    function formatFallbackList(fallbacks) {
        //surround fonts with quotes if font name contains spaces or non-latin chars
        return _(fallbacks)
            .split(',')
            .invokeMap('replace', /.*[^\w\d\-].*/, '"$&"')
            .join(',')
    }

    function parseThemeFontColor(fontObject, themeColors) {
        const fontColor = fontObject.color && fontObject.color.match(/{([^}]+)}/)
        if (themeColors && fontColor && themeColors[fontColor[1]]) {
            fontObject.cssColor = themeColors[fontColor[1]]
        } else {
            fontObject.cssColor = fontObject.color
        }
        return fontObject
    }

    function getFontFamily(fontStr) {
        return fontStr.split(' ')[4]
    }

    function fontToCSSWithColor(font, themeColors) {
        const fontVal = getFontVal(font)
        const fontCss = getFontCSSFromFontString(fontVal)
        const colorCss = getColorCSSFromFontString(fontVal, themeColors)

        return fontCss + colorCss
    }

    function getFontVal(fontString, themeData) {
        if (_.startsWith(fontString, 'font_')) {
            const fontParts = fontString.split('font_')
            if (fontParts.length === 2) {
                return themeData.font[fontParts[1]]
            }
        }
        return fontString
    }

    function getFontFallback(fontFamily) {
        const cleanFontName = fontFamily.replace(/\+/g, ' ').toLowerCase()
        const fontMeta = fontsMetadata[cleanFontName]
        if (fontMeta) {
            let fallback = fontMeta.fallbacks
            if (fallback) {
                fallback += ','
            }
            fallback += fontMeta.genericFamily
            return fallback
        }

        return ''
    }

    function getFontCSSFromFontString(fontVal) {
        let font = fontVal
        if (_.includes(font, '#')) {
            font = font.slice(0, font.indexOf('#'))
        }
        font = font.replace(/\{color_\d+\}/, '')
        const fontFamily = getFontFamily(font)
        const fullFontFamily = getFullFontFamily(fontFamily)
        const childFont = font.replace(fontFamily, fullFontFamily)
        return `${childFont};`
    }

    function getFullFontFamily(fontFamily) {
        let fullFontFamily = fontFamily
        const fallback = getFontFallback(fontFamily)
        if (fallback) {
            fullFontFamily = `${fullFontFamily},${fallback}`
        }

        //surround fonts with quotes if font name contains spaces or non-latin chars
        fullFontFamily = fullFontFamily.replace(/[^,]*[^\w,\d\-][^,]*/g, fontFamilyStr => `'${fontFamilyStr.replace(/\+/g, ' ')}'`)
        return fullFontFamily
    }

    function getColorCSSFromFontString(fullFontString, themeColors) {
        const colorParts = fullFontString.match(/{color_(\d+)}/)
        if (!colorParts) {
            const colorFromFontString = fullFontString.match(/#[A-Z0-9]{3,6}/)
            if (colorFromFontString) {
                return `color:${colorFromFontString[0]};`
            }
            return ''
        }
        const colorIndexInTheme = colorParts[1]
        const colorFromTheme = themeColors[colorIndexInTheme]
        if (colorFromTheme.indexOf('#') === 0) {
            return `color:${colorFromTheme};`
        }
        return `color:rgba(${colorFromTheme});`
    }

    function getFontFamilyPermissions(fontFamily) {
        const fontDef = _.find(fontsMetadata, {fontFamily})
        return fontDef && fontDef.permissions
    }

    function getFontsMetaData() {
        return fontsMetadata
    }

    function collectFontsFromTextDataArray(textHtml) {
        // const doc = new fragment.DOMParser().parseFromString(textHtml, 'text/html')
        // return _(doc.querySelectorAll('*'))
        //     .toArray()
        //     .map(el => _.get(el, ['style', 'font-family']))
        //     .compact()
        //     .invokeMap('trim')
        //     .value()
    }

    function isUploadedFontFamily(fontFamilyStr) {
        if (_.isNil(fontFamilyStr) || _.isEmpty(fontFamilyStr)) {
            return false
        }

        const fontName = _.head(fontFamilyStr.split(','))
        return /^wfont_[0-9a-f]{6}_[0-9a-f]{32}/.test(fontName)
    }

    function getUploadedId(uploadedFonStr) {
        return isUploadedFontFamily(uploadedFonStr) ?
            uploadedFonStr.replace(CONSTANTS.LONG_UPLOADED_FONT_PREFIX, '').trim() :
            null
    }

    function getUploadedFontFaceStyles(fontFamiliesArr, mediaRootUrl) {
        const fixedMediaRootUrl = fixMediaRootUrl(mediaRootUrl)
        return _(fontFamiliesArr)
            .filter(isUploadedFontFamily)
            .reduce((accm, font) => accm + getUploadFontFace(font, fixedMediaRootUrl), '')
    }

    function fixMediaRootUrl(mediaRootUrl) {
        return _.startsWith(mediaRootUrl, 'http://') ? mediaRootUrl.replace('http://', 'https://') : mediaRootUrl
    }

    function getUploadFontFace(font, mediaRootUrl) {
        const fontName = _.head(font.split(','))
        const fontId = getUploadedId(fontName)
        const shortFontName = getShortUploadedFontFamily(fontName)
        const fontFaceString = `@font-face \{
font-family: ${shortFontName};
src: url("${mediaRootUrl}ufonts/${fontId}/woff/file.woff") format("woff"),
url("${mediaRootUrl}ufonts/${fontId}/woff2/file.woff2") format("woff2"),
url("${mediaRootUrl}ufonts/${fontId}/ttf/file.ttf") format("ttf");
}
`
        return fontFaceString
    }

    function getShortUploadedFontFamily(font) {
        return `wf_${/^wfont_[0-9a-f]{6}_([0-9a-f]{25})[0-9a-f]{7}/.exec(font)[1]}`
    }

    function getMetadata(fontNames) {
        return _.compact(_.map(fontNames, fontName => getFontsMetaData()[fontName]))
    }

    function getFontFamilyByStyleId(generalThemeData, stylesId) {
        const fontStyles = generalThemeData.font
        const fontIndex = parseInt(stylesId.substring(stylesId.indexOf('_') + 1), 10)
        const fontStyleString = fontStyles[fontIndex]
        let fontFamily = ''
        if (fontStyleString) {
            fontFamily = parseFontStr(fontStyleString).family.toLowerCase()
        }
        return fontFamily
    }

    function getUploadedFontValue(fontId) {
        const fontName = `${CONSTANTS.LONG_UPLOADED_FONT_PREFIX + fontId}`
        const fontShortName = getShortUploadedFontFamily(fontName)
        return [fontName, fontShortName].join(',')
    }

    return {
        parseFontStr,
        getFontsUrlWithParams,
        getWixStoredFontsCssUrlsWithParams,
        parseStyleFont,
        getFontFamilyWithFallbacks,
        getFontFamily,
        fontToCSSWithColor,
        getFontFallback,
        getFontFamilyPermissions,
        getFontsMetaData,
        collectFontsFromTextDataArray,
        isUploadedFontFamily,
        getUploadedId,
        getUploadedFontFaceStyles,
        getMetadata,
        getFontFamilyByStyleId,
        getUploadedFontValue,
        getShortUploadedFontFamily
    }
}

export default createFontUtils;
