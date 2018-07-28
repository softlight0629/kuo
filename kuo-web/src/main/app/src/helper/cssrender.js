import color from '../utility/color';
const { hexToRgba } = color;

const effects = {
  effect_1: 'rgba(255,255,255,0.6) 1px 1px 1px, rgba(0,0,0,0.6) -1px -1px 1px',
  effect_2: 'rgba(0,0,0,0.298) 0px 5px 0px',
  effect_3: 'rgba(0,0,0,0.4) 0px 4px 5px',
  effect_4: 'rgba(0,0,0,0.498) -1px -1px 0px, rgba(0,0,0,0.498) -1px 1px 0px,rgba(0,0,0,0.498) 1px 1px 0px,rgba(0,0,0,0.498) 1px -1px 0px',
  effect_5: 'rgba(255,255,255) -1px -1px 0px, rgba(255,255,255) -1px 1px 0px, rgba(255,255,255) 1px 1px 0px, rgba(255,255,255) 1px -1px 0px',
  effect_6: 'rgba(255,255,255) 0px 0px 6px',
  effect_7: 'rgb(200,200,200) 1px 1px 0px, rgb(180,180,180) 0px 2px 0px, rgb(160,160,160) 0px 3px 0px, rgb(140,140,140, 0.498) 0px 4px 0px, rgb(120,120,120) 0px 0px 0px, rgb(0,0,0,0.498) 0px 5px 10px',
  effect_8: 'rgb(255,255,255) 3px 3px 0px, rgba(0,0,0,0.2) 6px 6px 0px',
  effect_9: 'rgba(10,189,240,0.298) 3px 3px 0px, rgba(254,1,1,0.298) -3px -3px 0px',
}

const _font = ({
  color,
  fontFamily,
  fontSize,
  bgColor,
  bold,
  italic,
  underline,
}) => 
({
  ...(color ? {color} : {}),
  ...(fontFamily ? {fontFamily} : {}),
  ...(fontSize ? {fontSize: `${fontSize}px`} : {}),
  ...(bgColor ? {backgroundColor: bgColor} : {}),
  ...(bold ? {fontWeight: 'bold'} : {}),
  ...(italic ? {fontStyle : 'italic'} : {}),
  ...(underline ? {textDecoration: 'underline'} : {}),
});

const _border = ({color = '#000000', opacity = 100, width}) =>
({
  borderColor: hexToRgba(color, opacity/100),
  borderStyle: 'solid',
  borderWidth: `${width}px`,
});

const _corner = ({leftTop, rightTop, leftBottom, rightBottom}) =>
({
  borderTopLeftRadius: leftTop.endsWith('%') ? leftTop : `${leftTop}px`,
  borderTopRightRadius: rightTop.endsWith('%') ? rightTop : `${rightTop}px`,
  borderBottomLeftRadius: leftBottom.endsWith('%') ? leftBottom : `${leftBottom}px`,
  borderBottomRightRadius: rightBottom.endsWith('%') ? rightBottom : `${rightBottom}px`,
});

const _shadow = ({
  color = '#000000',
  opacity = 100,
  angle,
  distance,
  size,
  blur,
  boxShadow
}) =>
({
  boxShadow: boxShadow ? boxShadow : `${(Math.floor(Math.sin(angle * Math.PI / 180)*100) / 100) * distance * -1}px ${(Math.floor(Math.cos(angle * Math.PI / 180)*100) / 100) * distance}px ${blur}px ${size}px ${hexToRgba(color, opacity/100)}`,
});

const _layout = ({align, margin}) => ({textAlign: align, padding: `${margin}px`});
const _textIndent = ({ step }) => ({marginLeft: `${step * 40}px`});
const _textAlign = ({ align }) =>({ textAlign: align });
const _textEffect = ({ effect }) => ({ textShadow: effects[effect] });
const _fill = ({ color = '#000000', opacity = 100, filter }) => ({ backgroundColor: color === 'transparent' ? color : hexToRgba(color, opacity/100), ...(filter ? { filter: `url(#${filter})` }: {}) });

const _rect = ({ width, height }) => ({ width: `${width}px`, height: `${height}px`})

const cssrender = ({
  fill,
  font,
  border,
  corner,
  shadow,
  textAlign,
  textEffect,
  textIndent,
  rect,
  layout,
}) => ({
  ...(font ? _font(font) : {}),
  ...(border ? _border(border) : {}),
  ...(corner && corner.enable ? _corner(corner) : {}),
  ...(shadow && shadow.enable ? _shadow(shadow) : {}),
  ...(layout ? _layout(layout) : {}),
  ...(fill ? _fill(fill) : {}),
  ...(rect ? _rect(rect) : {}),
  ...(textIndent ? _textIndent(textIndent) : {}),
  ...(textAlign ? _textAlign(textAlign) : {}),
  ...(textIndent ? _textIndent(textIndent) : {}),
  ...(textEffect ? _textEffect(textEffect) : {}),
});

export default cssrender;
