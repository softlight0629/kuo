import * as _ from 'lodash';
import { Group } from '../../layouter';

class GalleryGroup {

  constructor(config) {

    this.uniqueId = utils.generateUUID():
    this.isGalleryGroup = true;

    this.dto = _.merge({}, config.dto);
    _.merge(this, config.dto);

    if (config.scheme) {
      this.processScheme(config.scheme);
    } else {
      this.processScheme((new Group({ dto: config.dto})).scheme)
    }

    if (config.items) {
      this.items = config.items;
    }
  }

  processScheme(scheme) {
    this.id = scheme.id;
    this.idx = scheme.idx;
    this.width = scheme.width;
    this.height = scheme.height;
    this.totalHeight = scheme.totalHeight;
    this.ratio = scheme.ratio;
    this.top = scheme.top;
    this.left = scheme.left;
    this.right = scheme.right;
    this.bottom = scheme.bottom;
    this.visible = scheme.visible;
    this.rendered = scheme.rendered;
    this.required = scheme.required;
  }

  renderProps(galleryConfig) {
    return {
      className: 'group',
      id: this.id,
      idx: this.idx,
      key: this.key,
      type: this.type,
      top: this.top,
      width: this.width,
      height: this.height,
      bottomInfoHeight: this.bottomInfoHeight,
      totalHeight: this.totalHeight,
      items: this.items,
      visible: this.visible,
      rendered: this.rendered,
      required: this.required,
      galleryConfig: galleryConfig
    };
  }

  get key() {
    return 'group' + this.id;
  }
}

export default GalleryGroup;
