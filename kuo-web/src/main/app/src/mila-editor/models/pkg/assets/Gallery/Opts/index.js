import { observable, action, computed } from 'mobx';

const GALLERY_LAYOUT = {
  Collage: 0,
  Masonry: 1,
  Grid: 2,
  Thumbnails: 3,
  Slider: 4,
  SlideShow: 5,
  Strip: 6,
  Column: 7,
  Magic: 8,
}

class Opts {

  @observable galleryLayout;

  @observable thumbnailPlacement;

  @observable thumbnailSpacing;

  @observable thumbnailSize;

  @observable spacing;

  @observable collageDesity;

  @observable imageOriention;

  @observable scrollDirection;

  @observable imagesPerRow;

  @observable titlePosition;

  @observable thumbnailResize;

  @observable imageRatio;

  @observable thumbnailResize;

  @observable enableLoadMore;

  @observable itemClickAction;

  @observable enableDownload;

  @observable imageQuality;

  @observable enableImageSharpening;

  @observable enableSocialSharing;

  @observable playVideoWhen;

  @observable playbackSpeed;

  @observable enableLoopVideos;

  constructor({
    galleryLayout = 'Collage',
    thumbnailPlacement = 'bottom',
    thumbnailSpacing = 17,
    itemClickAction = 'Expand',
    enableDownload = false,
    imageQuality = 77,
    enableImageSharpening = false,
    enableSocialSharing = false,
    playVideoWhen = 'OnHover',
    playbackSpeed = 'Normal',
    enableLoopVideos = true,
  }) {
    this.galleryLayout = galleryLayout;
    this.thumbnailPlacement = thumbnailPlacement;
    this.thumbnailSpacing = thumbnailSpacing;
    this.itemClickAction = itemClickAction;
    this.enableDownload = enableDownload;
    this.imageQuality = imageQuality;
    this.enableImageSharpening = enableImageSharpening;
    this.enableSocialSharing = enableSocialSharing;
    this.playVideoWhen = playVideoWhen;
    this.playbackSpeed = playbackSpeed;
    this.enableLoopVideos = enableLoopVideos;
  }

  @action setGalleryLayout(galleryLayout) {
    this.galleryLayout = galleryLayout;
  }

  @action setThumbnailPlacement(thumbnailPlacement) {
    this.thumbnailPlacement = thumbnailPlacement;
  }

  @action setThumbnailSpacing(thumbnailSpacing) {
    this.thumbnailSpacing = thumbnailSpacing;
  }

  @action setItemClickAction(itemClickAction) {
    this.itemClickAction = itemClickAction;
  }

  @action setEnableDownload(enableDownload) {
    this.enableDownload = enableDownload;
  }

  @action setImageQuality(imageQuality) {
    this.imageQuality = imageQuality;
  }

  @action setEnableImageSharpening(enableImageSharpening) {
    this.enableImageSharpening = enableImageSharpening;
  }

  @action setEnableSocialSharing(enableSocialSharing) {
    this.enableSocialSharing = enableSocialSharing;
  }

  @action setPlayVideoWhen(playVideoWhen) {
    this.playVideoWhen = playVideoWhen;
  }

  @action setPlaybackSpeed(playbackSpeed) {
    this.playbackSpeed = playbackSpeed;
  }

  @action setEnableLoopVideos(enableLoopVideos) {
    this.enableLoopVideos = enableLoopVideos;
  }

  getGalleryLayoutId() {
    return GALLERY_LAYOUT[this.galleryLayout];
  }
}

export default Opts;
