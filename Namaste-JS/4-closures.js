// function x() {
// 	var a = 7;
// 	function y() {
// 		console.log(a);
// 	}
// 	y();
// }
// x();

// function x() {
// 	var a = 8;
// 	function y() {
// 		console.log(a);
// 	}
// 	return y;
// }
// var z = x();
// console.log(z);
// z();

// function x() {
// 	let a = 8;
// 	function y() {
// 		console.log(a);
// 	}
// 	return y;
// }
// var z = x();
// console.log(z);
// z();

// function x() {
// 	var a = 8;
// 	function y() {
// 		console.log(a);
// 	}
// 	a = 1000;
// 	return y;
// }
// var z = x();
// console.log(z);
// z();

// function z() {
// 	var b = 9;
// 	function x() {
// 		var a = 8;
// 		function y() {
// 			console.log(a, b);
// 		}
// 		a = 1000;
// 		y();
// 	}
// 	x();
// }
// z();

//Example of data privacy using closure
// function counter() {
// 	var count = 0;
// 	return function incrementCounter() {
// 		count++;
// 		console.log(count);
// 	};
// }
// var counter1 = counter();
// counter1();
// counter1();
// counter1();
// var counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();

//function constructor using closures
// function Counter() {
// 	var count = 0;
// 	this.incrementCounter = function () {
// 		count++;
// 		console.log(count);
// 	};
// 	this.decrementCounter = function () {
// 		count--;
// 		console.log(count);
// 	};
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

//Disadvantages
//overconsumption of memory using closure
//closed variables are not garbage collected
//if not handled properly then it may lead to memory leaks
//Garbage collector is removes variables who are not in used

//relation between garbage collector and closures
// function a() {
//     var x = 0,
//         z = 9;
//     return function b() {
//         console.log(x);
//     };
// }
// var y = a();
//....As we can see above is closure. So it will be stored in memory even when not in used. So closures can may lead to memeory overconsumotion. But now browsers are smart and have good garbage collector. As in above example we can see that z var is not used in the internal nested function so it is not needed in the closure. So garbage collector is removing it.
// y();


// uses of closures :-
// 1. Module Design Pattern
// 2. Currying
// 3. Functions like once
// 4. memoize
// 5. maintaining state in async world
// 6. setTimeouts
// 7. Iterators
// and many more...