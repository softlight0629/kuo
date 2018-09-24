import * as _ from 'lodash';
import React from 'react';

const getChildren = ({id, children, contentArea, isMobileView}) => {
  const styles = hasContentArea(contentArea, isMobileView) ? getContentAreaStyles(id, children, contentArea) : [];
  return [...]
}

const childrenRenderer = props => {
  const {id, contentArea, isPreviewMode, isMobileView } = props;
}
