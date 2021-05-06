const throttle = (fn, timer) => {
  let flag = true;
  return (...args) => {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, timer);
    }
  };
};
