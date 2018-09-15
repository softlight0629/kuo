
class DataAccessLayer {

  constructor() {
    // page -> PointersCache
    this.pointersCacheMap = {};
    // 创建 PointersCache -> 一个 Page 一个 PontersCache
  }

  addPagePointers(pageId, ps) {
    this.pointersCacheMap[pageId] = ps;
  }

  getPagePointers(pageId) {
    return this.pointersCacheMap[pageId];
  }

}


export default DataAccessLayer;
