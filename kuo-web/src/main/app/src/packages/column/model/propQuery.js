import { observable } from 'mobx';

class PropQuery {

  @observable alignType;

  @observable fittingType;

  @observable bgEffectName;

  @observable bgOpacity;

  @observable mediaQuality;
  
  constructor({
    alignType,
    fittingType,
    bgEffectName,
    bgOpacity,
    mediaQuality,
  }) {
    this.alignType = alignType;
    this.fittingType = fittingType;
    this.bgEffectName = bgEffectName;
    this.bgOpacity = bgOpacity;
    this.mediaQuality = mediaQuality;
  }
}

export default PropQuery;
