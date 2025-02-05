//here output is undefined because the gloabl scope while compilation was var myFunction = undefined;
//Thus the gloabla scope:
//var myFunction = undefined;

//in the code execution phase line by line varibales will be assigned with its values.
//Global execution context is stored in stack.

//Gloabl execution context has 2 parts :
//1. Creation Phase (Gloabl memory)
// - all things are initilized inside global memory
// - all variables first are initilized with 'undefined' so our 'var myfunction' is also initilised with undefined.

//2. Code execution phase
// - code will be executed line by line and the myFunciton var will be assigned myFunction() function.

console.log(myFunction); //op: undefined

//here function is declared using 'funciton expression' syntax.
var myFunction = function () {
  console.log(hello);
};

console.log(myFunction); //op: ƒ () { console.log(hello); }
