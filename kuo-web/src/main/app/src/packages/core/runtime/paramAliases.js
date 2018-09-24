import * as _ from 'lodash';


const SIZE_ALIASES = [
  'BORDER_SIZE',
  'BORDER_TOP_SIZE',
  'BORDER_BOTTOM_SIZE',
  'BORDER_LEFT_SIZE',
  'BORDER_RIGHT_SIZE',
  'PADDING_SIZE',
  'PADDING_TOP_SIZE',
  'PADDING_BOTTOM_SIZE',
  'PADDING_LEFT_SIZE',
  'PADDING_RIGHT_SIZE',
  'MARGIN_SIZE',
  'MARGIN_TOP_SIZE',
  'MARGIN_BOTTOM_SIZE',
  'MARGIN_LEFT_SIZE',
  'MARGIN_RIGHT_SIZE',
  'BG_SIZE',
  'WIDTH_SIZE',
  'HEIGHT_SIZE',
  'TOP_SIZE',
  'BOTTOM_SIZE',
  'LEFT_SIZE',
  'RIGHT_SIZE',
  'TEXT_SIZE'
]
const COLOR_ALIASES = [
  'TEXT_COLOR',
  'BORDER_COLOR'
]
const COLOR_ALPHA_ALIASES = [
  'BORDER_COLOR_ALPHA',
  'BOX_SHADOW_COLOR_ALPHA',
  'TEXT_COLOR_LEGACY_ALPHA'
]

const BG_COLOR_ALIASES = [
  'BG_COLOR_ALPHA'
]

const PARAM_ALIAS_MAP = {}

_.forEach(SIZE_ALIASES, alias => {
    PARAM_ALIAS_MAP[alias] = 'SIZE'
})
_.forEach(COLOR_ALIASES, alias => {
    PARAM_ALIAS_MAP[alias] = 'COLOR'
})
_.forEach(COLOR_ALPHA_ALIASES, alias => {
    PARAM_ALIAS_MAP[alias] = 'COLOR_ALPHA'
})
_.forEach(BG_COLOR_ALIASES, alias => {
    PARAM_ALIAS_MAP[alias] = 'BG_COLOR'
})

const checkIsParamAnAliasAndGetUnaliasedValue = param => {
  if (PARAM_ALIAS_MAP[param]) {
      return PARAM_ALIAS_MAP[param]
  }

  return param
}

export default {
  checkIsParamAnAliasAndGetUnaliasedValue,
  PARAM_ALIAS_MAP,
  SIZE_ALIASES,
  COLOR_ALIASES,
  COLOR_ALPHA_ALIASES,
  BG_COLOR_ALIASES,
}
