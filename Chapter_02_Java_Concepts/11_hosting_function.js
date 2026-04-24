// Function Hoisting: Declaration vs Expression

// 1. Function Declaration (Fully Hoisted)
greet(); // Result: "Hi there!"

function greet() {
    console.log("Hi there!");
}

// 2. Function Expression (Not Hoisted like declarations)
// morning(); // Error: ReferenceError or TypeError (depending on var/let)
var morning = function() {
    console.log("Good morning!");
};
morning(); // Works here
