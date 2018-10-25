

const applyFetch = (propType, fetchFunc, config) => {
  config = config || {};

  const newPropType = propType.bind(null);
  newPropType.fetch = fetchFunc;

  if (config.globalId) {
    newPropType.globalId = config.globalId;
  }

  return newPropType;
}

const createComponentMilaType = (propType, fetchFunc) => {
  return applyFetch(propType, fetchFunc);
}

const createComponentMilaTypeFetcher = (fetchFunc) => {
  return fetchFunc;
}

const createGlobalMilaType = (propType, fetchFunc, globalId) => {
  return applyFetch(propType, fetchFunc, { globalId });
}

const createGlobalMilaTypeFetcher = (fetchFunc, globalId) => {
  fetchFunc.globalId = globalId;
  return fetchFunc;
}

const isComponentMilaType = (milaType) => {
  return !milaType.globalId;
}

const isGlobalMilaType = (milaType) => {
  return !!milaType.globalId;
}

const getGlobalId = (milaTypeFetcher) => {
  return milaTypeFetcher.globalId;
}

const fetch = (milaType, props) => {
  return milaType.fetch(props);
}

export default {
  createComponentMilaType,
  createGlobalMilaType,
  createComponentMilaTypeFetcher,
  createGlobalMilaTypeFetcher,
  isComponentMilaType,
  isGlobalMilaType,
  getGlobalId,
  fetch,
}
