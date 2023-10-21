//funciton execution context

// while using function
//after the process of compilation is comoleted.
//in the
// Global execution context:
//1.Creating Phase:
//let foo as variable and getFullName() as a function are defined. let foo and const getFullName are uninitilized
//2. Code execution phase:
// - code will be executed line by line and the let foo will  be initilized with  values.
// - but when getFullName() function is called inside the code execution phase new "function execution phase" will be created.
// - a. Function Execution Phase:
//      - a.1 Local Memory Creation Phase:
//          - here array like object is created and stroes data like, argument : [...], firstName : kuldeep, lastName: jhala, myVar(type let) = uninitilized, fullName(type const) : uninitilized,  
//      - a.2 Code Execution: 
let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
  consolelog(arguments);
  let myVar = "var inside function";
  console.log(myVar);
  const fullName = firstName + " " + lastName;
  return fullName;
}

const personName = getFullName("kuldeep", "jhala");
console.log(personName);
