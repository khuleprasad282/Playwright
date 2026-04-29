function logResults(suiteName, ...results) {
    console.log('Suite:${suiteName}');
    console.log('Results:${results.join(",")}');
}
logResults("Auth Suite", "Pass", "Fail", "Pass", "skip");

function add(a, b, c) {
    return a + b + c;
}