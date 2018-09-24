import * as _ from 'lodash';
import React from 'react';
import { createSkinCss: createCss } from '@packages/core/runtime/skinUtils';
// react, params, paramsDefaults,  css 
// dom 结构， 定义可修改的参数，参数的默认值， css 样式定义 
// 最终结果，渲染好dom, 创建好 css 规则，应用到 dom 树
// wix 的做法是创建 style 节点
// 定义 params 属性， 然后 params 属性还要有类型，处理的时候，根据params 类型来对参数值进处理

// 是否

function renderSkinHTML() { }

function createSkinCss(skinData, styleProps, themeData, styleId, mobileData) {
  if (!skinData) {
    return null;
  }

  const skinRenderingConfig = {
    renderingEnv: {},
    // evals,
  };

  if (mobileData) {
    _.assign(skinRenderingConfig.renderingEnv, {
      siteZoomRatio: mobileData.siteZoomRatio,
      invertedZoomRatio: mobileData.invertedZoomRatio,
      orientationZoomFix: mobileData.orientationZoomFix,
      mobileZoom: mobileData.mobileZoom
    })
  }

  // if (serviceTopology && serviceTopology.scriptsLocationMap.skins) {
  //   _.assign(skinRenderingConfig.renderingEnv, {
  //     baseThemeUrl: `${serviceTopology.scriptsLocationMap.skins}/images/wysiwyg/core/themes/base/`,
  //     webThemeUrl: `${serviceTopology.scriptsLocationMap.skins}/images/wysiwyg/core/themes/viewer/`
  //   })
  // }

  const pickedTheme = _.pick(themeData, ['color', 'font']);
  let skinCss = createCss(skinData, styleProps, pickedTheme, styleId, skinRenderingConfig);

  return skinCss;
}

export default {
  renderSkinHTML,
}
