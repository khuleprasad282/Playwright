let str = "Hello, World! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());

str.trimStart();
str.trimEnd();

let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS");
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g, "PASS");

"HELLO" + " " + "World";
"Hello".concat(" ", "World");
'${"Hello"} ${"World"}';
'${"Hello"} ${"World"}';

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

"pass,fail,skip".split(",");
"hello".split("");

"test_login_pass".split("_").join(" ");

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);