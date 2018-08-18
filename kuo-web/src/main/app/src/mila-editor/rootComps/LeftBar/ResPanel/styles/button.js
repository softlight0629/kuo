import * as _ from 'lodash';
import skinRegistrar from '@packages/compUtils/skinRegistrar';

const buttonSkins = skinRegistrar.getSkin('mila.components.skin.Button');
const basicButtonSkin = buttonSkins['mila.components.skin.Button.BasicButton'];
const buttonArrowSkin = buttonSkins['mila.components.skin.Button.ButtonArrow'];

const styles = {};

styles.button1 = {
  x: 0,
  y: 0,
  template: _.merge({}, basicButtonSkin, {
    spec: {
      fill: {
        color: '#e6e6e6',
      },
      font: {
        color: '#000000'
      },
      rect: {
        width: 142,
        height: 40,
      }
    },
  })
}

styles.button2 = {
  x: 180,
  y: 0,
  template: _.merge({}, basicButtonSkin, {
    spec: {
      fill: {
        color: '#ffffff',
      },
      font: {
        color: '#000000'
      },
      border: {
        width: 1,
        color: '#000000',
      },
      rect: {
        width: 142,
        height: 40,
      }
    },
  })
}

styles.button3 = {
  x: 0,
  y: 50,
  template: _.merge({}, basicButtonSkin, {
    spec: {
      fill: {
        color: '#ffffff',
      },
      font: {
        color: '#000000'
      },
      border: {
        width: 2,
        color: '#27223e',
      },
      rect: {
        width: 142,
        height: 40,
      }
    },
  })
}

styles.button4 = {
  x: 180,
  y: 50,
  template: _.merge({}, buttonArrowSkin, {
    spec: {
      fill: {
        color: '#171424',
      },
      font: {
        color: '#ffffff'
      },
      rect: {
        width: 142,
        height: 40,
      }
    },
  })
}

styles.button5 = {
  x: 0,
  y: 100,
  template: _.merge({}, basicButtonSkin, {
    spec: {
      fill: {
        color: '#ffffff',
      },
      font: {
        color: '#000000'
      },
      border: {
        width: 2,
        color: '#323232',
      },
      corner: {
        enable: true,
        leftTop: '20px',
        rightTop: '20px',
        leftBottom: '20px',
        rightBottom: '20px',
      },
      rect: {
        width: 142,
        height: 40,
      }
    },
  })
}

styles.button6 = {
  x: 180,
  y: 100,
  template: _.merge({}, basicButtonSkin, {
    spec: {
      fill: {
        color: '#fe6161',
      },
      font: {
        color: '#ffffff',
        bold: true,
        fontSize: 14,
      },
      corner: {
        enable: true,
        leftTop: '100px',
        rightTop: '100px',
        leftBottom: '100px',
        rightBottom: '100px',
      },
      rect: {
        width: 142,
        height: 40,
      }
    },
  })
}

export default styles;
