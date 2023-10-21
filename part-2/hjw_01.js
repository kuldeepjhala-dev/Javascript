//code will first compile then it will execute
//javascript is synchronous programming language
//it is single threaded programming language means if one thread is not executed until then next thread will not be executed
//lexical scope means that the way we have written code defines the scope. eg: lexically firstName is declared in gloabl scope. It means where in what scope we have written the code

//PHASE 1: Compilation phase, It has 3 types
//1. Tocanizing/lexing - breaks  the code in small tokens and determines the scope of variables and functions.
//2. parsing - understands the tokens and generates Abstract syntax tree.
//3. code generation

//=> why we compile ?
//code has to pass through early error checking.
//we need to know determining appropriate scope for the variable

//inorder to perform above 2 task we compile code.

//PHASE 2: Code Execution phase
//javascript code executes inside execution context.
//first execution context is global execution context.

//Gloabl execution context has 2 parts
//1. Creation Phase (Gloabl memory)
// - all things are initilized inside global memory
// - firstName variable will be first initilized as 'undefined'.
// - 'this' value is set to 'window object'. Contains many properties. window object is provided by browser.
//2. Code execution phase
// - code will be executed line by line

console.log(this); //op: window{}
console.log(window); //op: window{}
console.log(firstName); //op: undefined
// var firstName = ."kuldeep"; //op:Syntax error
var firstName = "kuldeep"; //op:
console.log(firstName); //op: kuldeep
