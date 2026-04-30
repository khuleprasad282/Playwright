function getStatus(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Client error";
    if (code >= 500) return "Server error";
}

getStatus(200);
getStatus(404);
getStatus(500);

function logTest(name) {
    console.log('Running: ${name}');
}

logTest("Hi this is a log");

function aaa() {
    return [2, 2, 3, 5, 4];
}