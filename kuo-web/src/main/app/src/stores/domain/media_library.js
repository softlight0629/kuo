import { observable, action } from 'mobx';
import { Picture } from '../../models/media';

class MediaLibraryStore {

  @observable pictures = [];

  @observable selectedPics = {};

  @observable selectedPic = {};

  chooseCallback = null;

  constructor(store, service) {
    this.store= store;
    this.service = service;
  }

  fetch() {
   this.service.mediaService.fetchPicturesFromServer()
    .then(action(res => {
      this.pictures = res.data.map(picture => new Picture(picture));
    }));
  }

  choose(cb) {
    this.chooseCallback = cb;
    this.store.workSpaceUiStore.openMediaLibrary();
  }

  done() {
    this.store.workSpaceUiStore.closeMediaLibrary();
    setTimeout(() => {
      this.chooseCallback && this.chooseCallback(this.selectedPic);
      this.chooseCallback = null;
    }, 200);
  }

  selectPicture(picture) {
    this.selectedPic = picture;
    const selectedPic = this.selectedPics[picture.id];
    if (selectedPic) {
      delete this.selectedPics[picture.id];
      return;
    }

    this.selectedPics[picture.id] = picture;
  }
  
  @action appendToSkecthBoard() {
    const keys = Object.keys(this.selectedPics);
    for (const key of keys) {
      this.store.sketchBoardStore.appendAst({
        kind: 'Image',
        spec: {
          layout: {
            align: 'left',
            margin: 0,
          },
          rect: {
            width: 247,
            height: 244,
            x: 320,
            y: 200,
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
          src: this.selectedPics[key].fileUrl,
          alt: 'thisisalt',
        }
      });
    }

    this.selectedPics = {};
  }
}

export default MediaLibraryStore;
