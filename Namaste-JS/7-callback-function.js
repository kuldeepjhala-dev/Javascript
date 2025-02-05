//What is callback function is Javascript
// - functions are first class citizens in js
// - So we can take function and pass it into another function.
// - The function which you have passed into the another function is known as callback function.

//anonymous function as first parameter of the setTimeout() method is the callback function.
// setTimeout(function () {
// 	console.log("timer");
// }, 5000);

// //parameter a is a callback function
// function x(a) {
// 	a();
// }

// //Function y is a callback function
// x(function y() {
// 	console.log("one");
// });

//==>Check how many time button was clicked
//==>Method-1 using global variable
// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
// 	console.log("This is a callback function", ++count);
// });
//==>Method-2 by wrapping the code into another function, so xyz() will have closure of attachedEventListeners()
function attachedEventListeners() {
	let count = 0;
	document.getElementById("clickMe").addEventListener("click", function xyz() {
		console.log("This is a callback function", ++count);
	});
}
attachedEventListeners();

//==>why do we need to remove event listeners
//event listener are heavy, means it takes memeory. It forms a closure. So if we remove a event listener then it will free up the memory.