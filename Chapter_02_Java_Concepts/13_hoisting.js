// More Hoisting Examples and Edge Cases

// The 'undefined' Trap
var a = 1;
function b() {
    a = 10;
    return;
    function a() {} // This 'a' is hoisted to the top of function b() scope!
}
b();
console.log(a); // Output: 1 (The global 'a' remains 1)

// Summary:
// - var is hoisted and initialized as undefined.
// - function declarations are hoisted fully.
// - let/const are hoisted but remain in the Temporal Dead Zone (TDZ).
