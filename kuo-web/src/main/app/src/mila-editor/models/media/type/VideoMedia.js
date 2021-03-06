import { observable } from 'mobx';
import MediaBase from '../core/MediaBase';

class VideoMedia extends MediaBase {

  @observable cover;

  constructor(option) {
    super(option);
    this.cover = option.cover;
    this.mediaType = option.mediaType;
  }

}

export default VideoMedia;
