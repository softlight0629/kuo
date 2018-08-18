import React, { Component } from 'react';
import EventEmitter from 'events';
import { autorun, reaction } from 'mobx';
import * as _ from 'lodash';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { Layouter } from './layouter';
import layoutParams from './layouter/layoutParams';
import ProGallery from './renderer/gallery/ProGallery';
import consts from './renderer/utils/consts';

import compRegistrar from '../compUtils/compRegistrar';

import './gallery.less';

const sp = {
  "colors": {
    "actionsColorExpand": {
      "themeName": "color-5",
      "value": "rgba(0,0,0,1)"
    },
    "backColor": {
      "themeName": "color-2",
      "value": "rgba(230,230,230,1)"
    },
    "bgColorExpand": {
      "themeName": "color-1",
      "value": "rgba(255,255,255,1)"
    },
    "descriptionColorExpand": {
      "themeName": "color-5",
      "value": "rgba(0,0,0,1)"
    },
    "foreColor": {
      "themeName": "color-2",
      "value": "rgba(230,230,230,1)"
    },
    "itemDescriptionFontColor": {
      "themeName": "color-1",
      "value": "rgba(255,255,255,1)"
    },
    "itemDescriptionFontColorSlideshow": {
      "themeName": "color-5",
      "value": "rgba(0,0,0,1)"
    },
    "itemFontColor": {
      "themeName": "color-1",
      "value": "rgba(255,255,255,1)"
    },
    "itemFontColorSlideshow": {
      "themeName": "color-5",
      "value": "rgba(0,0,0,1)"
    },
    "itemIconColor": {
      "themeName": "color-1",
      "value": "rgba(255,255,255,1)"
    },
    "itemIconColorSlideshow": {
      "themeName": "color-5",
      "value": "rgba(0,0,0,1)"
    },
    "itemOpacity": {
      "themeName": "color-4",
      "value": "rgba(155,155,155,0.6)"
    },
    "loadMoreButtonBorderColor": {
      "themeName": "color-5",
      "value": "rgba(0,0,0,1)"
    },
    "loadMoreButtonColor": {
      "themeName": "color-1",
      "value": "rgba(255,255,255,1)"
    },
    "loadMoreButtonFontColor": {
      "themeName": "color-5",
      "value": "rgba(0,0,0,1)"
    },
    "te-background-color-picker": {
      "themeName": "color-7",
      "value": "rgba(226,197,161,1)"
    },
    "titleColorExpand": {
      "themeName": "color-5",
      "value": "rgba(0,0,0,1)"
    }
  },
  "numbers": {
    "collageDensity": 80,
    "galleryHorizontalAlign": 1,
    "galleryLayout": 1,
    "gallerySize": 9,
    "galleryVerticalAlign": 1,
    "imageMargin": 6,
    "isVertical": 1,
    "loveCounter": 1,
    "newItemsDetails": 1,
    "newItemsLocation": 0,
    "te-padding-slider": 50,
    "thumbnailSpacings": 10
  },
  "booleans": {
    "addPanel": true,
    "allowDescription": false,
    "allowSocial": false,
    "allowTitle": false,
    "dummyBooly": true,
    "shouldUnDock": false
  },
  "fonts": {
    "descriptionFontExpand": {
      "style": {
        "bold": false,
        "italic": false,
        "underline": false
      },
      "family": "open sans",
      "preset": "Body-M",
      "editorKey": "font_8",
      "size": 15,
      "fontStyleParam": true,
      "displayName": "Paragraph 2",
      "value": "font:normal normal normal 15px/1.4em \"open sans\",sans-serif;"
    },
    "itemDescriptionFont": {
      "family": "avenir-lt-w01_35-light1475496",
      "displayName": "Paragraph 2",
      "style": {
        "bold": false,
        "italic": false,
        "underline": false
      },
      "size": 15,
      "preset": "Custom",
      "editorKey": "font_8",
      "fontStyleParam": true,
      "value": "font:normal normal normal 15px/18px avenir-lt-w01_35-light1475496,sans-serif;"
    },
    "itemDescriptionFontSlideshow": {
      "family": "avenir-lt-w01_35-light1475496",
      "displayName": "Paragraph 2",
      "style": {
        "bold": false,
        "italic": false,
        "underline": false
      },
      "size": 15,
      "preset": "Custom",
      "editorKey": "font_8",
      "fontStyleParam": true,
      "value": "font:normal normal normal 15px/18px avenir-lt-w01_35-light1475496,sans-serif;"
    },
    "itemFont": {
      "style": {
        "bold": false,
        "italic": false,
        "underline": false
      },
      "family": "open sans",
      "preset": "Heading-S",
      "editorKey": "font_6",
      "size": 20,
      "fontStyleParam": true,
      "displayName": "Small Heading",
      "value": "font:normal normal normal 20px/1.4em \"open sans\",sans-serif;"
    },
    "itemFontSlideshow": {
      "family": "avenir-lt-w01_85-heavy1475544",
      "displayName": "Basic Heading",
      "style": {
        "bold": false,
        "italic": false,
        "underline": false
      },
      "size": 22,
      "preset": "Custom",
      "editorKey": "font_5",
      "fontStyleParam": true,
      "value": "font:normal normal normal 22px/27px avenir-lt-w01_85-heavy1475544,sans-serif;"
    },
    "loadMoreButtonFont": {
      "family": "open sans",
      "displayName": "Paragraph 2",
      "style": {
        "bold": false,
        "italic": false,
        "underline": false
      },
      "size": 15,
      "preset": "Body-M",
      "editorKey": "font_8",
      "fontStyleParam": true,
      "value": "font:normal normal normal 15px/1.4em \"open sans\",sans-serif;"
    },
    "loadMoreButtonText": "Load More",
    "text-editor-font": {
      "family": "avenir-lt-w01_85-heavy1475544",
      "style": {
        "bold": false,
        "italic": false,
        "underline": false
      },
      "size": 30,
      "preset": "Custom",
      "editorKey": "font_2",
      "fontStyleParam": true,
      "value": "font:normal normal normal 30px/37px avenir-lt-w01_85-heavy1475544,sans-serif;"
    },
    "text-editor-font-1499927482082": {
      "family": "avenir-lt-w01_35-light1475496",
      "style": {
        "bold": false,
        "italic": false,
        "underline": false
      },
      "size": 40,
      "preset": "Custom",
      "editorKey": "font_2",
      "fontStyleParam": true,
      "value": "font:normal normal normal 40px/50px avenir-lt-w01_35-light1475496,sans-serif;"
    },
    "titleFontExpand": {
      "style": {
        "bold": true,
        "italic": false,
        "underline": false
      },
      "family": "open sans",
      "preset": "Page-title",
      "editorKey": "font_2",
      "size": 17,
      "fontStyleParam": true,
      "displayName": "Page Title",
      "value": "font:normal normal bold 17px/1.4em \"open sans\",sans-serif;"
    }
  },
  "googleFontsCssUrl": "",
  "uploadFontFaces": ""
}

@observer
class Gallery extends Component {
  
  constructor(props) {
    super(props);
    this.events = new EventEmitter();
  }

  trigger(event) {
    setTimeout(() => {
      this.events.emit(event);
    }, 0);
  }

  getStyleParams() {
    const { opts } = this.props.astm;

    return _.merge(sp, {
      numbers: {
        galleryLayout: opts.getGalleryLayoutId(),
      },
    });
  }

  // 直接触发重新渲染

  render() {
    const { astm } = this.props;
    const { opts: { galleryLayout }, spec: { rect }, opts } = astm;

    this.trigger(consts.Events.STYLE_PARAMS_CHANGE);

    return (
      <div className="ast-gallery">
        <ProGallery width={rect.width} events={this.events} getStyleParams={this.getStyleParams.bind(this)}/>
      </div>
    )
  }
}


compRegistrar.register('mila.components.view.Gallery', Gallery);
