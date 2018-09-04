import React from 'react';
import CompControl from '@packages/runtime/component/compCtrol';
import ContainerCompControl from '@packages/runtime/component/containerCompCtrol';
import compRegistrar from '@packages/compUtils/compRegistrar';

// 渲染父组件
function createComponent(compRef) {
  return (
    <CompControl astm={compRef} compRef={compRef} />
  )
}

function _createChildContainerComponent(compRef, extraProps) {
  return (
    <ContainerCompControl astm={compRef} compRef={compRef} { ...extraProps } />
  )
}

function _createChildComponent(compRef, extraProps) {
  return (
    <CompControl astm={compRef} compRef={compRef} { ...extraProps } />
  )
}

// 渲染子组件
function createChildComponent(compRef, extraProps = {}) {
  if (compRef.type === 'Container') {
    return _createChildContainerComponent(compRef, extraProps);
  }

  return _createChildComponent(compRef, extraProps);
}

// 渲染原子性组件
function createRRChildComponent(compType, extraProps = {}) {
  const CompClass = compRegistrar.getComp(compType);
  if (!CompClass) {
    return null;
  }

  return (
    <CompClass { ...extraProps } />
  )
}

export default {
  createComponent,

  createChildComponent,

  createRRChildComponent,
}
