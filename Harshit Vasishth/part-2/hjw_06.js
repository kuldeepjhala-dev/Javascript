//lexical environment and scope chain

//Global Execution Context:
//Inside Global Execution Context there will be function Execution context.
//Function Execution context:
//There are two phases.
//1. Local Memory Creation Phase:
// - Array like object means that we can access keys using index and we can apply length property on them. But data inside object will be in key:Value pair. And Each key:value pair has a index.
// - here array like object is created and stroes data like, argument : [...], firstName : undefined.
//2. Code Execution:
// - Line by line code will be executed and firstName = Kuldeep will be assigned then it will print firstName.
// - When we are printing the lastName it will check in funciton execution phase but it is not defined so it will check in Global Execution Context.
// - In global execution context the lastName = Kuldeep, so the function will use that lastName and print 'jhala'.
const lastName = "jhala";
function getName() {
  const firstName = "Kuldeep";
  console.log(firstName);
  console.log(lastName);
}

getName();
