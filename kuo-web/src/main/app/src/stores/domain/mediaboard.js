import { observable, action } from 'mobx';
import MediaResource from '../../models/media/MediaResource';

class MediaBoardStore {

  @observable mediaResources = [];

  @observable selectedMediaResources = {};

  constructor(store, service) {
    this.store= store;
    this.service = service;
  }

  fetch() {
   this.service.mediaService.fetchMediaResourcesFromServer()
    .then(action(res => {
      this.mediaResources = res.data.map(mediaResource => new MediaResource(mediaResource));
    }));
  }

  selectMediaResource(mediaResource) {
    const selectedMediaResource = this.selectedMediaResources[mediaResource.id];
    if (selectedMediaResource) {
      delete this.selectedMediaResources[mediaResource.id];
      return;
    }

    this.selectedMediaResources[mediaResource.id] = mediaResource;
  }
  
  @action choose() {
    const keys = Object.keys(this.selectedMediaResources);
    for (const key of keys) {
      this.store.sketchBoardStore.addAst({
        kind: 'Image',
        spec: {
          layout: {
            align: 'left',
            margin: 0,
          },
          rect: {
            width: 247,
            height: 244,
            x: 20,
            y: 300,
          },
          animation: {
            // animate: 'rubberBand',
          },
          fill: {
            color: '#000000',
            opacity: 100,
          },
          border: {
            color: '#c9c9c9',
            width: 6,
            opacity: 100,
          },
          shadow: {
            angle: 0,
            size: 0,
            blur: 14,
            distance: 0,
            color: '#000000',
            opacity: 62,
          },
          font: {
            fontFamily: 'Arial',
            fontSize: 16,
            color: '#ffffff',
          },
          corner: {
            leftTop: '50%',
            rightTop: '50%',
            leftBottom: '50%',
            rightBottom: '50%',
          },
        },
        store: {
          src: this.selectedMediaResources[key].fileUrl,
          alt: 'thisisalt',
        }
      });
    }

    this.selectedMediaResources = {};
  }
}

export default MediaBoardStore;
