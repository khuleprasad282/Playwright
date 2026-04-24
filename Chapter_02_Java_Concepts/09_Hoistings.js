// Hoisting - JavaScript's default behavior of moving declarations to the top.

// Variable Hoisting with var
console.log(a); // Output: undefined (not ReferenceError)
var a = 10;

// Function Hoisting
sayHello(); // Output: "Hello World!" - Works because function declarations are fully hoisted.

function sayHello() {
    console.log("Hello World!");
}

// Hoisting with let/const
// console.log(b); // Error: ReferenceError (Temporal Dead Zone)
let b = 20;
