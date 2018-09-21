import * as _ from 'lodash';
import compFactory from '@packages/compUtils/compFactory';
import documentServicesSchemas from '@packages/documentServicesSchemas/documentServicesSchemas';
import constants from '@packages/documentServices/constants/constants';

const types = constants.DATA_TYPES;
const viewModes = constants.VIEW_MODES;

function getPageComponentPath(pageId, videMode) {
  return ['pagesData', pageId, 'structure', videMode];
}

function getPageDataPath(type, pageId, typeKey) {
  return ['pagesData', pageId, 'data', typeKey || getTypeKey(type)];
}

function getTypeKey(type) {
  const typeKey = constants.PAGE_DATA_DATA_TYPES[type];
  if (typeKey) {
      return typeKey;
  }
  throw new Error(`there is no such data type ${type}`);
}

// pageData 实例化， 入 dalcache
function generate(ps, pageData) {

  const { structure, data: { document_data, design_data, component_properties }} = pageData;

  // data 实例化 入 cache
  generateDocumentData(ps, structure.id, document_data);

  generateDesignData(ps, structure.id, design_data);

  generateComponentProperties(ps, structure.id, component_properties);

  // model 实例化 入 cache
  generateStructure(ps, structure)
}

// 构造 Page Model
// 
function generateStructure(ps, structure) {
  const pageId = structure.id;
  const modelType = compFactory.getModelTypeFactoryByCompType(structure.componentType);

  // model 实例化
  const components = structure.components;
  const instance = modelType.create(_.assign({}, structure, { components: _.map(components, component => component.id) }));

  // component 实例化
  _.forEach(components, component => {
    generateComponent(ps, pageId, component);
  });

  const path = getPageComponentPath(pageId, viewModes.DESKTOP);
  path.push(instance.id);
  const pointer = ps.pointersCache.getPointer(instance.id, viewModes.DESKTOP, path);
  ps.dalCache.set(pointer, instance);
}

// 构造 Component Model
function generateComponent(ps, pageId, component) {
  const modelTypeFactory =  compFactory.getModelTypeFactoryByCompType(component.componentType);

  const components = component.components;
  const instance = modelTypeFactory.create(_.assign(_.assign({}, component, components ? { 
    components: _.map(components, component => component.id),
  }: {})));

  // 子组件 实例化
  if (components) {
    _.forEach(components, component => {
      generateComponent(ps, pageId, component);
    });
  }

  // 拿到 cache pointer
  const path = getPageComponentPath(pageId, viewModes.DESKTOP);
  path.push(instance.id);
  const pointer = ps.pointersCache.getPointer(instance.id, viewModes.DESKTOP, path);
  ps.dalCache.set(pointer, instance);
}

// design data 实例化，入 cache
function generateDesignData(ps, design_data) {
  _generate(ps, types.design, design_data);
}

// document data 实例化, 入 cache
function generateDocumentData(ps, document_data) {
  _generate(ps, types.data, document_data);
}

// component properties 实例化，入 cache
function generateComponentProperties(ps, component_properties) {
  _generate(ps, types.component, component_properties);
}

function _generate(ps, pageId, dataType, datas) {
  const keys = _.keys(datas);

  _.forEach(keys, key => {
    const data = datas[key];
    const typeFactory = documentServicesSchemas.services.getTypeFactoryByDataType(dataType, data.type);

    const instance = typeFactory.create(data);
    const path = getPageDataPath(dataType, pageId);
    path.push(instance.id);
    const pointer = ps.pointersCache.getPointer(instance.id, dataType, path);
    ps.dalCache.set(pointer, instance);
  })
}

export default {
  generate,
}
