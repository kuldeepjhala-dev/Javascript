//PHASE 1: compilation phase, It has 3 types
//1. Tocanizing/lexing - breaks  the code in small tokens and determines the scope of variables and functions.
//2. parsing - understands the tokens and generates Abstract syntax tree.
//3. code generation phase.

//Thus the gloabl scope will be defined:

// myFunction = function myFunction() {
//   console.log("this is my funciton");
// }
//-> we have defined with var so it is initilized with undefined.
// var firstName = undefined;
// var lastName = undefined;
// var fullName = undefined;

//in the code execution phase line by line varibales will be assigned with its values.

//Global execution context is stored in stack.
//Gloabl execution context has 2 parts
//1. Creation Phase (Gloabl memory)
// - all things are initilized inside global memory
// - window object is always present.
// - 'this' will point to window object.
// - all variables first are initilized with 'undefined'.
// - function created with 'funciton' keyword will be added.
//2. Code execution phase
// - code will be executed line by line

console.log(this); //op: window{}
console.log(window); //op: window{}
//below we can see that myFuction() gives output but fullName dont gives undefined. Because in global scope function is defined already.
//This is called Hoisting. we can also run the function.
console.log(myFunction); //op:  function myFunction() { console.log("this is my funciton");}
console.log(fullName); //op: undefined

//Here function is declared with 'function' keyword.
function myFunction() {
  console.log("this is my funciton");
}

var firstName = "kuldeep";
var lastName = "Jhala";
var fullName = firstName + " " + lastName;
console.log(fullName); //op: kuldeep Jhala

//Now the Global execution context will be popped from the stack.
