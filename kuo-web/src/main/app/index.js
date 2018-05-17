'use strict';

const _ = require('lodash');

function toLeft(items) {
  const minLeft = _.min(items.map(item => item.left));
  return items.map(item => Object.assign({}, item, { left: minLeft }));
}

function toTop(items) {
  const minTop = _.min(items.map(item => item.top));
  return items.map(item => Object.assign({}, item, { top: minTop }));
}

function toCenter(items) {
  const minLeft = _.min(items.map(item => item.left));
  const maxRight = _.max(items.map(item => item.left + item.width));

  const gWidth = maxRight - minLeft;
  const gCenter = (gWidth / 2) + minLeft;

  return items.map(item => Object.assign({}, item, { left: gCenter - (item.width / 2)}));
}

function toRight(items) {
  const maxRight = _.max(items.map(item => item.left + item.width));
  return items.map(item => Object.assign({}, item, { left: maxRight - item.width }))
}

function toBottom(items) {
  const maxBottom = _.max(items.map(item => item.top + item.height));
  return items.map(item => Object.assign({}, item, { top: maxBottom - item.height }))
}

function toMiddle(items) {
  const minTop = _.min(items.map(item => item.top));
  const maxBottom = _.max(items.map(item => item.top + item.height));

  const gHeight = maxBottom - minTop;
  const gMiddle = (gHeight / 2) + minTop;

  return items.map(item => Object.assign({}, item, { top: gMiddle - (item.height / 2)}));
}

const items = [
{
  left: 10,
  top: 20,
  width: 58,
  height: 100,
},
{
  left: 120,
  top: 10,
  width: 72,
  height: 82,
},
{
  left: 30,
  top: 55,
  width: 34,
  height: 68,
},
];

const rects = toMiddle(items)

console.log(rects);
