

// 能从这里来渲染出一个 带样式的 dom
// 特点，属性自定义，能够属性传入进入，就能渲染好一个 dom 出来
// 先简易版本
const DefaultScreen = props => {
  const params = {
    bg: 'BG_COLOR_ALPHA',
    shd: 'BOX_SHADOW',
    brwt: 'SIZE',
    brd: 'BORDER_COLOR_ALPHA',
    brwb: 'SIZE',
    bgctr: 'BG_COLOR_ALPHA',
    rd: 'BORDER_RADIUS'
  }

  const paramsDefaults = {
    bg: 'color_11',
    shd: '0 0 5px rgba(0, 0, 0, 0.7)',
    brwt: '0',
    brd: 'color_15',
    brwb: '0',
    bgctr: 'color_11',
    rd: '0'
  }

  const css = {
    screenWithBackground: ``,
    _bg: 
  }

  return (
    <div></div>
  )
};

export default {
  'mila.viewer.skins.screenwidthcontainer.DefaultScreen': DefaultScreen,
}
