'use strict';
import * as _ from 'lodash';

const defaultSkin = {
  meta: {},
  spec: {
    layout: {
      align: 'center',
      margin: 0,
    },
    border: {
      color: '#000000',
      width: 0,
      opacity: 100,
    },
    fill: {
      color: '#323232',
      opacity: 100,
    },
    rect: {
      width: 142,
      height: 40,
      x: 464,
      y: 466,
    },
    animation: {},
    font: {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#ffffff',
    },
    corner: {
      leftTop: '0px',
      rightTop: '0px',
      leftBottom: '0px',
      rightBottom: '0px',
    },
  }
};

const skins = {};

skins['mila.components.skin.Button.BasicButton'] = _.merge({}, defaultSkin, {
  meta: {
    skin: 'mila.components.skin.Button.ButtonBasicSkin',
  },
  spec: {
    border: {
      color: '#000000',
      width: 0,
      opacity: 100,
    },
    shadow: {
      enable: false,
    },
  }
});

skins['mila.components.skin.Button.ButtonThreeD'] = _.merge({}, defaultSkin, {
  meta: {
    skin: 'mila.components.skin.Button.ButtonThreeD',
  },
  spec: {
    shadow: {
      enable: true,
      boxShadow: 'rgb(113, 99, 81) 1px 1px, rgb(113, 99, 81) 3px 3px, rgb(113, 99, 81) 5px 5px, rgb(113, 99, 81) 7px 7px, rgb(113, 99, 81) 9px 9px'
    },
    corner: {
      enable: true,
      leftTop: '5px',
      rightTop: '5px',
      leftBottom: '5px',
      rightBottom: '5px',
    },
  },
});

skins['mila.components.skin.Button.ButtonLiftedShadow'] = _.merge({}, defaultSkin, {
  meta: {
    skin: 'mila.components.skin.Button.ButtonLiftedShadow',
  },
  spec: {
    liftShadow: 'both',
  }
});

skins['mila.components.skin.Button.ButtonArrow'] = _.merge({}, defaultSkin, {
  meta: {
    skin: 'mila.components.skin.Button.ButtonArrow',
  },
  spec: {
    arrow: 'right',
  },
});

// skins['mila.components.skin.Button.ButtonArrow'] = {};

// skins['mila.components.skin.Button.ButtonArrowLeft'] = {};

// skins['mila.components.skin.Button.ButtonInnerShadow'] = {};

// skins['mila.components.skin.Button.ButtonShadowRight'] = {};

// skins['mila.components.skin.Button.ButtonShadowLeft'] = {};

// skins['mila.components.skin.Button.TextOnlyButtonSkin'] = {};

// skins['mila.components.skin.Button.ShniyButtonSkin'] = {};

// skins['mila.components.skin.Button.RibbonButton'] = {};

// skins['mila.components.skin.Button.CircleButton'] = {};

// skins['mila.components.skin.Button.SloopyButton'] = {};

// skins['mila.components.skin.Button.IronButton'] = {};

// skins['mila.components.skin.Button.GamingButton'] = {};

// skins['mila.components.skin.Button.ScotchTapeButton'] = {};

export default skins;
