import { observable } from 'mobx';

class DataQuery {

  @observable background = {};

  constructor({ 
    background,
   }) {
     this.background = background;
  }
}

export default DataQuery;
