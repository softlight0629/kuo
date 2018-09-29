import * as _ from 'lodash';
import React from 'react';
import { createSkinCss: createCss } from '@packages/core/runtime/skinUtils';
// react, params, paramsDefaults,  css 
// dom 结构， 定义可修改的参数，参数的默认值， css 样式定义 
// 最终结果，渲染好dom, 创建好 css 规则，应用到 dom 树
// wix 的做法是创建 style 节点
// 定义 params 属性， 然后 params 属性还要有类型，处理的时候，根据params 类型来对参数值进处理


const TAG_INDEX = 0;
const REF_INDEX = 1;
const CLASS_INDEX = 2;
const POPS_INDEX = 3;
const CHILDREN_START = PROPS_INDEX + 1;

function scopeClassNames(classes, styleName) {}

function renderSkinHtmlWithPlugins(skinTree, refData, styleName, rootId) {
  let children = [];
  let skinPartName;
  for (let i = CHILDREN_START; i < skinTree.length; i++) {
    const childSkinTree = skinTree[i];
    if (_.isString(childSkinTree)) {
      children.push(childSkinTree);
    } else {
      skinPartName = childSkinTree[1];
      if (refData[skinPartName] !== 'remove') {
        children.push(renderSkinHtmlWithPlugins(skinTree[i], refData, styleName, rootId));
      }
    }
  }

  let parentConstructor = createReactElement.bind(null, skinTree[TAG_INDEX]);
  const parentProps = _.clone(skinTree[PROPS_INDEX]);
  let classes = skinTree[CLASS_INDEX];
  if (classes) {
    classes =  _.clone(classes);
  } else {
    classes = [];
  }

  let wrap;

  skinPartName = skinTree[REF_INDEX];
  if (skinPartName !== null) {
    const skinPart = refData[skinPartName];
    if (skinPart) {
      if (React.isValidElement(skinPart)) {
        return skinPart;
      }

      _.forEach(skinPart, (val, property) => {
        switch(property) {
          case 'parentConst':
            parentConstructor = val,
            break;
          case 'children':
            children = val;
            break;
          case 'addChildren':
            children = _.concat(children, val);
            break;
          case 'addChildBefore':
            const indexToInsertBefore = _.findIndex(children, { props: { refInParent: val[1]}})
            if (indexToInsertBefore !== -1) {
              children.splice(indexToInsertBefore, 0, val[0]);
            } else {
              children = children.concat(val[0]);
            }
            break;
          case 'wrap':
            wrap = val;
            break;
          case 'tagName':
            break;
          default:
            parentProps[property] = val;
        }
      });
    }
    parentProps.ref = skinPartName;
    if (_.isString(skinPartName) && skinPartName.length > 0) {
      parentProps.key = parentProps.key || skinPartName;
    }
    parentProps.id = parentProps.id || rootId + skinPartName;
    classes.push(skinPartName);
  }

  if (classes.length) {
    const classesToAdd = scopeClassNames(classes, styleName);
    parentProps.className = parentProps.className ? `${parentProps.className} ${classesToAdd}` : classesToAdd;
  }

  let res = parentConstructor.apply(null, [parentProps].concat(children));
  if (wrap) {
    res = wrap[0].apply(null, [wrap[1], res]);
  }

  return res;
}

function getSkinTreeWithParent(skinTree, refData) {
  const wrapperTagName = _.get(refData, '[""].tagName', 'div');
  return [wrapperTagName, '', [], {}].concat(skinTree || []);
}

function renderSkinHTML(skinTree, refData, styleName, rootId, structure, props, state) {
  const skinTreeWithParent = getSkinTreeWithParent(skinTree, refData);
  return renderSkinHtmlWithPlugins(skinTreeWithParent, refData, styleName, rootId);
}

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
