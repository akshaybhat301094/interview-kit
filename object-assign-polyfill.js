/**
 *
 * @param {the empty object in which we need to store the final data} target
 * @param  {...any} args
 * @returns this function is a polyfill of the object.assign provided by javascript by default
 */

function customAssign(target, ...args) {
  if (!target)
    throw new TypeError('Cannot convert undefined or null to object');

  target = {};

  for (let idx = 0; idx < args.length; idx++) {
    let source = args[idx];

    if (source) {
      for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }

  return target;
}

const obj = customAssign({}, { key1: 1, key2: { arr: [] } });

console.log(obj);
