//primitive vs reference datatype

//Premitive datatype - Here data is stored in stack and each variable has its own individual address
let num1 = 10;
let num2 = num1; //individual copy is created and where num1 data is copied to num2 data
console.log("num1:", num1);
console.log("num2", num2);
num1++;
console.log("num1 incremented");
console.log("num1:", num1);
console.log("num2", num2);

//Reference datatype - here data is stored in heap, that data's address is stored in stack. So we can use multiple variables to point single heap
let ref1 = [1, 2, 3];
let ref2 = ref1; // ref2 is also pointing the same data as ref1, no individual copy of data is created
console.log("ref1:", ref1);
console.log("ref2:", ref2);
ref1.pop();
console.log("ref1 element is popped");
console.log("ref1:", ref1);
console.log("ref2:", ref2);
