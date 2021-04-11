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

// Alternate of using Math.floor
let a = ~~10.4; // -> will return 10
// one issue with this approach though for negative numbers it will not round of the value
// eg ~~(-5.5) will return -5 but Math.floor(-5.5) returns -6
