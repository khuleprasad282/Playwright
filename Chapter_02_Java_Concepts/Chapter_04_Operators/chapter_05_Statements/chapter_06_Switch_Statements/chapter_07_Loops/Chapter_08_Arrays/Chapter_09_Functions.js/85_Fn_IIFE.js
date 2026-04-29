function name1() {
    console.log("HI")
}

name1();

function() {
    console.log("HI");
}

function() {
    console.log("staging")
} ();

(() => {
    console.log("Setup complete");
})();
