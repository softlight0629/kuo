import { observable, action, computed } from "mobx";
import MediaBase from '../core/MediaBase';

class AudioMedia extends MediaBase {

  constructor(option) {
    super(option);
    this.width = option.width;
    this.height = option.height;
  }

  @action setPicture(fileUrl) {
    this.fileUrl = fileUrl;
  }
}

export default AudioMedia;
