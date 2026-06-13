function runTest(testName, callback) {
    let result = "pass";
    callback(testName, result)
}

function onComplete(nmae, result) {
    console.log('${name} finished with: ${result}');
}

runTest("loginTest", onComplete)