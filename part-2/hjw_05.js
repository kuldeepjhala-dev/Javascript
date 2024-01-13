//funciton execution context

// while using function
//after the process of compilation is comoleted.
//in the
// Global execution context:
//1.Creating Phase:
//let foo as variable and getFullName() as a function are defined. let foo and const personName are uninitilized
//2. Code execution phase:
// - code will be executed line by line and the let foo will  be initilized with  values.
// - but when getFullName() function is called inside the code execution phase new "function execution phase" will be created.
// - a. Function Execution Phase:
//      - a.1 Local Memory Creation Phase:
//          - Array like object means that we can access keys using index and we can apply length property on them. But data inside object will be in key:Value pair. And Each key:value pair has a index.
//          - here array like object is created and stroes data like, argument : [...], firstName : kuldeep, lastName: jhala, myVar(type let) = undefined, fullName(type const) : undefined,
//      - a.2 Code Execution:
//          - Inside code execution phase Line by line code will be executed of the function and values will be assigned to the myVar and fullName.

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
  console.log(arguments); //op: Arguments(2) ['kuldeep', 'jhala', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  let myVar = "var inside function";
  console.log(myVar);
  const fullName = firstName + " " + lastName;
  return fullName;
}

const personName = getFullName("kuldeep", "jhala");
console.log(personName);
