// Identifying var leaks in IF blocks and Loops

// 1. IF Block
if (true) {
    var globalVar = "Oops, I am global!";
}
console.log(globalVar); // Works!

// 2. FOR Loop
for (var i = 0; i < 5; i++) {
    // some code
}
console.log("i leaked outside loop:", i); // Output: 5

// Use 'let' to avoid these leaks!
for (let j = 0; j < 5; j++) {
    // j is only available here
}
// console.log(j); // ReferenceError
