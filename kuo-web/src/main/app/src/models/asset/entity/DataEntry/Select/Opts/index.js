import { observable, action } from 'mobx';

class Opts {

  @observable showTextOnLoad;

  @observable required;
  
  constructor({
    showTextOnLoad = 'None',
    required = false,
  }) {
    this.showTextOnLoad = showTextOnLoad;
    this.required = required;
  }

  @action setShowTextOnLoad(showTextOnLoad) {
    this.showTextOnLoad = showTextOnLoad;
  }

  @action setRequired(required) {
    this.required = required;
  }
}

export default Opts;
