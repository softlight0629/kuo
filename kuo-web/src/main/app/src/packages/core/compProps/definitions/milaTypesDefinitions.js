import * as _ from 'lodash';
import PropTypes from 'prop-types';

function clonePropType(propType) {
  const newPropType = propType.bind(null);
  newPropType.isRequired = propType.isRequired.bind(null);
  return newPropType;
}

function createMilaTypesDefinitions(namespace, prefix) {
  return _.reduce(namespace, (acc, val, key) => {
    const path = prefix ? `${prefix}.${key}` : key;
    switch (typeof val) {
      case 'function':
        val = clonePropType(val);
        val.id = path;
        val.isRequired.id = path;
        return _.set(acc, key, val);
      case 'object':
        return _.set(acc, key, createSantaTypesDefinitions(val, path))
      default:
        throw new Error(`wtf: ${key}`);
    }
  }, {});
}


const styleShape = PropTypes.shape({
  bottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  top: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  right: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  position: PropTypes.string,
});

const columnsContainerChildren = PropTypes.objectOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alignment: PropTypes.number.isRequired,
}));

export default createMilaTypesDefinitions({
  isMobileView: PropTypes.bool,
  siteWidth: PropTypes.number,
  isPreviewMode: PropTypes.bool,
  Fonts: {
    fontsMap: PropTypes.array,
  },
  ColumnsContainer: {
    childrenData: columnsContainerChildren,
  },
  Container: {
    defaultBackgroundStyle: PropTypes.object,
    defaultContentArea: PropTypes.object,
  },
  Component: {
    id: PropTypes.string,
    rootId: PropTypes.string,
    pageId: PropTypes.string,
    structure: PropTypes.shape({
      componentType: PropTypes.string.isRequired,
      dataQuery: PropTypes.string,
      propertyQuery: PropTypes.string,
      designQuery: PropTypes.string,
      components: PropTypes.array,
      skin: PropTypes.string,
      styleId: PropTypes.string,
      id: PropTypes.string,
      type: PropTypes.string
    }),
    styleId: PropTypes.string,
    skin: PropTypes.string,
    compProp: PropTypes.object,
    compData: PropTypes.object,
    compDesign: PropTypes.object,
    layout: PropTypes.object,
    style: styleShape,
    key: PropTypes.string,
    ref: PropTypes.string,
    dimensions: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    theme: PropTypes.object,
  },
  Device: {
    isTouchDevice: PropTypes.bool,
    isMobileDevice: PropTypes.bool,
    devicePixelRatio: PropTypes.number,
  },
  Mobile: {
    siteZoomRatio: PropTypes.number,
    mobileZoom: PropTypes.number,
  },
  RenderFlags: {
    componentPreviewState: PropTypes.string,
    componentViewMode: PropTypes.string,
  },
  Animations: {
    animationProperties: PropTypes.object,
  },
  ServiceTopology: {
    scriptsDomainUrl: PropTypes.string,
    staticMediaUrl: PropTypes.string,
    scriptsLocationMap: PropTypes.object,
    getMediaFullStaticUrl: PropTypes.func,
  },
  Browser: {
    browser: PropTypes.object,
  },
  PageGroup: {
    pagesToRender: PropTypes.array,
    createPageProps: PropTypes.func,
  },
});
