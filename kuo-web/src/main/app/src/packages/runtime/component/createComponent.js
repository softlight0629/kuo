
import React from 'react';
import CompControl from './compCtrol';

export default function createComponent(component) {

  console.log('createComponent...........');
  return (
    <CompControl astm={component} compRef={component} />
  )
}
