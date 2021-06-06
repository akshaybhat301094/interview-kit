/**
 * We can have the following different types of binding
 *  1. IMPLICIT BINDING
 *  2. EXPLICIT BINDING
 *  3. new KEYWORD BINDING
 *  4. window BINDING
 *
 * Let's go through them one by one and get some clarity on 'this' in javascript
 * Inside a function the value of this depends on how the function is called.
 * Also in arrow functions, 'this' retains the value of the enclosing lexical context's 'this'
 */

// IMPLICIT BINDING

let obj = {
  name: 'Akshay',
  age: 26,
  sayName: function () {
    console.log('My name is ', this.name);
  },
};

obj.sayName(); // -> will return My name is Akshay
// Look at the left of the dot in the above line 'this' refers to obj

// EXPLICIT BINDING

let obj = {
  name: 'Akshay',
};

function sayName() {
  console.log('My name is ', this.name);
}

sayName.call(obj); // -> will return My name is Akshay

// In this case we are explicitely defining the context for this and telling the call method to set it to obj. We could also use bind or apply to do the same

// NEW keyword BINDING

let Person = function (name) {
  // this = {}
  this.name = name;
};

let akshay = new Person('Akshay');
// whenever we call new on the constructor function it creates a new object reference and bind's the this values to it as illustrated above. It kind of behaves like we are creating a new this = {} and binding the properties and methods to it.

// Window BINDING

function sayName() {
  console.log(this.name);
}

sayName();

// by default if the function is being called like shown above the 'this' is pointing to the window
// if we do window === this it will return true, also if we use strict mode in js it will set this to undefined in this particular case
