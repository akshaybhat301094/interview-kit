/**
 *  Inheritance -> is a relationship -> Dog is an animal
 *  Composition -> has a relationship -> human has a hand
 *
 * The problem with inheritance is that it encourages you to go predict the future.
 *
 * Video source:- https://www.youtube.com/watch?v=wfMtDGfHWpA
 *
 */

////////////////// INHERITANCE /////////////////////

class Animal {
  walk() {
    console.log('This animal walks');
  }
}

class Dog extends Animal {
  bark() {
    console.log('This dog barks');
  }
}

let dog = new Dog();
dog.walk();
dog.bark();

////////////////// COMPOSITION /////////////////////

const walker = (state) => ({
  walk: () => console.log(state.name, 'walks'),
});

const barker = (state) => ({
  bark: () => console.log(state.name, 'barks'),
});

function Dog(state) {
  return { ...walker(state), ...barker(state) }; // Object.assign({}, walker(state), barker(state))
}

let dog = Dog({ name: 'Doggy' });
dog.walk();
dog.bark();
