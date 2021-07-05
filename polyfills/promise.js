let PENDING = 0;
let RESOLVED = 1;
let REJECTED = 2;

function CustomPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let errors = [];

  function resolve(res) {
    if (state !== PENDING) return;
    state = RESOLVED;
    value = res;
    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;
    state = REJECTED;
    value = err;
    errors.forEach((e) => e(value));
  }

  this.then = (callback) => {
    if (state === RESOLVED) {
      callback(value);
    } else {
      handlers.push(callback);
    }
    return this;
  };

  executor(resolve, reject);
}

let promise = new CustomPromise((res, rej) => {
  setTimeout(() => res('Hello world'), 3000);
}).then((val) => {
  console.log(val);
});
