'use strict';
import * as _ from 'lodash';

module.exports = {

  toLeft(items) {
    const minLeft = _.min(items.map(item => item.left));
    return items.map(item => Object.assign({}, item, { left: minLeft }));
  },

  toTop(items) {
    const minTop = _.min(items.map(item => item.top));
    return items.map(item => Object.assign({}, item, { top: minTop }));
  },

  toCenter(items) {
    const minLeft = _.min(items.map(item => item.left));
    const maxRight = _.max(items.map(item => item.left + item.width));
  
    const gWidth = maxRight - minLeft;
    const gCenter = (gWidth / 2) + minLeft;
  
    return items.map(item => Object.assign({}, item, { left: gCenter - (item.width / 2)}));
  },

  toRight(items) {
    const maxRight = _.max(items.map(item => item.left + item.width));
    return items.map(item => Object.assign({}, item, { left: maxRight - item.width }))
  },

  toBottom(items) {
    const maxBottom = _.max(items.map(item => item.top + item.height));
    return items.map(item => Object.assign({}, item, { top: maxBottom - item.height }))
  },

  toMiddle(items) {
    const minTop = _.min(items.map(item => item.top));
    const maxBottom = _.max(items.map(item => item.top + item.height));
  
    const gHeight = maxBottom - minTop;
    const gMiddle = (gHeight / 2) + minTop;
  
    return items.map(item => Object.assign({}, item, { top: gMiddle - (item.height / 2)}));
  },

  distributeX(items) {
    const minLeft = _.min(items.map(item => item.left));
    const maxRight = _.max(items.map(item => item.left + item.width));
  
    const gWidth = maxRight - minLeft;
    const itemsWidth = items.reduce((sum, item) => sum + item.width, 0);

    const gWidthGap = gWidth - itemsWidth;
    const gGap = gWidthGap / (items.length - 1);

    return items.map((item, i) => i === 0 ? item : Object.assign({}, item, {
      left: items[i].left + items[i].width + gGap,
    }));
  },
};
