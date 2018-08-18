import { PictureMedia, VideoMedia, AudioMedia } from '../type';

function _getMedia(mediaType) {

  if (mediaType === 'picture') {
    return PictureMedia;
  }

  if (mediaType === 'video') {
    return VideoMedia;
  }

  if (mediaType === 'audio') {
    return AudioMedia;
  }
}

export default {

  create: (option) => {
    const Media = _getMedia(option.mediaType);
    return new Media(option);
  }
};
