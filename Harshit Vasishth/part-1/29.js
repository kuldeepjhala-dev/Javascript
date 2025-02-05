// how to clone array

//how to concatenate two arrays

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1 === array2); //op:true

let array3 = ["item1", "item2"];
console.log(array1 === array3); //op:false
console.log(array1 == array3); //op:false

//1. we can clone using slice method
let array4 = array1.slice(0); //slice(0) means from starting index to end index all elements
console.log(array1 === array4); //op:false, means data is same but they have different addresses in stack

//2. we can also clone using concat method
let array5 = [].concat(array1);
console.log(array1 === array5); //op:false, means data is same but they have different addresses in stack

//3. Most efficient way to clone array is using spread operator
let array6 = [...array1];
console.log(array1 === array6); //op:false, means data is same but they have different addresses in stack

//slice method is best performance wise.

//we can also use combination of slice and concat
let array7 = array1.slice(0).concat("item3", "item4");

//we can also pass the whole array in concat with extra elements
let array8 = array1.slice(0).concat(array7, ["item5", "item6"]);

//we can also add elements in slice
let array9 = [...array1, "item3", "item4"];
let array10 = [...array1, ...array2, ...array3];
