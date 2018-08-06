import * as _ from 'lodash';
import { Item } from '../../layouter';
import utils from '../utils';

class GalleryItem {

  constructor(config) {

    this.uniqueId = utils.generateUUID();
    this.isGalleryItem = true;
    this.createdBy = config.createdBy;

    if (config.dto && config.dto.dto) {
      config.dto = config.dto.dto;
    }

    this.dto = _.merge({}, config.dto);
    _.merge(this, config.dto);

    if (config.scheme) {
      this.processScheme(config.scheme);
    } else {
      let dto = {};
      Object.assign(dto, this.dto, this.metadata);
      this.processScheme(new Item({ dto: dto }).scheme);
    }

    if (this.dto) {
      const itemMetadata = this.dto.metaData || this.dto.metadata;
      if (itemMetadata) {
        this.dto.metaData = utils.parseStringObject(itemMetadata);
      }
    }

    this.sharpParams = _.merge({}, config.sharpParams);
    if (!this.sharpParams.quality) {
      this.sharpParams.quality = 90;
    }
    if (!this.sharpParams.usm) {
      this.sharpParams.usm = {};
    }

    this.updateSharpParams();

    this.createUrls();
  }

  processScheme(scheme) {
    this.id = scheme.id;
    this.idx = scheme.idx;
    this.type = scheme.type;
    this.style = scheme.style;
    this.width = scheme.width;
    this.maxWidth = scheme.maxWidth;
    this.height = scheme.height;
    this.maxHeight = scheme.maxHeight;
    this.margins = scheme.margins;
    this.ratio = scheme.ratio;
    this.cubeRatio = scheme.cropRatio;
    this.cubeImages = scheme.isCropped;
    this.cubeType = scheme.cropType || 'fill';
    this.offset = scheme.offset;
    this.group = scheme.group;
    this.transform = scheme.transform;
    this.orientation = scheme.orientation;
    this.visibility = scheme.visibility;
  }

  renderProps(config) {

    return _.merge({
      className: 'image',
      key: this.key,
      idx: this.idx,
      photoId: this.photoId,
      id: this.id,
      hash: this.id,
      html: this.html,
      type: this.type,
      url: this.url,
      alt: this.alt,
      linkUrl: this.linkUrl,
      linkOpenType: this.linkOpenType,
      originalsUrl: this.getOriginalsUrl(),
      title: this.title,
      fileName: this.fileName,
      description: this.description,
      full_url: this.full_url,
      download_url: this.download_url,
      sample_url: this.sample_url,
      square_url: this.square_url,
      pixel_url: this.pixel_url,
      resized_url: this.resized_url,
      thumbnail_url: this.thumbnail_url,
      cubeImages: this.cubeImages,
      cubeType: this.cubeType,
      cubeRatio: this.cubeRatio,
      transform: this.transform,
      offset: this.offset,
      style: _.merge({
        bgColor: this.bgColor,
        maxWidth: this.maxWidth,
        maxHeight: this.maxHeight,
        ratio: this.ratio,
        orientation: this.orientation
      }, this.style),
      isDemo: this.isDemo,
      videoUrl: this.videoUrl,
      isExternalVideo: this.isExternalVideo,
      scroll: config.scroll,
      visible: config.visible,
      styleParams: config.styleParams,
      actions: config.actions,
      currentIdx: config.currentIdx
    }, config);
  }

  getDataForShop() {
    var focalPoint = this.focalPoint;
    var metadata = this.metadata;
    return {
      isDemo: metadata.isDemo,
      orderIndex: this.orderIndex,
      itemId: this.dto.itemId,
      originalUrl: this.getOriginalsUrl(),
      itemUrl: this.url,
      itemHeight: metadata.height,
      title: metadata.title,
      itemWidth: metadata.width,
      itemType: metadata.type || 'image',
      imageUrl: this.resizedUrl('fit', 200, 200, null, null).img,
      imagePurchasedUrl: this.dto.mediaUrl,
      fpX: focalPoint[0],
      fpY: focalPoint[1]
    };
  }

  useImageClientApi() {
    // var isSdkExperimentOn = !(window && window.petri && window.petri['specs.pro-gallery.ImageClientApi'] === 'false'); //use the new api unless the experiment is specifically turned off
    // var isImageSizeAvailable = !this.isDimensionless;
    // var isSSR = !(window && window.document); //the image client lib can only be used in the client (dahh)
    // var hasWatermark = !!this.watermark;

    // return isImageSizeAvailable && isSdkExperimentOn && !isSSR && !hasWatermark;

    return false;
  }

  resizeUrlImp_sdk(originalUrl, resizeMethod, requiredWidth, requiredHeight, sharpParams) {
    var faces = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var allowWatermark = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var focalPoint = arguments[7];


    var requiredRatio = requiredWidth / requiredHeight;
    var showWatermark = allowWatermark && this.watermarkStr;

    if (!utils.isMobile()) {
      requiredWidth = Math.ceil(requiredWidth / 250) * 250;
      requiredHeight = Math.ceil(requiredWidth / requiredRatio);
    }

    // assign default parameters
    originalUrl = originalUrl || '';
    sharpParams = sharpParams || {};

    // calc default quality
    if (sharpParams.quality > 0) {
      //don't allow quality above 90 till we have proper UI indication
      sharpParams.quality = Math.min(90, sharpParams.quality);
    }

    var focalPointObj = { x: 50, y: 50 };
    if (focalPoint && focalPoint.length === 2) {
      focalPointObj.x = Math.round(focalPoint[0] * 100);
      focalPointObj.y = Math.round(focalPoint[1] * 100);
    }

    if (sharpParams.usm && sharpParams.usm.usm_r) {
      sharpParams.usm.usm_a = Math.min(5, Math.max(0, sharpParams.usm.usm_a || 0));
      sharpParams.usm.usm_r = Math.min(128, Math.max(0, sharpParams.usm.usm_r || 0)); //should be max 500 - but it's returning a 404
      sharpParams.usm.usm_t = Math.min(1, Math.max(0, sharpParams.usm.usm_t || 0));
    }

    if (utils.isExternalUrl(originalUrl)) {
      return originalUrl;
    } else {

      var resizer = _.noop;
      if (resizeMethod === 'fit') {
        // function getScaleToFitImageURL(relativeUrl, sourceWidth, sourceHeight, targetWidth, targetHeight, options) {
        // resizer = imageSdk.getScaleToFitImageURL;
      } else {
        // function getScaleToFillImageURL(relativeUrl, sourceWidth, sourceHeight, targetWidth, targetHeight, options) {
        // resizer = imageSdk.getScaleToFillImageURL;
      }

      /**
       * the transform options
       * @typedef  {object}   ImageTransformOptions
       * @property {boolean}  [progressive]               image transform progressive
       * @property {number}   [quality]                   image transform quality
       * @property {string}   [watermark]                 image watermark id
       * @property {object}   [unsharpMask]               unsharpMask filter
       * @property {number}   [unsharpMask.radius]        unsharpMask radius
       * @property {number}   [unsharpMask.amount]        unsharpMask amount
       * @property {number}   [unsharpMask.threshold]     unsharpMask threshold
       */

      var options = {};
      if (sharpParams.quality > 0) {
        options.quality = sharpParams.quality;
      }
      if (focalPointObj) {
        options.focalPoint = focalPointObj;
      }
      if (sharpParams && sharpParams.usm) {
        options.unsharpMask = {
          radius: sharpParams.usm.usm_r,
          amount: sharpParams.usm.usm_a,
          threshold: sharpParams.usm.usm_t
        };
      }
      if (this.watermarkStrSdk) {
        options.watermark = this.watermarkStrSdk;
      }

      var prefix = '';
      if (originalUrl.indexOf('/') < 0) {
        prefix = 'media/';
      }

      var retUrl = resizer(prefix + originalUrl, this.maxWidth, this.maxHeight, requiredWidth, requiredHeight, options);

      return retUrl;
      // return `https://static.wixstatic.com/media/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.jpg/v1/fill/w_2869,h_3586,fp_0.50_0.50,q_90/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.jpg`;
    }
  }



  resizeUrlImp_manual(originalUrl, resizeMethod, requiredWidth, requiredHeight, sharpParams) {
    var faces = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var allowWatermark = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var focalPoint = arguments[7];

    var requiredRatio = requiredWidth / requiredHeight;
    var showWatermark = allowWatermark && this.watermarkStr;

    if (!utils.isMobile()) {
      requiredWidth = Math.ceil(requiredWidth / 250) * 250;
      requiredHeight = Math.ceil(requiredWidth / requiredRatio);
    }

    // assign sharp default parameters
    sharpParams = sharpParams || {};

    // calc default quality
    if (!sharpParams.quality) {
      sharpParams.quality = 90;
    }

    //don't allow quality above 90 till we have proper UI indication
    sharpParams.quality = Math.min(90, sharpParams.quality);

    if (sharpParams.usm && sharpParams.usm.usm_r) {
      sharpParams.usm.usm_a = Math.min(5, Math.max(0, sharpParams.usm.usm_a || 0));
      sharpParams.usm.usm_r = Math.min(128, Math.max(0, sharpParams.usm.usm_r || 0)); //should be max 500 - but it's returning a 404
      sharpParams.usm.usm_t = Math.min(1, Math.max(0, sharpParams.usm.usm_t || 0));
    }

    if (utils.isExternalUrl(originalUrl)) {
      return originalUrl;
    } else if (!focalPoint) {
      //todo remove when supporting focal point
      var retUrl = 'https://static.wixstatic.com/media/' + originalUrl + '/v1/' + resizeMethod + '/';
      retUrl += 'w_' + requiredWidth;
      retUrl += ',h_' + requiredHeight;
      retUrl += ',al_' + (faces ? 'fs' : 'c');
      retUrl += ',q_' + sharpParams.quality;

      retUrl += sharpParams.usm && sharpParams.usm.usm_r ? ',usm_' + sharpParams.usm.usm_r.toFixed(2) + '_' + sharpParams.usm.usm_a.toFixed(2) + '_' + sharpParams.usm.usm_t.toFixed(2) : '';
      // Important to use this as the last param
      if (showWatermark) {
        retUrl += this.watermarkStr;
      }
      retUrl += '/' + originalUrl;
      return retUrl;
    } else {

      var scale = void 0;
      var x = void 0;
      var y = void 0;
      var orgW = void 0;
      var orgH = void 0;

      //find the scale
      if (this.ratio > requiredRatio) {
        //wide image (relative to required ratio
        scale = requiredHeight / this.maxHeight;
        orgW = Math.floor(requiredHeight * this.ratio);
        y = 0;
        x = Math.round(orgW * focalPoint[0] - requiredWidth / 2);
        x = Math.min(orgW - requiredWidth, x);
        x = Math.max(0, x);
      } else {
        //narrow image

        scale = requiredWidth / this.maxWidth;
        orgH = Math.floor(requiredWidth / this.ratio);
        x = 0;
        y = Math.round(orgH * focalPoint[1] - requiredHeight / 2);
        y = Math.min(orgH - requiredHeight, y);
        y = Math.max(0, y);
      }

      //make sure scale is not lower than needed
      //scale must be higher to prevent cases that there will be white margins (or 404)
      scale = Math.ceil(scale * 100) / 100;

      var _retUrl = 'https://static.wixstatic.com/media/' + originalUrl + '/v1/crop/';
      _retUrl += 'w_' + requiredWidth;
      _retUrl += ',h_' + requiredHeight;
      _retUrl += ',x_' + x;
      _retUrl += ',y_' + y;
      _retUrl += ',scl_' + scale.toFixed(2);
      _retUrl += ',q_' + sharpParams.quality;
      _retUrl += sharpParams.usm && sharpParams.usm.usm_r ? ',usm_' + sharpParams.usm.usm_r.toFixed(2) + '_' + sharpParams.usm.usm_a.toFixed(2) + '_' + sharpParams.usm.usm_t.toFixed(2) : '';
      // Important to use this as the last param
      if (showWatermark) {
        _retUrl += this.watermarkStr;
      }
      _retUrl += '/' + originalUrl;
      return _retUrl;
    }
  }

  resizeUrlImp(originalUrl, resizeMethod, requiredWidth, requiredHeight, sharpParams) {
    var faces = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var allowWatermark = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var focalPoint = arguments[7];

    if (this.useImageClientApi()) {
      return this.resizeUrlImp_sdk(originalUrl, resizeMethod, requiredWidth, requiredHeight, sharpParams, faces, allowWatermark, focalPoint);
    } else {
      return this.resizeUrlImp_manual(originalUrl, resizeMethod, requiredWidth, requiredHeight, sharpParams, faces, allowWatermark, focalPoint);
    }
  }

  createUrls() {
    var devicePixelRatio = this.useImageClientApi() ? 1 : utils.getDevicePixelRatio(); // when using ImageClientAPI the devicePixelRatio is added automatically
    var maxWidth = this.maxWidth || this.dto.width || this.metadata.width;
    var maxHeight = this.maxHeight || this.dto.height || this.metadata.height;
    // const maxWidth = this.cubeImages ? Math.min(this.maxWidth, this.maxHeight) : this.maxWidth;
    // const maxHeight = this.cubeImages ? Math.min(this.maxWidth, this.maxHeight) : this.maxHeight;
    this.resizeWidth = Math.min(maxWidth, Math.ceil(this.width * devicePixelRatio));
    this.resizeHeight = Math.min(maxHeight, Math.ceil(this.height * devicePixelRatio));
    this.resized_url = this.resizedUrl(this.cubeType, this.resizeWidth, this.resizeHeight, this.sharpParams, false);

    this.pixel_url = this.resizedUrl('fill', 1, 1, { quality: 30 }, false);

    var maxDimension = 500;
    this.thumbnailWidth = Math.min(maxWidth, this.width, maxDimension);
    this.thumbnailHeight = Math.min(maxHeight, this.height, maxDimension);
    this.thumbnail_url = this.resizedUrl('fit', this.thumbnailWidth, this.thumbnailHeight, { quality: 30 }, false);
    this.square_url = this.resizedUrl('fill', 100, 100, { quality: 80 }, false);
    this.full_url = this.resizedUrl(this.cubeType, this.maxWidth, this.maxHeight, this.sharpParams, false);

    this.sample_url = this.resizedUrl('fit', 500, 500, this.sharpParams, false, true);

    this.download_url = utils.isStoreGallery() ? this.sample_url : { img: this.getOriginalsUrl(), mp4: this.full_url.mp4 };
    if (this.download_url.img) {
      this.download_url.img += '?dn=' + this.fileName; //https://jira.wixpress.com/browse/PHOT-129#
    }
  }

  resizedUrl(resizeMethod, requiredWidth, requiredHeight, sharpParams, showFaces, noCrop) {

    if (this.isText) {
      return {};
    }

    requiredWidth = Math.round(requiredWidth);
    requiredHeight = Math.round(requiredHeight);
    var thumbSize = 180;

    var urls = {};

    if (this.metadata.posters || this.metadata.customPoster) {
      var maxHeight = 720;
      var qualities = this.metadata.qualities;
      var poster = this.metadata.customPoster || (this.metadata.posters ? this.metadata.posters[this.metadata.posters.length - 1] : null);
      if (poster) {
        if (qualities && qualities.length) {
          var suffix = '/';

          var mp4Qualities = qualities.filter(function (video) {
            return video.formats[0] === 'mp4';
          });
          //search for the first quality bigger that the required one
          for (var quality, q = 0; quality = mp4Qualities[q]; q++) {
            if (quality.height >= requiredHeight || quality.height >= maxHeight || !mp4Qualities[q + 1]) {
              suffix += quality.quality; //e.g. 720p
              for (var format, i = 0; format = quality.formats[i]; i++) {
                urls[format] = window.location.protocol + '//video.wixstatic.com/video/' + this.url + suffix + '/' + format + '/file.' + format;
              }
              break;
            }
          }
          var ratio = poster.width / poster.height;
          var isWider = ratio > 1;
          if (isWider) {
            requiredWidth = Math.ceil(requiredHeight * ratio);
          } else {
            requiredHeight = Math.ceil(requiredWidth / ratio);
          }
        }

        urls.img = this.resizeUrlImp(poster.url, resizeMethod, requiredWidth, requiredHeight, sharpParams, showFaces, false);
        urls.thumb = this.resizeUrlImp(poster.url, 'fit', thumbSize, thumbSize, sharpParams, false, false);
      }
    } else {
      var fp = noCrop !== true && this.isCropped && this.focalPoint;
      urls.img = this.resizeUrlImp(this.url, resizeMethod, requiredWidth, requiredHeight, sharpParams, showFaces, true, fp);
      urls.thumb = this.resizeUrlImp(this.url, 'fit', thumbSize, thumbSize, sharpParams, showFaces, true, fp);
    }

    // if (window.isWebpSupported && !utils.isStoreGallery()) {
    //   urls.thumb = urls.thumb.replace(/\.jpg$/i, '.webp');
    //   urls.img = urls.img.replace(/\.jpg$/i, '.webp');
    // }

    return urls;
  }

  getOriginalsUrl() {
    return 'https://static.wixstatic.com/media/' + this.url;
  }

  updateSharpParams() {
    //override sharpParams with item sharpParams
    if (this.dto.metaData && this.dto.metaData.sharpParams && this.dto.metaData.sharpParams.L) {
      var sharpParams = this.dto.metaData.sharpParams.L;
      if (sharpParams.quality && sharpParams.overrideQuality === true) {
        this.sharpParams.quality = sharpParams.quality;
      }

      if (sharpParams.usm && sharpParams.overrideUsm === true) {
        this.sharpParams.usm = sharpParams.usm;
      }
    }
  }

  updateId(id) {
    this.dto.itemId = this.id = id;
  }

  updateOrderIndex(value) {
    var ret = this.orderIndex !== value;
    this.orderIndex = value;
    return ret;
  }

  get itemId() {
    return this.id;
  }

  get metadata() {
    var md = this.dto.metaData || this.dto.metadata;
    if (_.isUndefined(md)) {
      // console.error('Item with no metadata' + JSON.stringify(this.dto));
      md = {};
    }
    return md;
  }

  get metaData() {
    return this.metadata;
  }

  get bgColor() {
    var bg = void 0;
    if (this.isText) {
      bg = this.metadata && this.metadata.textStyle && this.metadata.textStyle.backgroundColor;
    } else {
      bg = 'none';
    }
    return bg;
  }

  get isCropped() {
    return this.cubeImages && this.cubeType === 'fill';
  }

  get focalPoint() {
    return this.metadata.focalPoint || [0.5, 0.5];
  }

  set focalPoint(value) {
    this.metadata.focalPoint = value;
  }

  get demoTitle() {
    return 'I am a title, only a sample title but still a title. ';
  }

  get demoDescription() {
    return 'I am a description, the best description ever! Here is some lorem ipsum for you: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  }

  get demoExif() {
    return {
      GPSVersionID: '2.2.0.0',
      GPSAltitudeRef: '1.8',
      GPSAltitude: '0',
      Make: 'LG Electronics',
      Model: 'LG-H815L',
      Orientation: 'right-top',
      XResolution: '72',
      YResolution: '72',
      ResolutionUnit: '2',
      Software: 'Picasa',
      DateTime: '2016:04:17 07:19:25',
      YCbCrPositioning: '1',
      ExposureTime: '0.041666666666666664',
      FNumber: '1.8',
      ExifIFDPointer: '214',
      ExposureProgram: 'Undefined',
      GPSInfoIFDPointer: '1262',
      PhotographicSensitivity: '200',
      ExifVersion: '0220',
      DateTimeOriginal: '2016:04:17 07:19:25',
      DateTimeDigitized: '2016:04:17 07:19:25',
      ComponentsConfiguration: 'YCbCr',
      ShutterSpeedValue: '4.585',
      ApertureValue: '1.69',
      BrightnessValue: '-0.88',
      ExposureBias: '0',
      MeteringMode: 'CenterWeightedAverage',
      Flash: 'Flash did not fire, compulsory flash mode',
      FocalLength: '4.42',
      UserComment: '32,32,32,70,77,49,32,32,32,70,67,48,48,48,48,48,48,48,48,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
      SubSecTime: '802528',
      SubSecTimeOriginal: '802528',
      SubSecTimeDigitized: '802528',
      FlashpixVersion: '0100',
      ColorSpace: '1',
      PixelXDimension: '5312',
      PixelYDimension: '2988',
      InteroperabilityIFDPointer: '1320',
      SensingMethod: 'Undefined',
      SceneType: 'Directly photographed',
      ExposureMode: '0',
      WhiteBalance: 'Auto white balance',
      DigitalZoomRatio: '1',
      SceneCaptureType: 'Standard',
      ImageUniqueID: '36f6e92221e27c830000000000000000'
    };
  }

  get photoId() {
    return this.id;
  }

  get key() {
    if (!this._key) {
      this._key = (this.dto.key || this.id || this.dto.url || 'no_key_found').replace(/\W/g, '');
    }
    return this._key;
  }

  get orderIndex() {
    return this.dto.orderIndex || this.dto.o || 0;
  }

  set orderIndex(value) {
    this.dto.orderIndex = value;
  }

  get name() {
    return this.metadata.fileName || '';
  }

  get url() {
    return this.dto.file_url || this.dto.mediaUrl || this.dto.url || this.dto.src;
  }

  get mediaUrl() {
    return this.url;
  }

  get html() {
    return this.dto.html || this.dto.text || this.metadata.html || this.metadata.text;
  }

  get lastModified() {
    return this.metadata.lastModified;
  }

  get seed() {
    return utils.hashToInt(this.url);
  }

  get isImage() {
    return this.type === 'image';
  }

  get isImportant() {
    return !!this.dto.i;
  }

  get isVideo() {
    return this.type === 'video';
  }

  get videoUrl() {
    return this.metadata.videoUrl;
  }

  get isExternalVideo() {
    return this.metadata.isExternal;
  }

  get isExternal() {
    return this.metadata.isExternal === true;
  }

  set type(type) {
    this._type = type;
  }

  get type() {
    switch (this._type || this.dto.type || this.metadata.type || this.dto.media_type) {
      case 'dummy':
        return 'dummy';
      case 'v':
      case 'video':
        return 'video';
      case 'h':
      case 'html':
      case 'text':
        return 'text';
      case 'i':
      case 'image':
      default:
        return 'image';
    }
  }

  get alt() {
    return this.metadata.alt || this.title || this.description;
  }

  get title() {
    return this.metadata.title || '';
  }

  set title(value) {
    this.metadata.title = value;
  }

  get fileName() {
    return this.metadata.fileName || '';
  }

  set fileName(value) {
    this.metadata.fileName = value;
  }

  get description() {
    return this.metadata.description || '';
  }

  set description(value) {
    this.metadata.description = value;
  }

  get exif() {
    return this.metadata.exif || '';
  }

  get hasLink() {
    switch (this.linkType) {
      case 'wix':
        return !!this.linkData.type;
      default:
        return !!this.linkUrl;
    }
  }

  get link() {
    return this.metadata.link || {};
  }

  get linkData() {
    if (this.metadata.link) {
      return this.metadata.link.data || {};
    }
  }

  set linkData(value) {
    if (!this.metadata.link) {
      this.metadata.link = {};
    }
    this.metadata.link.data = value;
  }

  get linkType() {
    if (this.metadata.link && !_.isUndefined(this.metadata.link.type)) {
      return this.metadata.link.type;
    } else if (this.linkUrl) {
      return 'web';
    } else {
      return 'none';
    }
  }

  set linkType(value) {
    if (!this.metadata.link) {
      this.metadata.link = {};
    }

    // reset metadata.link when 'none' is selected - that's the way wix galleries work
    this.metadata.link = {
      type: value,
      url: undefined,
      text: undefined,
      title: undefined,
      target: '_blank'
    };
  }

  get defaultLinkText() {
    var linkData = this.linkData;

    switch (this.linkType) {
      case 'wix':
        if (linkData) {
          switch (linkData.type) {
            case 'PageLink':
              return 'Go to Page ' + linkData.pageName;
            case 'AnchorLink':
              return 'Scroll to ' + linkData.anchorName;
            case 'ExternalLink':
              return '' + linkData.url;
            case 'EmailLink':
              return 'Email ' + linkData.recipient;
            case 'PhoneLink':
              return 'Call ' + linkData.phoneNumber;
            case 'DocumentLink':
              return 'Open ' + linkData.name;
            default:
              return 'Go to Link';
          }
        } else {
          return 'Go to Link';
        }
      case 'web':
        return this.linkUrl;
      case 'page':
        return this.linkTitle;
      default:
        return '';
    }
  }

  get defaultLinkValue() {
    var linkData = this.linkData;

    switch (this.linkType) {
      case 'wix':
        if (linkData) {
          switch (linkData.type) {
            case 'PageLink':
              if (linkData.pageName) {
                return 'PAGE - ' + linkData.pageName;
              } else {
                return 'PAGE';
              }
            case 'AnchorLink':
              return 'ANCHOR - ' + linkData.anchorName;
            case 'ExternalLink':
              return 'LINK - ' + linkData.url;
            case 'EmailLink':
              return 'EMAIL - ' + linkData.recipient;
            case 'PhoneLink':
              return 'PHONE - ' + linkData.phoneNumber;
            case 'DocumentLink':
              return 'DOCUMENT - ' + linkData.name;
            default:
              return 'Add a Link';
          }
        } else {
          return 'Add a Link';
        }
      case 'web':
        return this.linkUrl;
      case 'page':
        return this.linkTitle;
      default:
        return '';
    }
  }

  get linkText() {
    if (this.metadata.link) {
      return this.metadata.link.text || this.defaultLinkText;
    }
  }

  set linkText(value) {
    if (!this.metadata.link) {
      this.metadata.link = {};
    }
    this.metadata.link.text = value;
  }

  get linkTitle() {
    if (this.metadata.link) {
      return this.metadata.link.title;
    }
  }

  set linkTitle(value) {
    if (!this.metadata.link) {
      this.metadata.link = {};
    }
    this.metadata.link.title = value;
  }

  get linkUrl() {
    if (this.metadata.link) {
      return this.metadata.link.url;
    }
  }

  set linkUrl(value) {
    if (!this.metadata.link) {
      this.metadata.link = {};
    }
    this.metadata.link.url = value;
  }

  get unprotectedLinkOpenType() {
    return _.get(this, 'metadata.link.target');
  }

  get linkOpenType() {
    if (utils.isEditor() || utils.isPreview()) {
      //in preview never open link in current window (causes many errors)
      return '_blank';
    } else if (this.metadata.link && !_.isUndefined(this.metadata.link.target)) {
      return this.unprotectedLinkOpenType;
    } else if (this.metadata.link && !_.isUndefined(this.metadata.link.targetBlank)) {
      return this.metadata.link.targetBlank ? '_blank' : '_top';
    } else {
      return '_blank';
    }
  }

  set linkOpenType(value) {
    if (!this.metadata.link) {
      this.metadata.link = {};
    }
    this.metadata.link.target = value;
  }

  get isText() {
    return this.type === 'text';
  }

  get isVisible() {
    return this.visibility && this.visibility.visible;
  }

  get isRendered() {
    return this.visibility && this.visibility.rendered;
  }

  get isDimensionless() {
    return !(this.maxWidth > 1 || this.maxHeight > 1);
  }
}

export default GalleryItem;
