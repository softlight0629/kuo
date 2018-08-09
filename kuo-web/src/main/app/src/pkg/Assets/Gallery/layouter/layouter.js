import utils from './utils';
import Item from './item';
import Group from './group';
import Strip from './strip';
import Column from './column';

class Layouter {

  constructor(layoutParams) {
    this.ready = false;
    this.pointer = 0;
    this.layoutItems = [];

    this.findNeighborItem = this.findNeighborItem.bind(this);

    this.updateParams(layoutParams);
    this.createLayout();
  }

  updateParams(layoutParams) {
    this.srcItems = layoutParams.items;
    this.styleParams = utils.convertStyleParams(layoutParams.styleParams);
    this.container = utils.convertContainer(layoutParams.container, this.styleParams);
    this.showAllItems = layoutParams.showAllItems;
  }

  verifyGalleryState() {
    if (!this.container.galleryWidth) {
      this.ready = false;
      this.reason = 'galleryWidth is undefined or 0';
      return false;
    }

    if (!this.styleParams.gallerySize) {
      this.ready = false;
      this.reason = 'gallerySize is undefined or 0';
      return false;
    }

    return true;
  }

  calcNumberOfColumns(galleryWidth, gallerySize) {
    var numOfCols = 1;
    if (this.styleParams.isVertical) {
      if (this.styleParams.fixedColumns > 0) {
        numOfCols = this.styleParams.fixedColumns;
      } else {
        numOfCols = Math.ceil(galleryWidth / gallerySize) || 1;
      }
    } else {
      numOfCols = 1;
    }
    return numOfCols;
  }

  findShortestColumn(columns, groupIdx) {
    let minCol = columns[0];
    if (this.styleParams.cubeImages) {
      minCol = columns[groupIdx % columns.length];
    } else {
      let minColH = -1;

      for (const column of columns) {
        const colH = column.height;
        if (colH < minColH || minColH < 0) {
          minColH = colH;
          minCol = column;
        }
      }
    }

    return minCol;
  }

  createLayout(layoutParams) {
    if (typeof layoutParams !== 'undefined') {
      this.updateParams(layoutParams);
    }

    if (!this.verifyGalleryState()) {
      return false;
    }

    this.pointer = 0;
    this.firstGroup = false;
    this.layoutItems = [];
    this.groups = [];
    this.strips = [];

    let gallerySize = Math.floor(this.styleParams.gallerySize) + Math.ceil(2 * (this.styleParams.imageMargin - this.styleParams.galleryMargin));
    let galleryWidth = Math.floor(this.container.galleryWidth);
    let maxGroupSize = this.maxGroupSize;

    let groupIdx = 0;
    let item = {};

    let groupItems = [];
    let group = 0;
    let bounds = this.container.bounds || {};

    let strip = new Strip({
      idx: 1,
      container: this.container,
      styleParams: this.styleParams,
    });

    let galleryHeight = 0;
    let numOfCols = this.calcNumberOfColumns(galleryWidth, gallerySize);
    gallerySize = this.styleParams.isVertical ? Math.floor(galleryWidth / numOfCols) : gallerySize;

    let columns = Array(numOfCols).fill(0).map((column, idx) => {
      return new Column(idx, gallerySize, this.styleParams.cubeRatio);
    });
    columns[numOfCols - 1].width += galleryWidth - gallerySize * numOfCols;
    columns[numOfCols - 1].cubeRatio = this.styleParams.cubeRatio * (columns[numOfCols - 1].width / gallerySize);

    let maxLoops = this.srcItems.length * 10;

    while (this.srcItems[this.pointer]) {

      maxLoops--;
      if (maxLoops <= 0) {
        console.error('Cannot create layout, maxLoops reached!!!');
        return false;
      }

      item = new Item({
        idx: this.pointer,
        inGroupIdx: groupItems.length + 1,
        scrollTop: galleryHeight,
        dto: this.srcItems[this.pointer],
        container: this.container,
        styleParams: this.styleParams,
      });

      this.layoutItems[this.pointer] = item;

      groupItems.push(item);
      if (groupItems.length < maxGroupSize && this.srcItems[this.pointer + 1]) {
        this.pointer++;
        continue;
      }

      group = new Group({
        idx: groupIdx,
        stripIdx: strip.idx,
        inStripIdx: strip.groups.length + 1,
        top: galleryHeight,
        items: groupItems,
        isLastItems: this.isLastImages,
        gallerySize: gallerySize,
        showAllItems: this.showAllItems,
        container: this.container,
        styleParams: this.styleParams,
      });
      this.groups[groupIdx] = group;

      this.pointer += group.realItems.length - groupItems.length;

      groupIdx++;
      groupItems = [];

      // resize and fit the group in the strip / column
      if (!this.styleParams.isVertical) {

        //---------------------| STRIPS GALLERY |----------------------//


        if (strip.isFull(group, this.isLastImage)) {
          // close the current strip
          strip.resizeToHeight(galleryWidth / strip.ratio);
          strip.setWidth(galleryWidth);
          galleryHeight += strip.height;
          columns[0].addGroups(strip.groups);
          this.strips.push(strip);
          console.log('push1.......');

          // open a new strip
          strip = new Strip({
            idx: strip.idx + 1,
            container: this.container,
            styleParams: this.styleParams,
          });

          // rest the group (this group will be rebuilt)
          this.pointer -= group.realItems.length - 1;
          groupIdx--;
          continue;
        }

        // add the group to the (current/new) group
        group.setTop(galleryHeight);
        group.stripIdx = strip.idx;
        strip.ratio += group.ratio;
        // strip.height = Math.min(gallerySize, (galleryWidth / strip.ratio));
        strip.height = galleryWidth / strip.ratio;
        strip.setWidth(galleryWidth);
        strip.addGroup(group);

        if (this.isLastImage && strip.hasGroups) {
          if (this.styleParams.oneRow) {
            strip.height = this.container.galleryHeight + (this.styleParams.imageMargin - this.styleParams.galleryMargin);
          } else if (gallerySize * 1.5 < strip.height ) {
            //stretching the strip to the full width will make it too high - so make it as high as the gallerySize and not stretch
            strip.markAsIncomplete();
          }

          strip.resizeToHeight(strip.height);
          galleryHeight += strip.height;
          columns[0].addGroups(strip.groups);
          this.strips.push(strip);
          console.log('push2.......');
        }
      } else {

        //---------------------| COLUMNS GALLERY |----------------------//

        // find the shortest column
        let minCol = this.findShortestColumn(columns, this.groups.length - 1);

        // resize the group and images
        group.fixItemsRatio(minCol.cubeRatio); // fix last column's items ratio (caused by stretching it to fill the screen)
        group.resizeToWidth(minCol.width);
        group.round();

        // update the group's position
        group.setTop(minCol.height);
        group.setLeft(minCol.idx * gallerySize);

        // add the image to the column
        minCol.addGroup(group)

        // add the image height to the column
        minCol.height += group.totalHeight;

        if (galleryHeight < minCol.height) {
          galleryHeight = minCol.height;
        }
      }

      // set the group visibility
      if (!this.gotScrollEvent && this.pointer < 10) {
        // until the first scroll event, make sure the first 10 groups are displayed
        group.calcVisibilities(true);
      } else {
        group.calcVisibilities(bounds);
      }

      if (!this.firstGroup) {
        this.firstGroup = group;
      }

      // advance the this.pointer
      this.pointer++;
    }

    this.lastGroup = group;
    this.columns = columns;
    this.colWidth = Math.floor(galleryWidth / numOfCols);
    this.height = galleryHeight - (this.styleParams.imageMargin - this.styleParams.galleryMargin) * 2;

    this.calcVisibilities(bounds);

    this.ready = true;

    return this.scheme;
  }

  calcVisibilities(bounds) {
    for (const column of this.columns) {
      for (const group of column.groups) {
        group.calcVisibilities(bounds);
      }
    }

    return this.scheme;
  }

  lastVisibleItemIdxInHeight(height) {
    for (var i = this.items.length - 1; i >= 0; i--) {
      var item = this.items[i];
      var isVisible = item.offset.top < height;
      if (isVisible) {
        return i;
      }
    }
    return this.items.length - 1;
  }

  lastVisibleItem() {
    //the item must be visible and about the show more button
    return this.lastVisibleItemIdxInHeight(this.container.galleryHeight - 100);
  }

  findNeighborItem(itemIdx, dir) {
    var _this2 = this;

    var currentItem = this.layoutItems[itemIdx];

    var neighborItem = void 0;

    var findClosestItem = function findClosestItem(currentItemX, currentItemY, condition) {
      var minDistance = null;
      var minDistanceItem = {};

      var itemY = void 0;
      var itemX = void 0;
      var distance = void 0;

      // each(slice(this.layoutItems, itemIdx - 50, itemIdx + 50), (item) => {
      _this2.layoutItems.forEach(function (item) {
        itemY = item.offset.top + item.height / 2;
        itemX = item.offset.left + item.width / 2;
        distance = Math.sqrt(Math.pow(itemY - currentItemY, 2) + Math.pow(itemX - currentItemX, 2));
        if ((minDistance === null || distance > 0 && distance < minDistance) && condition(currentItemX, currentItemY, itemX, itemY)) {
          minDistance = distance;
          minDistanceItem = item;
        }
      });
      return minDistanceItem;
    };

    switch (dir) {
      case 'up':
        neighborItem = findClosestItem(currentItem.offset.left + currentItem.width / 2, currentItem.offset.top, function (curX, curY, itmX, itmY) {
          return itmY < curY;
        });
        break;

      case 'left':
        neighborItem = findClosestItem(currentItem.offset.left, currentItem.offset.top + currentItem.height / 2, function (curX, curY, itmX) {
          return itmX < curX;
        });
        break;

      case 'down':
        neighborItem = findClosestItem(currentItem.offset.left + currentItem.width / 2, currentItem.offset.bottom, function (curX, curY, itmX, itmY) {
          return itmY > curY;
        });
        break;

      default:
      case 'right':
        neighborItem = findClosestItem(currentItem.offset.right, currentItem.offset.top + currentItem.height / 2, function (curX, curY, itmX) {
          return itmX > curX;
        });
        break;

    }

    if (neighborItem.idx >= 0) {
      return neighborItem.idx;
    } else {
      console.warn('Could not find offset for itemIdx', itemIdx, dir);
      return itemIdx; //stay on the same item
    }
  }

  get isLastImage() {
    return !this.srcItems[this.pointer + 1];
  }

  get isLastImages() {
    if (this.styleParams.layoutsVersion > 1) {
      //layouts version 2+
      return !this.srcItems[this.pointer + 1];
    } else {
      //Backwards compatibility
      return !this.srcItems[this.pointer + 3];
    }
  }

  get ImagesLeft() {
    return this.srcItems.length - this.pointer - 1;
  }

  get maxGroupSize() {
    var _maxGroupSize = 1;
    try {
      var groupTypes = typeof this.styleParams.groupTypes === 'string' && this.styleParams.groupTypes.length > 0 ? this.styleParams.groupTypes.split(',') : this.styleParams.groupTypes;
      _maxGroupSize = groupTypes.reduce(function (curSize, groupType) {
        return Math.max(curSize, parseInt(groupType));
      }, 1);
      _maxGroupSize = Math.min(_maxGroupSize, this.styleParams.groupSize);
    } catch (e) {
      console.error('couldn\'t calculate max group size - returing 3 (?)', e);
      _maxGroupSize = 3;
    }
    return _maxGroupSize;
  }

  get items() {
    return this.layoutItems;
  }

  get scheme() {
    return {
      items: this.items.map(function (item) {
        return item.scheme;
      }),
      groups: this.groups.map(function (group) {
        return group.scheme;
      }),
      strips: this.strips.map(function (strip) {
        return strip.scheme;
      }),
      columns: this.columns.map(function (column) {
        return column.scheme;
      }),
      height: this.height
    };
  }
}

export default Layouter;
