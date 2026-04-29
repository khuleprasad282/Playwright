const greet = function (name1) {
    return 'Hello,${name1}!';
}

const greet1 = (name2) => 'Hello,${name2}!';

console.log(greet("Prasad"));
console.log(greet1("Prasad"));

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const getEnv = () => "staging";
console.log(getEnv());

const getResult = (score) => {
    if (score >= 70) return "pass";
    return "fail";
};