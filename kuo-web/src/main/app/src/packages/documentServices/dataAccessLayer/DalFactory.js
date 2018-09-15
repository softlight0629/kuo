import DalCache from './DalCache';
import PointersCache from './PontersCache';

function getCacheInstance(id) {
  return new DalCache(id);
}

function getPointersCacheInstance(id) {
  return new PointersCache(id);
}

export default {
  getCacheInstance,
  getPointersCacheInstance,
}
