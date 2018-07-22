import { observable, action, computed } from "mobx";
import MediaBase from '../common/MediaBase';

console.log(MediaBase, 'mediab.....');
class PictureMedia extends MediaBase {

  constructor(option) {
    super(option);
    this.width = option.width;
    this.height = option.height;
  }

  @action setPicture(fileUrl) {
    this.fileUrl = fileUrl;
  }
}

export default PictureMedia;