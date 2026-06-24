let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Prashik" };
let student3 = { name: "Prasad", "age": 47, phone: 7276657447 };

let JSON_student4 = {
    "name": "Prasad", "age": 42, "Phone": 98909447
};

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: 'pass' };
console.log(a1.status);

let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);

let b = a;
b.status = "fail";
console.log(a.status);

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);

const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json);

const t_js = {
    name: "prasad",
    age: 39
};
console.log(t_js);