// Type Operators: typeof and instanceof

// 1. typeof - Returns a string indicating the type
console.log(typeof "Hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof {});      // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof null);    // "object" (Common JS Gotcha!)

// 2. instanceof - Checks if an object is an instance of a specific class/constructor
let arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
