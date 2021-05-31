// use of labels for javascript loops
loop1: for (let i = 0; i < 5; i++) {
  if (i == 1) continue loop1;
  loop2: for (let j = 0; j < 3; j++) {
    if (j == 1) continue loop2;
    console.log(i, j);
  }
}

// use of comma to modify a value
let a = 1;

let b = ((a = a + 2), a);

console.log(b);

// Array conversion shortcuts
let arr = [1, 2, 3];

arr.map(String); // -> will return ["1", "2", "3"]

// param validataion example
const isRequired = () => {
  throw new Error('param is required');
};

const print = (num = isRequired()) => {
  console.log(`printing ${num}`);
};

print(2); // outpup: printing 2
print(); // output : Error: param is required

// alternate of switch case with object literals.

const handleSaveCalculation = ({ key }) => {
  const actions = {
    'save-copy': saveCopy,
    override: override,
    default: () => {
      throw Error('Unknown action');
    },
  };

  const action = key in actions ? actions[key] : actions['default'];
  return action();
};

// bitwise

// Alternate of using Math.floor
let a = ~~10.4; // -> will return 10
// one issue with this approach though for negative numbers it will not round off the value
// eg ~~(-5.5) will return -5 but Math.floor(-5.5) returns -6

let arr = [1, 2, 3, 4, 5];
let idx = arr.indexOf(6);

// Traditional
if (idx !== -1) {
  // Do something
}

// Alternate
if (Boolean(~idx)) {
  // Do Something
}

// Another alternate
if (Boolean(idx ^ -1)) {
  // Do something
}

// even or odd

let num = 34;
console.log(num & 1); // returns 0 -> even

let num = 35;
console.log(num & 1); // returns 1 -> odd
