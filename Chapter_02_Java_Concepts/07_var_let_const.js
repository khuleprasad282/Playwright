// var, let, and const - Understanding Scope and Re-declaration

// 1. var - Function scoped, can be re-declared and updated.
var name = "Prasad";
var name = "khule"; // Re-declaration allowed
name = "Prasad Khule"; // Update allowed
console.log(name);

// 2. let - Block scoped, cannot be re-declared in the same scope, can be updated.
let age = 20;
// let age = 22; // Error: Identifier 'age' has already been declared
age = 25; // Update allowed
console.log(age);

// 3. const - Block scoped, cannot be re-declared or updated.
const country = "India";
// country = "USA"; // Error: Assignment to constant variable.
console.log(country);
