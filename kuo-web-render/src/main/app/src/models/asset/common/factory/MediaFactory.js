import { Picture, Video, Audio } from '../../../media';

function _getMedia(type) {

  if (type === 'picture') {
    return Picture;
  }

  if (type === 'video') {
    return Video;
  }

  if (type === 'audio') {
    return Audio;
  }
}

export default {

  create: (option) => {
    const Media = _getMedia(option.mediaType);
    return new Media(option);
  }
};
