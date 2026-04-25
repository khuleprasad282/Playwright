const { SourceTextModule } = require("node:vm");

let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

console.log("-----------------TATA---------------");

let removed = browser.shift();
console.log(browser);
console.log(removed);

console.log("-----------------TATA-------------------");

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("opera is removed from the selenium!");
    }
}