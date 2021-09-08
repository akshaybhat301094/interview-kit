// For detailed explaination watch - https://www.youtube.com/watch?v=MiKdRJc4ooE

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(this.name + ' ' + 'is walking');
};

function Dog(name, breed) {
  Animal.call(this, name); // same as super -> calls the parent constructor function
  this.breed = breed;
}

// sets all the prototype methods of parent in child
Dog.prototype = Object.create(Animal.prototype);

// because of above line the constructor is reset so we have to set it explicitly
Dog.prototype.constructor = Dog;

Dog.prototype.race = function () {
  console.log(`Dog's breed is ${this.breed}`);
};

let dog = new Dog('Minnie', 'Pug');
dog.walk();
dog.breed();
