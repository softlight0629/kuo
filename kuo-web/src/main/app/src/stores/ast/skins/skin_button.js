const skins = [
  {
    skinImg: 'https://static.parastorage.com/services/santa-resources/resources/editor/advancedStylePanel/iconsForSkins/wysiwyg.viewer.skins.button.BasicButton.v1.png',
    spec: {
      shadow: {
        angle: 0,
        distance: 1,
        size: 0,
        blur: 4,
        color: '#000000',
        opacity: 62,
        boxShadow: '',
        enable: true,
      }
    },
    meta: {
      skin: 'skin_button_01',
    }
  },
  {
    skinImg: 'https://static.parastorage.com/services/santa-resources/resources/editor/advancedStylePanel/iconsForSkins/wysiwyg.viewer.skins.button.ButtonArrow.v1.png',
    spec: {
      shadow: {
        enable: false,
      }
    },
    meta: {
      skin: 'skin_button_02',
    },
  },
  {
    skinImg: 'https://static.parastorage.com/services/santa-resources/resources/editor/advancedStylePanel/iconsForSkins/wysiwyg.viewer.skins.button.ButtonInnerShadow.v1.png',
    spec: {
      shadow: {
        enable: true,
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.6), inset 0 -1px 1px rgba(255,255,255,0.75)',
      },
      corner: {
        leftTop: '5',
        rightTop: '5',
        leftBottom: '5',
        rightBottom: '5',
      },
    },
    meta: {
      skin: 'skin_button_03',
    },
  },
];

export default skins;
