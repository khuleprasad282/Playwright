function runwithLogging(testfn, testName) {
    console.log('starting: ${testName}');
    let result = testfn();
    console.log('Finished: ${testName} -> ${result}');
}


