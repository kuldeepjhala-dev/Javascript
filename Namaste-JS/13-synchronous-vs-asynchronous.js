//synchronous in Javascript
// console.log("first");
// console.log("second");
// console.log("third");
// op:
// first
// second
// third

//When you want to maintain the sequence of execution of the code then at that time you should use the synchoronous javascript. Javascript is by defaut synchronous single threaded language.

//Asynchronous in Javascript
function calculator(a, b, cbOperation, executeMeAtLast) {
    console.log(`No1: ${a}, No2: ${b}`);
    setTimeout(() => {
        const ans = cbOperation(a, b);
        executeMeAtLast(ans);
    }, 2000);
}
function addFunc(a, b) {
    return a + b;
}
function showOutput(ans) {
    console.log(`Ans : ${ans}`);
}
calculator(10, 20, addFunc, showOutput);

//Above is the asynchronous function in javascript. If you want to execute some task in the background or any task that takes more time to execute then that task must be asynchronous. So once we get result then at that time we will just use the result.
//In javascript we can achieve the asynchronous operation using the callbacks and promises. Above in the given example we are using callback. 