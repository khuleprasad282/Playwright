let env = "staging";

function setupConfig() {
    let timeout = 3000;
    console.log(env);
    console.log(timeout);
}

setupConfig();
console.log(env);


let g_x = 10;

function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);
    }

    inner();
    console.log(y);
}