// Hoisting behavior specifically for 'var'

console.log("Before declaration:", x); // Output: undefined
var x = "Internal Hoisting";
console.log("After declaration:", x); // Output: Internal Hoisting

// Inside a function
function test() {
    console.log("Inside function before:", y); // Output: undefined
    var y = 50;
    console.log("Inside function after:", y); // Output: 50
}
test();
