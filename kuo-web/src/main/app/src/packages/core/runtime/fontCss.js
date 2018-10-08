
import * as _ from 'lodash';
import fontUtils from '@packages/coreUtils/font/fonts';

function getFullFontFamily(fontFamily) {
  let fullFontFamily = fontFamily;
  const fallback = fontUtils.getFontFallback(fontFamily);
  if (fallback) {
    fullFontFamily = `${fullFontFamily},${fallback}`;
  }

  fullFontFamily = fullFontFamily.replace(/[^,]*[^\w,\d\-][^,]*/g, fontFamilyStr => `'${fontFamilyStr.replace(/\+/g, ' ')}'`);
  return fullFontFamily;
}

function getFontCSSFromFontString(fontVal) {
  let font = fontVal
  if (_.includes(font, '#')) {
      font = font.slice(0, font.indexOf('#'))
  }
  font = font.replace(/\{color_\d+\}/, '')
  const fontFamily = fontUtils.getFontFamily(font)
  const fullFontFamily = getFullFontFamily(fontFamily)
  const childFont = font.replace(fontFamily, fullFontFamily)
  return `${childFont};`
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

function fontToCSSWithoutColor(fontString, themeData) {
  const fontVal = getFontVal(fontString, themeData)
  return getFontCSSFromFontString(fontVal)
}

export default {
  fontToCssWithoutColor: fontToCSSWithoutColor,
  getFullFontFamily,
}
