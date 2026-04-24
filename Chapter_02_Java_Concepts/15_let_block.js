// Block Scoping with let and const

{
    let x = "I am inside a block";
    const y = "I am also inside";
    var z = "I can escape the block!";
}

// console.log(x); // Error: ReferenceError (x is block-scoped)
// console.log(y); // Error: ReferenceError (y is block-scoped)
console.log(z); // Output: "I can escape the block!" (var is function-scoped)

// This is why let/const are preferred - they prevent global variable leakage.
