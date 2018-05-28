import { observable, action} from "mobx";

'use strict';

class AstGroupUiStore {

  @observable astms = [];

  @action grpAstm(astm) {
    this.astms.push(astm);
  }

  alignToLeft() {}

  alignToRight() {}

  alignToTop() {}

  alignToCenter() {}

  alignToBottom() {}

  alignToMiddle() {}

  distributeX() {}

  distributeY() {}
}
