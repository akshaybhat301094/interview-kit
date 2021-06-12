/**
 * make a function to flatted the object and nesed objects
 */

let person = {
  name: 'akshay',
  address: {
    city: 'udhampur',
    distt: {
      code: 182101,
      a: {
        b: 23423,
      },
    },
  },
};

const flatten = (obj) => {
  let result = {};

  (function helper(item, label) {
    if (typeof item !== 'object') return;
    for (let key in item) {
      if (typeof item[key] !== 'object') {
        result[`${label}_${key}`] = item[key];
      } else {
        helper(item[key], `${label}_${key}`);
      }
    }
  })(obj, 'person');

  return result;
};

console.log(flatten(person));
