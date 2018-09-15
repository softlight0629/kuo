import * as _ from 'lodash';
import compFactory from '@packages/compUtils/compFactory';
import documentServicesSchemas from '@packages/documentServicesSchemas/documentServicesSchemas';

const dataTypes = {
  DesignData: 'design_data',
  DocumentData: 'document_data',
  ComponentProperties: 'component_properties',
  Components: 'components',
  Page: 'page',
}

// page pointers cache 初始化
function generatePagePointers(ps, pageData) {

  // cache  建表
  _.values(dataTypes).forEach(cacheName => {
    ps.addCachePointer(cacheName);
  });

  const { structure, data: { document_data, design_data, component_properties }} = pageData;

  // data 实例化 入 cache
  generateDocumentData(ps, document_data);

  generateDesignData(ps, design_data);

  generateComponentProperties(ps, component_properties);

  // model 实例化 入 cache
  generateStructureInfo(ps, structure)
}

// 构造 Page Model
function generateStructure(ps, structure) {
  const modelType = compFactory.getModelTypeByCompType(structure.componentType);

  // model 实例化
  const components = structure.components;
  const model = modelType.create(_.assign({}, structure, { components: _.map(components, component => component.id) }));

  // component 实例化
  _.forEach(components, component => {
    generateComponent(ps, component);
  });

  const pointer = ps.getPointerByDataType(dataTypes.Page);
  // pointer -> db cache table
  pointer.add(model.id, model);
}

// 构造 Component Model
function generateComponent(ps, component) {
  const modelType =  compFactory.getModelTypeByCompType(component.componentType);

  const components = component.components;
  const model = modelType.create(_.assign(_.assign({}, component, components ? { 
    components: _.map(components, component => component.id);
  }: {})));

  // 子组件 实例化
  if (components) {
    _.forEach(components, component => {
      generateComponent(ps, component);
    });
  }

  // 拿到 cache pointer
  const pointer = ps.getPointerByDataType(dataTypes.Components);
  // 组件实例入表
  pointer.add(model.id, model);
}

// design data 实例化，入 cache
function generateDesignData(ps, design_data) {
  _generate(ps, dataTypes.DesignData, design_data);
}

// document data 实例化, 入 cache
function generateDocumentData(ps, document_data) {
  _generate(ps, dataTypes.DocumentData, design_data);
}

// component properties 实例化，入 cache
function generateComponentProperties(ps, component_properties) {
  _generate(ps, dataTypes.ComponentProperties, design_data);
}

function _generate(ps, dataType, datas) {
  const keys = _.keys(datas);

  _.forEach(keys, key => {
    const data = datas[key];
    const typeFactory = documentServicesSchemas.services.getSchemaByDataType(dataType, data.type);

    const pointer = ps.getPointerByDataType(dataType);
    pointer.add(data.id, typeFactory.create(data));
  })
}

export default {
  generatePagePointers,
}
