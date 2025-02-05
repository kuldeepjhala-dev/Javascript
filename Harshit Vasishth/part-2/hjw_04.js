// console.log(hello); // Uncaught ReferenceError: Cannot access 'hello' before initialization
// console.log(world); // Uncaught ReferenceError: Cannot access 'world' before initialization

let hello = "world";
const world = "hello";

console.log(hello); // op: world
console.log(world); // op: hello

console.log(kuldeep); // Uncaught ReferenceError: kuldeep is not defined

// Hoisting of let and const is also done but they are not initilised. In memeory they are deifned.
//In case of var the var variable is initilized with undefined

//TDZ (Temporal dead zone) - if we have not initilised the let/const variables and we have defined them then they are in TDZ. so they will give error and they will not be inatilised.

//In short we cannnot access let and const before defining and initilizing.

let a;
// const b; => Give error "Declaration must be initilized"
console.log(a); //op: undefined => But we cannot acces 'a' before the defining.
// console.log(b); // Gives error

