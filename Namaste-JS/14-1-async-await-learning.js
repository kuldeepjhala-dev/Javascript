//==> Example-1
//=> First clg(1) will be printed.
//=> When we call the demo() then it be pushed in the callstack.
//=> So the demo function will start executing synchronously.
//=> As it will run synchronously so first clg(2) will be printed.
//=> There we will hit the await p1, inside async function.
//=> When we hit the await p1, then at that time we will pop the async demo() function from the callstack.
//=> So the code will start run from next line after we have called demo() function.
//=>As it will run synchronously, so clg(3) will be printed.
//=> After 5000 ms, the promise p1 will be resolved. As soon as it is resolved, the demo() function is again pushed into callstack.
//=> As soon as the callback function in the setTimeout() is resolved then it will print clg(4).
//=> The demo() will run synchronously from where it was popped. So now it will print clg(5).
//=> Then it will print clg(6,p1Data) and promise data with it, and then clg(7).
//=> Now the demo() function will be popped out from callstack.
// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log(4);
// 		resolve("Promise-1 data");
// 	}, 5000);
// });
// async function demo() {
// 	console.log(2);
// 	const p1Data = await p1;
// 	console.log(5);
// 	console.log(6, p1Data);
// 	console.log(7);
// }
// console.log("1");
// demo();
// console.log("3");
//op: 1 to 7

//==> Example-2
// => Here first clg(1) will run as per js is synchronous
// => When we call the demo() function then it will be inserted in the call-stack
// => In demo() function, first we will print clg(2)
// => After that we will hit await p1. As p1 is a promise so when it will be resolved it will be returned, until then demo() function will be popped from the callstack
// => Now the line will be printed which was
// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log(4);
// 		resolve("Promise-1 data");
// 	}, 5000);
// });
// async function demo() {
// 	console.log(2);
// 	const p1Data1 = await p1;
// 	console.log(5);
// 	console.log(6, p1Data1);
// 	const p1Data2 = await p1;
// 	console.log(7, p1Data2);
// 	console.log(8);
// }
// console.log("1");
// demo();
// console.log("3");

// => Code phat jayega
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(44);
        resolve("Promise-1 data");
    }, 10000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(77);
        resolve("Promise-2 data");
    }, 5000);
});
async function demo() {
    console.log(2);
    const p1Data = await p1;
    console.log(5);
    console.log(6, p1Data);
    const p2Data = await p2;
    console.log(8, p2Data);
    console.log(9);
}
console.log("1");
demo();
console.log("3");

//=> code nahi phatega
// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log(44);
// 		resolve("Promise-1 data");
// 	}, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log(77);
// 		resolve("Promise-2 data");
// 	}, 10000);
// });
// async function demo() {
// 	console.log(2);
// 	const p1Data = await p1;
// 	console.log(5);
// 	console.log(6, p1Data);
// 	const p2Data = await p2;
// 	console.log(8, p2Data);
// 	console.log(9);
// }
// console.log("1");
// demo();
// console.log("3");