import * as _ from 'lodash';

const privateScopes = {};

class PrivateScope {

  constructor(privateServices) {
    this.privateServices = privateServices;
    this.queue = [];
    this.doneCallbacks = {};
    this.itemRunning = null;
    this.lastUpdateFinished = null;
    this.onErrorCallbacks = [];
    this.siteUpadtedCallbacks = [];
    this.actionQueue = privateServices.siteAPI.getActionQueue();
  }

  addToActionQueue() {}

  executeSetOperation() {}

  applySetOperationAndRunNext() {}

  executeOperation() {}

  runDoneCallbacks() {}

  runNextStepInQueue() {}

  onSiteUpdated() {}

  getLastQueueItem() {}

  createNewQueueItem() {}
}



class SetOperationQueue {

  constructor(privateServices) {
    this.siteId = privateServices.siteAPI.getSiteId();
    privateScopes[this._siteId] = new PrivateScope(privateScopes);
  }

  dispose() {}

  runSetOperation() {}

  isRunningSetOperation() {}

  executeAfterCurrentOperationDone() {}

  registerToSiteChanged() {}

  unRegisterAll() {}

  waitForChangesApplied() {}

  registerToSetOperationDone() {}

  flushQueueAndExecute() {}
}

export default SetOperationQueue;
