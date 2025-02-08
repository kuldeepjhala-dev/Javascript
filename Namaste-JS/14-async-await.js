// Async function always returns a promise
// In Async function if we return non promise value then it will wrap the value in a promise and returns it.
// Async and await are used to handle promises
// we can only use await inside the async function

//=>single promise one time
// const p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise Resolved Value!!!");
// 	}, 5000);
// });
// async function handelPromise() {
// 	console.log("2. Hello");
// 	// engine will wait for the promise to be resolved
// 	const val = await p;
// 	console.log("3. Namaste dev");
// 	console.log(val);
// }
// console.log("1. hii");
// handelPromise();
// console.log("4. bye");

//=> Single promise two times
// const p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise Resolved Value!!!");
// 	}, 5000);
// });
// async function handelPromise() {
// 	console.log("2. Hello");
// 	// engine will wait for the promise to be resolved
// 	const val1 = await p;
// 	console.log("3. Namaste dev");
// 	console.log(val1);
// 	const val2 = await p;
// 	console.log("4. Namaste dev");
// 	console.log(val2);
// }
// console.log("1. hii");
// handelPromise();
// console.log("4. bye");

//=> 2 different promises, with different time
// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise Resolved Value-1!!!");
// 	}, 10000);
// });
// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise Resolved Value-2!!!");
// 	}, 5000);
// });
// async function handelPromise() {
// 	console.log("2. Hello");
// 	const val = await p1;
// 	console.log("3. Namaste dev");
// 	console.log(val);
// 	const val2 = await p2;
// 	console.log("4. Namaste dev");
// 	console.log(val2);
// }
// console.log("1. hii");
// handelPromise();
// console.log("5. bye");

//=> 2 dfferent promises with differen times
// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise Resolved Value-1!!!");
// 	}, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise Resolved Value-2!!!");
// 	}, 10000);
// });
// async function handelPromise() {
// 	console.log("2. Hello");
// 	const val = await p1;
// 	console.log("3. Namaste dev");
// 	console.log(val);
// 	const val2 = await p2;
// 	console.log("4. Namaste dev");
// 	console.log(val2);
// }
// console.log("1. hii");
// handelPromise();
// console.log("5. bye");
