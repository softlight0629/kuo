import * as _ from 'lodash';
import mobx from 'mobx';

function handleAsyncAction(actionPromise, originalQueue, index, shouldThrowOnErrors) {
  actionPromise.then(function (stateChangeFunc) {
      mobx.action(function () {
          const queue = _.slice(originalQueue, index + 1);
          flushQueue(stateChangeFunc ? _.concat(stateChangeFunc, queue) : queue, shouldThrowOnErrors);
      })();
  });
}

function flushItemsAddedWhileFlushing() {
  if (!_.isEmpty(this.duringFlushQueue)) {
      const queue = this.duringFlushQueue;
      this.duringFlushQueue = [];
      flushQueue(queue, this.shouldThrowOnErrors);
  }
}


function flush(queue) {
  this.isDuringFlush = true;

  const runQ = () => {
      flushQueue(queue, this.shouldThrowOnErrors);
      flushItemsAddedWhileFlushing.call(this);
  };

  let err;
  if (this.shouldThrowOnErrors) {
      try {
          runQ();
      } catch (e) {
          err = e;
      }
  } else {
      runQ();
  }
  this.isDuringFlush = false;
  if (err && this.shouldThrowOnErrors) {
      throw err;
  }
}


const tags = {actionQueue: true};
function flushQueue(queue, shouldThrowOnErrors) {
  _.forEach(queue, function (action, index, originalQueue) {
      let returnedValue;
      if (shouldThrowOnErrors) {
          returnedValue = action();
      } else {
          try {
              returnedValue = action();
          } catch (e) {
              // utils.integrations.ravenUtils.captureError(e, {tags});
          }
      }

      if (_.get(returnedValue, 'then')) {
          handleAsyncAction(returnedValue, originalQueue, index, shouldThrowOnErrors);
          return false;
      }
  });
}

class ActionQueue {

  constructor(shouldThrowOnErrors) {
    this.queue = [];
    this.duringFlushQueue = [];
    this.isDuringFlush = false;
    this.preFlushOp = _.noop;
    this.postFlushOp = _.noop;
    this.shouldThrowOnErrors = shouldThrowOnErrors;
  }

  addItem(action) {
    this.queue.push(action);
  }

  flush() {
    if (this.isDuringFlush) {
      if (!_.isEmpty(this.queue)) {
        this.duringFlushQueue = this.queue;
      }
      return;
    }
    const clonedQueue = this.queue;
    this.queue = [];

    this.preFlushOp();

    mobx.runInAction(flush.bind(this, clonedQueue));

    this.postFlushOp();
  }

  runImmediately(action) {
    if (this.isDuringFlush) {
      action();
    } else {
      this.addItem(action);
      this.flush();
    }
  }

  registerPreFlushOperation(preFlushOp) {
    this.preFlushOp = preFlushOp;
  }

  registerPostFlushOperation(postFlushOp) {
    this.postFlushOp = postFlushOp;
  }
}

export default ActionQueue;
