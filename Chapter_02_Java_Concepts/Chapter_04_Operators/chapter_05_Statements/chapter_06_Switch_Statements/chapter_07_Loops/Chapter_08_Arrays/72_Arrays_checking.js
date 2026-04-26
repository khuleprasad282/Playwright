let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

[80, 90, 85].every(s => s >= 70);
[80, 60, 85].every(s => s >= 70);

[80, 60, 85].some(s => s < 70);
[80, 90, 85].some(s => s < 70);

