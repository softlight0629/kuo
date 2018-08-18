import * as _ from 'lodash';

const filtersDefinitions = [
  {name: 'kennedy'},
  {name: 'darken'},
  {name: 'blur'},
  {name: 'lighten'},
  {name: 'faded'},
  {name: 'kerouac'},
  {name: 'orca'},
  {name: 'sangria'},
  {name: 'gotham'},
  {name: 'nightrain'},
  {name: 'whistler'},
  {name: 'feathered'},
  {name: 'soledad'},
  {name: 'goldie'},
  {name: '3d'},
  {name: 'ink'},
  {name: 'manhattan'},
  {name: 'greenwash'},
  {name: 'organic'},
  {name: 'elmo'},
  {name: 'neptune'},
  {name: 'candyfloss'},
  {name: 'neonsky'},
  {name: 'hulk'},
  {name: 'bauhaus'},
  {name: 'seaweed'},
  {name: 'midnight'},
  {name: 'unicorn'},
  {name: 'blueray'},
  {name: 'malibu'},
  {name: 'redrum'},
  {name: 'flamingo'},
  {name: 'hydra'},
  {name: 'koolaid'},
  {name: 'pinkrinse'},
  {name: 'pixie'},
  {name: 'yellowstreak'},
  {name: 'lucille'}
];

/**
* Get filter definition names as array
* @returns {Array}
*/
function getNames() {
  return _.map(filtersDefinitions, 'name');
}

/**
* Get filter definition names as object
* @returns {[{}]}
*/
function getDefinitions() {
  return filtersDefinitions;
}

export default {
  getNames,
  getDefinitions
};

