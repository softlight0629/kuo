import { observable } from 'mobx';

class Page {
  
  @observable pageResId;

  // NewWin|CurrentWin
  @observable openType;
  constructor({ pageResId, openType }) {
    this.pageResId = pageResId;
    this.openType = openType;
  }
}

export default Page;
