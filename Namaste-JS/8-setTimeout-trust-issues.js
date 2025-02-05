// console.log("Start");
// document.getElementById("btn").addEventListener("click", function cb() {
// 	console.log("Callback");
// });
// console.log("End");
// ==> order of execution:
// start
// end
// Callback

console.log("Start");
setTimeout(function cb() {
    console.log("Callback");
}, 5000);
console.log("End");
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("While loop executed completed");
// ==> order of execution:
// start
// end
// While loop executed completed (execuate at 10 sec)
// Callback (execute at 10.1 sec)
