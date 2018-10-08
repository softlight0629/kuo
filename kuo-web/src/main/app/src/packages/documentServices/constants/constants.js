
const pointers = {
  components: {
      PROPERTY_TYPES: {
          COMPONENTS: 'components',
          COMPONENT_TYPE: 'componentType',
          CONNECTION_QUERY: 'connectionQuery',
          DATA_QUERY: 'dataQuery',
          PROPERTY_QUERY: 'propertyQuery',
          DESIGN_QUERY: 'designQuery',
          BEHAVIOR_QUERY: 'behaviorQuery',
          ID: 'id',
          LAYOUT: 'layout',
          META_DATA: 'metaData',
          MOBILE_HINTS_QUERY: 'mobileHintsQuery',
          MODES: 'modes',
          SKIN: 'skin',
          STYLE_ID: 'styleId',
          PARENT: 'parent',
          TYPE: 'type'
      }
  },
  data: {
      DATA_MAPS: {
          BEHAVIORS: 'behaviors_data',
          CONNECTIONS: 'connections_data',
          DATA: 'document_data',
          DESIGN: 'design_data',
          MOBILE_HINTS: 'mobile_hints',
          PROPERTIES: 'component_properties',
          STYLE: 'theme_data'
      }
  }
}

export default {
  VIEW_MODES: {
    DESKTOP: 'DESKTOP',
    MOBILE: 'MOBILE',
  },

  PAGE_DATA_DATA_TYPES: {
    props: 'component_properties',
    data: 'document_data',
    design: 'design_data',
    behaviors: 'behaviors_data',
    connections: 'connections_data',
    style: 'theme_data',
    mobileHints: 'mobile_hints'
  },

  DATA_TYPES: {
    data: 'data',
    prop: 'props',
    design: 'design',
    theme: 'style',
    behaviors: 'behaviors',
    connections: 'connections',
    mobileHints: 'mobileHints',
  },

  pointers,
};
