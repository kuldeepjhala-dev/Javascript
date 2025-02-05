//array push pop

//array shift unshift

let fruits = ["apple", "banana", "grapes"];
console.log(fruits); //op:['apple', 'banana', 'grapes']

//push() - it is used to insert element in an array. Element will be inserted from back of the array.
fruits.push("mango");
console.log(fruits); //op:['apple', 'banana', 'grapes','mango']

//pop() - it is used to remove last element from the array. It returns the popped element of the array.
let removedElement = fruits.pop();
console.log(removedElement); //op:mango
console.log(fruits); //op:['apple', 'banana', 'grapes']

//unshift() - it is used to insert element in an array. Elemen will be inserted form front of the array.
fruits.unshift("strawberry");
fruits.unshift("peach");
console.log(fruits); //op: ['peach', 'strawberry', 'apple', 'banana', 'grapes']

//shift() - it is used to remove first element from the array. I returns the popped element of the array.
let removedElement1 = fruits.shift();
console.log(removedElement1); //op:mango
console.log(fruits); //op:['strawberry', 'apple', 'banana', 'grapes']

//push and pop are faster compared to shift and unshift