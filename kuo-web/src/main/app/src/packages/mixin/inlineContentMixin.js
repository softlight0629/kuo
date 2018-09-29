import * as _ from 'lodash';
import childrenRenderer from '@packages/core/components/childrenRenderer/childrenRenderer';


function inlineContentMixin(component) {

  function getChildrenRenderer({
    overrides,
    contentArea,
    children
  } = {}) {
    const {id, meshParams, isPreviewMode, isMobileView, children: propsChildren, isMeshLayoutMechanism, fixedChildrenIDs, browser} = this.props

    const props = {
      isPreviewMode,
      isMobileView,
      browser,
      contentArea,
      id,
      children: children || propsChildren || [],
    }

    return childrenRenderer(props);
  }
}
