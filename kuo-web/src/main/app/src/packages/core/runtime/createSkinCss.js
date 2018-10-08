import * as _ from 'lodash';
import params from './params';
import fontCss from './fontCss';

function defaultToPixelUnits(propValue) {
  return isNaN(propValue) ? propValue : `${propValue}px`
}

const paramPropRendering = {
  BORDER_RADIUS: value => `border-radius:${value};`,
  BOX_SHADOW: value => `box-shadow:${value};`,
  FONT: value => `font:${value}`,
  FONT_FAMILY: value => `font-family:${value};`,
  TRANSITION: value => `transition:${value};`,
  INVERTED_ZOOM: value => `zoom:${value};`,
  INVERTED_ZOOM_FIXED: value => `zoom:${value};`,
  ORIENTATION_ZOOM_FIX: value => `zoom:${value};`,
  ZOOM_BY_SCREEN_PROPERTIES: value => `zoom:${value};`,
  DEFAULT: _.identity
}

const paramRendering = {
  BORDER_RADIUS: _.identity,
  TRANSITION: _.identity,
  ALPHA: _.identity,
  BORDER_SIDES: _.constant(''),
  ICON_TYPE: _.constant(''),
  BOX_SHADOW: defaultToPixelUnits,
  SIZE: defaultToPixelUnits,
  FONT: (value, themeData) => fontCss.fontToCSSWithoutColor(value, themeData),
  FONT_FAMILY: value => fontCss.getFullFontFamily(value),
  COLOR: color => color.hexString(),
  BG_COLOR(color) { return color.alpha() > 0 ? color.rgbaString() : 'transparent' },
  COLOR_ALPHA(color) { return color.alpha() > 0 ? color.rgbaString() : 'transparent' },
  INVERTED_ZOOM: (_v, _t, env) => env.siteZoomRatio,
  INVERTED_ZOOM_FIXED: (_v, _t, env) => env.invertedZoomRatio,
  ORIENTATION_ZOOM_FIX: (_v, _t, env) => env.orientationZoomFix,
  ZOOM_BY_SCREEN_PROPERTIES: (_v, _t, env) => env.mobileZoom,
  URL: (value, _t, env) => {
      if (value === 'BASE_THEME_DIRECTORY') {
          return env.baseThemeUrl
      } else if (value === 'WEB_THEME_DIRECTORY') {
          return env.webThemeUrl
      }
      return value
  },
  DEFAULT: _.identity
}

function paramValueToCss(paramValue, paramType, themeData) {
  if (_.isNil(paramValue)) {
    return '';
  }

  const propRender = paramPropRendering[paramType] || paramPropRendering.DEFAULT;
  const valueRender = paramRendering[paramType] || paramRendering.DEFAULT;

  return propRender(valueRender(paramValue, themeData))
}

function getParamSplit(prop, skinData, styleProps, themeData, options) {
  const param = params.renderParam(prop, skinData, styleProps, themeData.color);
  const paramsSplit = param.type === 'SIZE' && _.isString(param.value) ? _.map(param.value.split(' '), value => ({
    value,
    type: 'SIZE',
  })) : [param];

  return _.map(paramsSplit, paramToMap => paramValueToCss(paramToMap.value, paramToMap.type, themeData));
}

function handleCalcWithParams(skinCssValue, skinData, styleProps, themeData, options) {
  return skinCssValue.replace(/calc\(\[([\w\d]+)\] ([-+*\/]) \[([\w\d]+)\]\)/g, (full, prop1, calcSign, prop2) => {
    const param1Split = getParamSplit(prop1, skinData, styleProps, themeData, options)
    const param2Split = getParamSplit(prop2, skinData, styleProps, themeData, options)

    const cssTemplate = _.template('calc(${p1} ${sign} ${p2})')
    const cssValue = []

    for (let i = 0; i < Math.max(param1Split.length, param2Split.length); i++) {
        cssValue.push(cssTemplate({
            p1: param1Split[i] || param1Split[0],
            p2: param2Split[i] || param2Split[0],
            sign: calcSign
        }))
    }

    return cssValue.join(' ')
})
}

function handleParams(skinCssValue, skinData, styleProps, themeData, options) {
  return skinCssValue.replace(/\[(.*?)\]/g, (full, prop) => {
      const param = params.renderParam(prop, skinData, styleProps, themeData.color, options.evals)
      return paramValueToCss(param.value, param.type, themeData, options)
  })
}

function handleAnimationReferences(cssVal, styleId) {
  return cssVal.replace(/((-webkit-)?animation(-name)?: ?)/mgi, `$1${styleId}_`)
}

function renderSkinCssRules(skinData, styleProps, themeData, styleId) {
  return _.map(skinData.css, (cssVal, cssSelector) => {
    const prefix = cssSelector[0] === '@' ? `${styleId}_` : `.${styleId}`;
    cssSelector = cssSelector.replace(/%/g, prefix);

    cssVal = handleCalcWithParams(cssVal, skinData, styleProps, themeData);
    cssVal = handleParams(cssVal, skinData, styleProps, themeData);
    cssVal = handleAnimationReferences(cssVal, styleId);

    return `${cssSelector} {${cssVal}}`;
  }).join('\n');
}


/**
 *
 * @param {Object}skinJsonObj
 * @param {Object}styleData
 * @param {{font: string[], color:string[]}}themeData
 * @param {string} styleId
 * @param {{renderingEnv: envOptions, evals: <string, function>}}options
 * @returns {string} compiled css object
 */
function createSkinCss(skinJsonObj, styleData, themeData, styleId) {
  return renderSkinCssRules(skinJsonObj, styleData, themeData, styleId);
}

export default createSkinCss
