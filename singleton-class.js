// Creating singleton class using ES6 class based implementation

class SingletonClass {
  constructor(attr) {
    if (SingletonClass._instance) {
      return SingletonClass._instance;
    }

    SingletonClass._instance = this;
    this.attr = attr;
  }
}

let inst1 = new SingletonClass('first');
let inst2 = new SingletonClass('second');

console.log(inst1.attr); // returns 'first';
console.log(inst2.attr); // returns 'first';

// Creating singleton class using Proxy
const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (!this.instance) this.instance = new target(...argumentsList);
      return this.instance;
    },
  });
};

class MyClass {
  constructor(msg) {
    this.msg = msg;
  }

  printMsg() {
    console.log(this.msg);
  }
}

MySingletonClass = singletonify(MyClass);

const myObj = new MySingletonClass('first');
myObj.printMsg(); // returns 'first'

const myObj2 = new MySingletonClass('second');
myObj.printMsg(); // returns 'first'
