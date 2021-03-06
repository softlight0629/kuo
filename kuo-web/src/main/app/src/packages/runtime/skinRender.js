import skinRegistrar from '@packages/compUtils/skinRegistrar';

function createSkinSpec(skinOfJson, compModel, SpecOfClazz) {
  const { spec: { rect, animation, ...rest }} = compModel;
  const specJson = {
    ...rest,
    rect,
    animation,
  };

  let spec;
  if (SpecOfClazz) { 
    spec = new SpecOfClazz(spec);
  } else {
    // spec = SpecFactory.create(specJson);
  }

  return spec;
}

function createSkinState(skinOfJson, StateOfClazz) {
  if (skinOfJson.state) {
    return;
  }

  let state;
  if (StateOfClazz) { 
    state = new StateOfClazz(state);
  } else {
    // state = StateFactory.create(skinOfJson.state);
  }

  return state;
}

export default {
  createSkinSpec,
  createSkinState,
};
