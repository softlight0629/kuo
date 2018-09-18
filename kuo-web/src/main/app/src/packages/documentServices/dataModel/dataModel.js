import * as _ from 'lodash';
import documentServicesSchemas from '@packages/documentServicesSchemas/documentServicesSchemas';

// dal
function addDataItem(ps, dataItem, pageId) {
}

function createDataItemByType(dataType) {
  return documentServicesSchemas.services.createDataItemByType(dataType);
}

function createPropertiesItemByType(propertiesType) {
  return documentServicesSchemas.services.createPropertiesItemByType(propertiesType);
}

// 通过 dataModel 找到 schema 定义，去实例化， 然后生成 pointers, 录入到 dalCache.
export default {
  addDataItem,
}
