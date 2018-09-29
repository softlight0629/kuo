import * as _ from 'lodash';
import React from 'react';
import skinsRender from '@packages/util/skins/skinRenderer';
// 构造 SiteDataAPI, viewPrivateServices -> SiteReact -> 负责整个站点的渲染

// SiteReact
// PageReact
// MasterPage
// PageGroup
// Page
// CompRender

// RootComponent, 组件实例化

// SiteReact -> 全局准备，构造 masterPage, 渲染 MasterPage
// MasterPage -> HeaderContainer, PageContainer, PagesContainer
// PagesContainer -> 负责创建 PagesGroup
// PagesGroup -> 负责 创建 Page
// Page -> 负责渲染 ComponentRenderer
// ComponentRenderer -> 负责渲染 RootComponent
// RootComponent -> 负责 Component 渲染

// SiteData -> DalCache -> 当前站点的数据
// SiteDataAPI -> 负责对站点数据的更新

function getSkinFromJson(skinName, skinsJson) {
  if (_.isNil(skinName)) {
    return;
  }

  let skin = skinsJson[skinName];

  return skin;
}

function getSkinFromCompSkinsJson(comp, compSkinsJson) {
  let skinName = comp.props.skin;
  let skin = getSkinFromJson(skinName, compSkinsJson);
  if (!skin && comp.getDefaultSkinName) {
    skinName = comp.getDefaultSkinName()
    skin = getSkinFromJson(skinName, compSkinsJson);
  }

  return skin;
}

function getSkinFromSkinsMap(comp, skinsMap) {
  let skinName = comp.props.skin;
  let skin = skinsMap.get(skinName);
  if (!skin && comp.getDefaultSkinName) {
    skinName = comp.getDefaultSkinName();
    skin = skinsMap.get(skinName);
  }

  return skin;
}

function getRefData(skin) {
  let refData = this.getSkinProperties();

  if (_.isFunction(this.transformRefData)) {
    this.transformRefData(refData);
  }

  if (this.props.transformSkinProperties) {
    refData = this.props.transformSkinProperties(refData);
  }

  return refData;
}

function getCompCss(compSkinsJson, styleId, props) {

}

// 给予 component 做 mixin
function skinBasedComp(compSkinsJson, component) {
  const getSkin = compSkinsJson.get ? getSkinFromSkinsMap : getSkinFromCompSkinsJson;

  function renderHelper() {
    const skin = getSkin(this, compSkinsJson);

    if (!skin) {
      return (<div></div>)
    }

    const refData = getRefData.call(this, skin);

    return skinsRender.renderSkinHTML.call(this, skin.react, refData, this.props.styleId, this.props.id, this.props.structure, this.props);
  }

  function render() {
    try {
      return this.renderHelper();
    } catch (e) {
      return (<div>error</div>)
    }
  }

  component.renderHelper = renderHelper.bind(component);
  component.render = render.bind(component);
}

export default skinBasedComp;
