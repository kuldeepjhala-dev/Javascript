// console.log(a);
// getName(a);
// getName2(a); //Generater error => ReferenceError: Cannot access 'getName2' before initialization
// getName3(a); //Generater error => ReferenceError: Cannot access 'getName3' before initialization
// console.log(getName);
console.log(getName2); //Generater error => ReferenceError: Cannot access 'getName2' before initialization
// console.log(getName3); //Generater error => ReferenceError: Cannot access 'getName3' before initialization

var a = 10;

//Function creation type 1 : "Declaration notation"
function getName(a) {
	console.log("Hello js");
	console.log(a);
}

//Function creation type 2 : "Arrow function"
//Arrow function behaves like a variable. It is assigned in phase-2 of execution context. In phase-1 it will be undefined so it generates error.
const getName2 = (a) => {
	console.log("Hello js - 2");
	console.log(a);
};

//Function creation type 3 : "Function as values"
//Arrow function behaves like a variable. It is assigned in phase-2 of execution context. In phase-1 it will be undefined so it generates error.
const getName3 = function (a) {
	console.log("Hello js - 3");
	console.log(a);
};

// console.log(a);
// getName(a);
// getName2(a);
// getName3(a);
// console.log(getName);
// console.log(getName2);
// console.log(getName3);

//The function is undefined in phase-1 and if it is accessed before definition then it will generate the error (reference error - cannot accessed before initilization).
//The variable is undefined in phase-1 and if it is accessed before definition then it will not generate error. It will be undefined.
