import { observable, action } from 'mobx';

const op = {
  spec: {
    rect: {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    },
    linked: {
      page: '',
      anchor: '',
      webAddress: '',
      email: '',
      phoneNum: '',
    },
    layout: {
      align: 'left',
      margin: 0,
    },
    style: {
      fill: {
        color: '#000',
        opacity: 1,
      },
      border: {
        color: '#000',
        opacity: 1,
        width: 1,
      },
      corner: {
        leftTop: '8px',
        rightTop: '8px',
        leftBottom: '8px',
        rightBottom: '8px',
      },
      fill: {
        color: '#000',
        opacity: 1,
      },
      shadow: {
        angle: 45,
        distance: 1,
        size: 1,
        blur: 1,
        color: '#000',
        opacity: 1,
      },
      text: {
        color: '#000',
        font: 'Arial',
        fontSize: 14,
        bold: false,
        italic: false,
      }
    },
    text: {
      content: '',
    }
  },
}

class AstRefUiStore {

  @observable.ref astm = op;

  @action refAstm(astm) {
    this.astm = astm;
  }
}

export default AstRefUiStore;
