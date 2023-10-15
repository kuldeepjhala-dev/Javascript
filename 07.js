//trim()
let firstName = "    kuldeep    ";
console.log(firstName.length); //op:15
firstName = firstName.trim();
console.log(firstName.length); //op:7

//toUpperCase()
firstName = firstName.toUpperCase();
console.log(firstName); //op:KULDEEP

//toLowerCase()
firstName = firstName.toLowerCase();
console.log(firstName); //op:kuldeep

//slice(startIndex,endIndex)
//k u l d e e p
//0 1 2 3 4 5 6
let newName = firstName.slice(3, 7);//op:deep
console.log(newName);

newName = firstName.slice(3, 6); //op:dee
console.log(newName);

newName = firstName.slice(1, 5); //op:uldee
console.log(newName);

newName = firstName.slice(0, firstName.length); //op:kuldeep
console.log(newName);
