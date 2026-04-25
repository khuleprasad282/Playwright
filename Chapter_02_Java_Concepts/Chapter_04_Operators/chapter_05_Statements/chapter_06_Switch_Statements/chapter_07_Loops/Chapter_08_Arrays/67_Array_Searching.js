let results = ["pass", "fail", "pass", "error", "fail"];

results.indexOf("fail");
results.indexOf("skip");

results.lastIndexOf("fail");

results.includes("error");
results.includes("skip");

let nums = [10, 25, 30, 45];
nums.find(x => x > 20);

nums.findIndex(n => n > 20);

nums.findLast(n => n > 20);
nums.findLastIndex(n => n > 20);