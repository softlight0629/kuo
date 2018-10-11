import * as _ from 'lodash';

const COMP_DATA_QUERY_KEYS = {
  data: 'dataQuery',
  props: 'propertyQuery',
  design: 'designQuery',
  behaviors: 'behaviorQuery',
  connections: 'connectionQuery',
  mobileHints: 'mobileHintsQuery'
};

export default {
  VIEW_MODES: {
    /**
     * @property {string}
     */
    DESKTOP: 'DESKTOP',
    /**
     * @property {string}
     */
    MOBILE: 'MOBILE'
  },

  DATA_TYPES: {
    data: 'data',
    prop: 'props',
    design: 'design',
    theme: 'style',
    behaviors: 'behaviors',
    connections: 'connections',
    mobileHints: 'mobileHints'
  },

  COMP_DATA_QUERY_KEYS,

  COMP_DATA_QUERY_KEYS_WITH_STYLE: _.assign({}, {
    data: 'dataQuery',
    props: 'propertyQuery',
    design: 'designQuery',
    behaviors: 'behaviorQuery',
    connections: 'connectionQuery',
    mobileHints: 'mobileHintsQuery'
  }, { style: 'styleId' }),

  PAGE_DATA_DATA_TYPES: {
    props: 'component_properties',
    data: 'document_data',
    design: 'design_data',
    behaviors: 'behaviors_data',
    connections: 'connections_data',
    style: 'theme_data',
    mobileHints: 'mobile_hints'
  },

  COMP_IDS: {
    PAGE_GROUP: 'SITE_PAGES',
    PAGES_CONTAINER: 'PAGES_CONTAINER',
    HEADER: 'SITE_HEADER',
    FOOTER: 'SITE_FOOTER',
    BACKGROUND: 'SITE_BACKGROUND',
    QUICK_ACTION_BAR: 'QUICK_ACTION_BAR',
    WIX_ADS: 'WIX_ADS',
    WINDOW: 'WINDOW'
  },
}
