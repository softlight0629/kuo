import * as _ from 'lodash';
import DalFactory from './DalFactory';

class PointersCache {

  constructor() {
    this.pointers = {};
    // cache 里面包涵了page 关联的每张表
    // 再做一层封装，对表可以做处理

    // 去初始化每张表的 DalCache;
  }

  addCachePointer(dataType) {
    this.pointers[dataType] = DalFactory.getCacheInstance(dataType);
  }

  // 拿到一张表的 pointer
  getPointerByDataType(dataType) {
    return this.pointers[dataType];
  }



}

export default DbCache;
