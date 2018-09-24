
const CSS_UNITS = {
  pct: '%',
  px: 'px',
  vw: 'vw',
  vh: 'vh'
}

const rgbaRegexp = /^\d+,\d+,\d+,(\d+.?\d*)?/

function toCalcExp(measurements) {
  return `calc(${measurements.join(' + ')})`
}

function getColorsCssString() {}

function parseFontStr() {}


export default {
  getColorsCssString,
  parseFontStr,
}
