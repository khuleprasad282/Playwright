const user = { name1: "John", age: 40, city: "Pune" };
const { name1, age } = user;
console.log(name1);
console.log(age);

const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

const { country = "USA" } = user;
console.log(country);

const data = { user: { name: "John", address: { city: "Pune" } } };
const { user: { address: { city } } } = data;
