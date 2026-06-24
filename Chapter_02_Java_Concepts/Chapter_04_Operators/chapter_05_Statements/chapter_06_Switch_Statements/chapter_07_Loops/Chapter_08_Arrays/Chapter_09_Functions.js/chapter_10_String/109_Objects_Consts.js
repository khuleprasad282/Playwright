const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

const key = "age";
console.log(user[key]);

user.city = "NYC";
user.age = 31;
console.log(user);