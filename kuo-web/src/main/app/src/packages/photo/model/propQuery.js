import { observable, action, computed } from 'mobx';

class PropQuery {

  @observable imageClickedAction;

  @observable keepProportion;

  constructor({
    imageClickedAction = 'Nothing',
    keepProportion = false,
  }) {
    this.imageClickedAction = imageClickedAction;
    this.keepProportion = keepProportion;
  }

  @action setImageClickedAction(imageClickedAction) {
    this.imageClickedAction = imageClickedAction;
  }

  @action setKeepProportion(keepProportion) {
    this.keepProportion = keepProportion;
  }
}

export default PropQuery;
