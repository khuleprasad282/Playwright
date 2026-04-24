// Nullish Coalescing (??) and Optional Chaining (?.)

// 1. Nullish Coalescing (??)
// Returns the right-hand side value when the left-hand side is null or undefined.
let userEmail = null;
let defaultEmail = "guest@example.com";
console.log(userEmail ?? defaultEmail); // "guest@example.com"

// 2. Optional Chaining (?.)
// Safely access nested properties without throwing an error if a parent is null/undefined.
let user = { profile: { name: "Prasad" } };
console.log(user?.profile?.name);   // "Prasad"
console.log(user?.address?.city);   // undefined (instead of error)
