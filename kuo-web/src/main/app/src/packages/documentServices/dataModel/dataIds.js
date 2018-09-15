import guidUtils from '@packages/coreUtils/core/guidUtils';

function generateItemIdWithPrefix(prefix) {
  return guidUtils.genUniqueId(prefix, '-');
}

function generateNewDataItemId() {
  return generateItemIdWithPrefix('dataItem');
}

function generateNewPropertiesItemId() {
  return generateItemIdWithPrefix('propItem');
}

function generateNewDesignId() {
  return generateItemIdWithPrefix('design');
}


export default {
  generateNewDataItemId,
  generateNewPropertiesItemId,
  generateNewDesignId,
}
