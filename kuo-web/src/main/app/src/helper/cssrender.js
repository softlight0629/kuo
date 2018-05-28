
function hexToRgba(hex, opacity) { 
  return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
}

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

const _border = ({color, opacity = 100, width}) =>
({
  borderColor: hexToRgba(color, opacity/100),
  borderStyle: 'solid',
  borderWidth: `${width}px`,
});

const _corner = ({leftTop, rightTop, leftBottom, rightBottom}) =>
({
  borderTopLeftRadius: `${leftTop}px`,
  borderTopRightRadius: `${rightTop}px`,
  borderBottomLeftRadius: `${leftBottom}px`,
  borderBottomRightRadius: `${rightBottom}px`,
});

const _shadow = ({
  color,
  opacity = 100,
  angle,
  distance,
  size,
  blur,
}) =>
({
  boxShadow: `${(Math.floor(Math.sin(angle * Math.PI / 180)*100) / 100) * distance * -1}px ${(Math.floor(Math.cos(angle * Math.PI / 180)*100) / 100) * distance}px ${blur}px ${size}px ${hexToRgba(color, opacity/100)}`,
});

const _layout = ({align, margin}) => ({textAlign: align, padding: `${margin}px`});
const _textIndent = ({ step }) => ({marginLeft: `${step * 40}px`});
const _textAlign = ({ align }) =>({ textAlign: align });
const _textEffect = ({ effect }) => ({ textShadow: effects[effect] });
const _fill = ({ color, opacity = 100 }) => ({ backgroundColor: hexToRgba(color, opacity/100) });

const cssrender = ({
  fill,
  font,
  border,
  corner,
  shadow,
  textAlign,
  textEffect,
  textIndent,
  layout,
}) => ({
  ...(font ? _font(font) : {}),
  ...(border ? _border(border) : {}),
  ...(corner ? _corner(corner) : {}),
  ...(shadow ? _shadow(shadow) : {}),
  ...(layout ? _layout(layout) : {}),
  ...(fill ? _fill(fill) : {}),
  ...(textIndent ? _textIndent(textIndent) : {}),
  ...(textAlign ? _textAlign(textAlign) : {}),
  ...(textIndent ? _textIndent(textIndent) : {}),
  ...(textEffect ? _textEffect(textEffect) : {}),
});

export default cssrender;
