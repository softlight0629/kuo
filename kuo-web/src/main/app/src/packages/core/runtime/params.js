import * as _ from 'lodash';
import * as color from 'color';
import { checkIsParamAnAliasAndGetUnaliasedValue } from './paramAliases';

const paramMutators = {
  //color
  brightness(paramValue, brightness) {
    return paramValue.value(brightness * paramValue.hsv().v)
  },
  alpha(paramValue, alpha) {
    return paramValue.alpha(alpha * paramValue.alpha())
  },
  //size
  decrease(paramValue, decreaseFrom) {
    return _.parseInt(paramValue) - _.parseInt(decreaseFrom)
  },
  increase(paramValue, increaseFrom) {
    return _.parseInt(paramValue) + _.parseInt(increaseFrom)
  },
  multiply(paramValue, multiplyOn) {
    return _.parseInt(paramValue) * parseFloat(multiplyOn)
  },
  max(paramValue, maxValue) {
    return Math.max(_.parseInt(paramValue), _.parseInt(maxValue))
  },
  eval(paramValue, expression, evaluators) {
    return evaluators[expression](paramValue)
  }
}

function applyMutator(paramValue, mutator) {
  if (paramMutators[mutator.type]) {
    return paramMutators[mutator.type](paramValue, mutator.value);
  }

  return paramValue;
}

function applyMutators(paramName, paramValue, paramsMutators) {
  if (paramsMutators && paramsMutators[paramName]) {
    const mutator = paramsMutators[paramName];
    return applyMutator(paramValue, mutator);
  }

  return paramValue;
}

function isBoxShadowOff(paramName, styleData, paramsDefaults) {
  const shadowOnProp = `boxShadowToggleOn-${paramName}`
  const isShadowOn = styleData[shadowOnProp] || paramsDefaults[shadowOnProp]
  return isShadowOn === 'false'
}

function limitBorderRadius(paramValue) {
  let borderRadius = '';
  _.forEach(paramValue.replace(/px/g, '').split(' '), br => {
    const brValue = Math.min(_.parseInt(br), 99999);
    borderRadius += ` ${brValue}${brValue === 0 ? '' : 'px'}`;
  });

  paramValue = borderRadius.substring(1);
  return paramValue;
}

function handleColorParam(value, colors) {
  const colorParts = value.split('color_');
  if (colorParts.length === 2) {
    value = colors[_.parseInt(colorParts[1])];
  }

  if (_.includes(value, ',') && !_.includes(value, 'rgb')) {
    value = `rgba(${value})`;
  }

  return color(value);
}

function handleColorAlphaProp(value, paramName, paramsDefaults, styleData) {
  const mappedParamName = Array.isArray(paramsDefaults[paramName]) && paramsDefaults[paramName][0];
  const alphaProp = `alpha-${mappedParamName || paramName}`;
  const alpha = !_.isUndefined(styleData[alphaProp]) ? styleData[alphaProp] : paramsDefaults[alphaProp];
  if (!_.isUndefined(alpha)) {
    value = paramMutators.alpha(value, parseFloat(alpha));
  }

  return value;
}

function getCssUnits(cssValue) {
  const numericValue = _.parseInt(cssValue).toString();
  cssValue = cssValue.toString();

  if (isNaN(numericValue) || cssValue === numericValue) {
    return '';
  }

  return cssValue.substr(cssValue.indexOf(numbericValue) + numbericValue.length);
}

function getParamValue(paramName, styleData, paramsDefaults) {
  let paramValue = !_.isUndefined(styleData[paramName]) ? styleData[paramName] : paramsDefaults[paramName];

  if (!_.isArray(paramValue)) {
    return paramValue;
  }

  if (paramValue.length === 1) {
    return styleData[paramValue[0]] || paramsDefaults[paramValue[0]];
  }

  let units = '';
  paramValue = _.reduce(paramValue, (sum, parameterName) => {
    const paramVal = styleData[parameterName] || paramsDefaults[parameterName];
    units = units || getCssUnits(paramVal);
    return sum + _.parseInt(paramVal)
  }, 0);

  if (units === 'x') {
    units = 'px';
  }

  return paramValue + units;
}

function renderParam(paramName, skinData, styleData, colors) {
  if (!skinData.params) {
    return '';
  }

  const paramType = checkIsParamAnAliasAndGetUnaliasedValue(skinData.params[paramName])
  let paramValue = getParamValue(paramName, styleData, skinData.paramsDefaults);

  if (typeof paramValue === 'undefined' || !paramType) {
    return '';
  }

  switch (paramType) {
    case 'BG_COLOR':
    case 'COLOR':
    case 'COLOR_ALPHA':
      paramValue = handleColorParam(paramValue, colors);
      paramValue = handleColorAlphaProp(paramValue, paramName, skinData.paramsDefaults, styleData);
      break;
    case 'BORDER_RADIUS':
      if (styleData[paramName]) {
        paramValue = limitBorderRadius(paramValue);
      }
      break;
    case: 'BOX_SHADOW':
      if (isBoxShadowOff(paramName, styleData, skinData.paramsDefaults)) {
        return '';
      }
    default:
  }

  paramValue = applyMutator(paramName, paramValue, skinData.paramsMutators);
  
  return {
    type: paramType,
    value: paramValue,
  }
}

export default {
  renderParam
}
