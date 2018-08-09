import { observable, action } from 'mobx';

class Opts {

  @observable type;

  @observable required;

  @observable readOnly;

  @observable showTextOnLoad;

  @observable enableLimitLength;

  @observable enablePatternValidation;

  @observable enableMaximumValue;

  @observable enableMinimumValue;

  constructor({
    type,
    required = false,
    readOnly = false,
    showTextOnLoad = 'None',
    enableLimitLength = false,
    enablePatternValidation = false,
    enableMaximumValue = false,
    enableMinimumValue = false,
  }) {
    this.type = type;
    this.required = required;
    this.readOnly = readOnly;
    this.showTextOnLoad = showTextOnLoad;
    this.enableLimitLength = enableLimitLength;
    this.enablePatternValidation = enablePatternValidation;
    this.enableMaximumValue = enableMaximumValue;
    this.enableMinimumValue = enableMinimumValue;
  }
  
  @action setInputType(type) {
    this.type = type;
  }

  @action setRequired(required) {
    this.required = required;
  }

  @action setReadOnly(readOnly) {
    this.readOnly = readOnly;
  }

  @action setShowTextOnLoad(showTextOnLoad) {
    this.showTextOnLoad = showTextOnLoad;
  }

  @action setEnableLimitLength(enableLimitLength) {
    this.enableLimitLength = enableLimitLength;
  }

  @action setEnablePatternValidation(enablePatternValidation) {
    this.enablePatternValidation = enablePatternValidation;
  }
}

export default Opts;
