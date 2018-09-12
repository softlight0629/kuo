import selection from './selection/selection';
import pages from './pages/pages';
import panels from './panels/panels';
import mediaGallery from './mediaGallery/mediaGallery';
import componentsStore from './componentsStore/componentsStore';

// editorAPI, 引用到 ds
// --> documentService  -> SiteData
// preview 状态树 -> 序列化
export default {
  selection,
  pages,
  panels,
  componentsStore,
  mediaGallery,
}
// editorAPI
// documentServices

// wix 当时为什么有2套的原因，因为2者是隔离的，所以必须要维护两套状态数。
// 当时，我觉得也是必要的，因为最终， preview 也需要独立出来发布。那么，必定是需要有 preview 的状态数
// 2者是全包涵的关系，还是说， 会有所不同呢？？？
// 我觉得应该是全包涵的关系.
// 那么，我觉得如果需要用到 preview 里面的数据，可以去调用 documentServices的 API 来拿到
// SiteReact 维护的就是子集体的状态数
// 那么有些东西就出来了
// 我要把全局的状态数都放到 statementMananger.
// preview, editor, 会共享 statementManager.

// 决定了，出来一个 preview 状态数，作为 mila 的数据, 然后 抽象 documentServices 来操作mila.
// documentServices 提供的 API 模块，让 editorAPI 有操作 mila 的能力
