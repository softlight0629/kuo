import * as _ from 'lodash';
import util from '@packages/util/util';
import stateManagement from '@packages/stateManagement/stateManagement';

function create(editorAPI) {
  const { asArray } = util.array;

  // updateSelectedComponents(compsToBeSelected) {
  //   const selectedCompRefs = stateManagement.selection.getSelectedCompsRefs();
  //   const isSelectedComponentChanged = !_.isEqual(selectedCompRefs, compsToBeSelected);

  //   if (isSelectedComponentChanged) {
  //     stateManagement.selection.selectComponents(compsToBeSelected);
  //   }
  // }

  // function selectComponentByCompRef(compRef) {
  //   let compsToBeSelected = asArray(compRef);
  //   compsToBeSelected = _.uniqBy(compsToBeSelected, 'id');

  //   if (compsToBeSelected.length > 30) {
  //     return;
  //   }

  //   updateSelectedComponents(compsToBeSelected)
  // }

  // function addComponentToSelectionByRef(compRef) {
  //   const components = asArray(compRef);
  //   const selectedComponents = getSelectedComponents();
  //   const nextSelectedComponents = selectedComponents.concat(components);

  //   selectComponentByCompRef(nextSelectedComponents);
  //   return selectedComponents;
  // }

  // function getSelectedComponents() {
  //   return stateManagement.selection.getSelectedComponents();
  // }

  // function selectSingleComponentByClick(compToBeSelected) {

  // }

  // function getSelectedComponentId() {
  //   const selectedComponent = _.head(getSelectedComponents());
  //   return _.get(selectedComponent, 'id');
  // }

  // function getSelectedComponents() {}

  // function isComponentSelected(compRef) {
  //   const selectedComponents = getSelectedComponents();
  //   if (_.isEmpty(compRef)) {
  //     return !_.isEmpty(selectedComponents);
  //   }

  //   const components = asArray(compRef);
  //   return _.every(components, function isContainedInSelectedComponents(comp) {
  //     return _.some(selectedComponents, comp);
  //   });
  // }

  function selectComponentByCompRef(compRef) {
    const compsToBeSelected = asArray(compRef);
    stateManagement.selection.selectComponents(compsToBeSelected);
  }

  function getSelectedComponents() {
    return stateManagement.selection.getSelectedCompsRefs();
  }

  return {
    // selectComponentByClick,
    selectComponentByCompRef,
    // addComponentToSelectionByRef,
    // getSelectedComponentId,
    getSelectedComponents,
    // isComponentSelected,
  }
}

export default {
  create,
}
