import * as _ from 'lodash';

// 一张表关联一个 DalCache, 对于表的操作全部封装再这里
// 增加，查找，删除，更新的操作
// 每行数据，必定有一个主键ID
// 一个主键ID关联一个数据实例
class DalCache {
  
  constructor(config) {
    this.id = config.id;
    // 数据缓存实例
    this._cache = {}
  }

  // add
  add(item) {
    this._cache[item.id] = item;
  }

  // update
  update(id, item) {
  }

  // remove
  remove(id) {
    delete this._cache[id];
  }
}


export default DalCache;
