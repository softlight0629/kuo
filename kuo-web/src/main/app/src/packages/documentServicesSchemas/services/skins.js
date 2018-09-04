import skinsByComponentType from '@packages/documentServicesSchemas/schemas/skinsByComponentType';

function getComponentSkins(componentType) {
  if (skinsByComponentType[componentType]) {
    return skinsByComponentType[componentType].slice();
  }

  return [];
}

export default {
  getComponentSkins,
}
