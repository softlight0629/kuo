import * as _ from 'lodash';
import mobx from 'mobx';
import SiteDataPrivates from '@packages/documentServices/dataAccessLayer/SiteDataPrivates';
import propsSelectorsUtils from '../utils/propsSerlectorsUtils';

const privates = new SiteDataPrivates();

function getStructure(props) {
  return _.invoke(props.structure, 'get') || props.structure;
}

function createComputedFromMilaTypeDefinition(milaTypeDefinition, state, props, propName) {
  const fetcher = state.siteAPI.getMilaFetcher(milaTypeDefinition);
  const globalId = propsSelectorsUtils.getGlobalId(fetcher);

  if (globalId) {
    const globalComputedMap = _.get(state.siteData, ['globalComputedMap'], {});
    if (globalComputedMap[globalId]) {
      return globalComputedMap[globalId];
    }

    const globalComputed = mobx.computed(function () {
      try {
        return state.fetchMilaType(milaTypeDefinition, state, _.omit(props, ['structure']));
      } catch (e) {
        console.log(e);
      }
    }, { name: `globalSantaType_${globalId}` });

    _.set(globalComputedMap, globalId, globalComputed);

    return globalComputed;
  }

  return mobx.computed(function() {
    try {
      return state.fetchMilaType(milaTypeDefinition, state, props);
    } catch (e) {
      console.log(e);
    }
  }, { name:  `${propName}_${props.id}` });
}

function createComputed(milaTypeDefinition, state, props, propName) {
  return createComputedFromMilaTypeDefinition(milaTypeDefinition, state, props, propName);
}

class ComputedPropsManager {

  constructor(state, props, propTypes, shouldObserveChanges) {
    this.siteAPI = state.siteAPI;
    this.siteData = state.siteData;
    this.observerChanges = shouldObserveChanges;
    this.milaTypes = propTypes ? milaTypesUtils.getMilaTypesFromPropTypes(propTypes): {};
    this.id = props.id;
    this.state = state;
  }

  getComputedProps(props, invalidateCache) {
    if (!invalidateCache) {
      const cachedComputedProps = this.computedPropsFunction;
      if (cachedComputedProps) {
        return cachedComputedProps;
      }
    }

    const computedPropTypesMap = _.mapValues(this.milaTypes, (milaType, propName) => createComputed(milaType, this.state, props, propName));

    this.clearChangedPropsMap();

    if (this.observerChanges) {
      _.forOwn(computedPropTypesMap, (computed, propName) => {
        mobx.observe(computed, () => {
          this.changedProps[propName] = true;
        })
      });
    }

    this.computedPropsFunction = mobx.computed(() => {
      return _.mapValues(this.computedPropsFunction, computedPropType => {
        return computedPropType.get();
      })
    }, { name: `computedProps_${this.id}` });

    return this.computedPropsFunction;
  }

  getChangedProps() {
    return this.changedProps;
  }

  clearChangedPropsMap() {
    this.changedProps = {};
  }
}

function getInstance(state, props, milaTypes, milaTypesIdentifier, shouldObserveChanges) {
  const currPrivates = privates.get(state.siteData) || {};

  if (!currPrivates.computedPropsBuilderInstanceMap) {
    currPrivates.computedPropsBuilderInstanceMap = {};
  }

  const instanceMap = currPrivates.computedPropsBuilderInstanceMap;

  privates.set(state.siteData, _.assign(currPrivates, { computedPropsBuilderInstanceMap: instanceMap }));

  const getInstanceKey = () => {
    const structure = getStructure(props);
    return `${props.rootId}-${_.get(structure, 'componentType')}-${props.id}_${milaypeIdentifier}`
  }

  const key = getInstanceKey();
  if (!instanceMap[key]) {
    instanceMap[key] = new ComputedPropsManager(state, props, milaTypes, shouldObserveChanges);
  }

  return instanceMap[key];
}

export default {
  getInstance,
};
