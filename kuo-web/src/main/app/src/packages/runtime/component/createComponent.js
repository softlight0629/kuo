
import React from 'react';
import CompControl from './compCtrol';
import ContainerCompControl from './containerCompCtrol';

export default function createComponent(compRef, c) {

  if (c) {
    return (
      <ContainerCompControl astm={compRef} compRef={compRef} />
    )
  }

  return (
    <CompControl astm={compRef} compRef={compRef} />
  )
}
