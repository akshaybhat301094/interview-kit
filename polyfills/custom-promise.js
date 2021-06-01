function CustomPromise(fn) {
  let state = 'pending';
  let value;
  let deferred = null;

  function resolve(newValue) {
    try {
      state = 'resolved';
      value = newValue;
      if (deferred) {
        handle(deferred);
      }
    } catch (err) {
      reject(err);
    }
  }
  function reject(reason) {
    state = 'rejected';
    value = reason;
    if (deferred) {
      handle(deferred);
    }
  }

  function handle(handler) {
    if (state === 'pending') {
      deferred = handler;
      return;
    }

    setTimeout(() => {
      let handlerCb;
      if (state === 'resolved') {
        handlerCb = handler.onResolved;
      }

      if (state === 'rejected') {
        handlerCb = handler.onRejected;
      }

      if (handlerCb) {
        let returnValueOrReason;
        try {
          returnValueOrReason = handlerCb(value);
        } catch (err) {
          handler.reject(err);
        }

        if (state === 'resolved') {
          handler.resolve(returnValueOrReason);
        } else if (state === 'rejected') {
          handler.reject(returnValueOrReason);
        }
      }
    }, 0);
  }

  this.next = function (onResolved, onRejected) {
    return new CustomPromise((resolve, reject) => {
      handle({
        onResolved,
        onRejected,
        resolve,
        reject,
      });
    });
  };

  fn(resolve, reject);
}

let result = new CustomPromise((resolve, reject) => {
  reject(new Error('promise failed'));
});

result.next(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
