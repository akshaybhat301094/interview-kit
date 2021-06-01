debounceBtn.addEventListener(
  'click',
  customDebounce(function () {
    console.info('Hey! It is', new Date().toUTCString());
  }, 3000)
);

// custom debounce

function customDebounce(fxn, delay) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => fxn.apply(context, args), delay);
  };
}

// custom throttle

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
