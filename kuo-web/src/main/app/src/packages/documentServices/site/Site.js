
class Site {

  // 整个就是 documentServices, editorAPI 将会 merge 这里初始化好的所有APIss
  // config 包涵了所有 documentServices 的公共 Public模块
  // 这些 Public 公共模块是暴露给 editorAPI 来调用 Preview的
  // Preview 还会有 privateServices，可能牵涉到底层的数据层的操作，但是暴露给外部
  // Site 的直接就是完成这些 API 模块的初始


  // 1. 准备 pointersCache
  constructor(config, siteDataWrapper, buildRenderedSite) {
  }
}

export default Site;
