import skins from './services/skins';
import dataSchemas from './schemas/allDataSchemas/allDataSchemas';

const dataTypeSchemas = {
  document_data: dataSchemas,
}

const typeFactorys = {};

function getTypeFactoryByDataType(dataType, type) {
  // 创建一个 factory.
  // 尝试查找 factory, 如果没有就去 schemas 着，找到之后就构造一个 factory, 放到 typeFac
  const key = dataType + '_' + type;
  let typeFactory = typeFactorys[key];
  if (typeFactory) {
    return typeFactory;
  }

  const schemas = dataTypeSchemas[dataType];
  if (!schemas) {
    return;
  }

  const _type = schemas[type];
  if (_type) {
    typeFactory = {
      create: (props) => {
        return new _type(props);
      },
    }

    typeFactorys[key] = typeFactory;
  }

  return typeFactory;
}

// 根据类型，实例化一个 DataItem 的 class 实例
function createDataItemByType() {}


function createPropertiesItemByType() {}

export default {
  schemas: {
    dataSchemas,
  },

  services: {
    getTypeFactoryByDataType,

    createDataItemByType,

    createPropertiesItemByType,
  }
}
