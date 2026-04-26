let orignal = [1, 2, 3];

let copy1 = [...orignal];

let copy2 = orignal.slice();
let copy3 = Array.from(orignal);
let copy4 = orignal.concat();

copy1.push(99);
console.log(orignal);
console.log(copy1);

let c = orignal;
orignal.push(99);
console.log(orignal);
console.log(copy1);