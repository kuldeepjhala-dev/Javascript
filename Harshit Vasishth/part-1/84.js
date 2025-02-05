//More about prototype

const arr = [1, 2, 3];
//const arr = new Array(1,2,3); //Both are same. Syntax is different
console.log(arr);

// console.log(arr.prototype);//op: undefined

//in order to get the prototype we use Object.getPrototypeOf() method.

console.log(Object.getPrototypeOf(arr)); //op: List of prototype of type Array.
console.log(Array.prototype); //op: List of Prototype of type Array.

console.log(Array.isArray(Array.prototype)); //op: true

//But prototype is an object which  comes with function
const myfun = function () {};
console.log(myfun.prototype); //op: Prototype of myfun which is of object type
console.log(Array.isArray(myfun.prototype)); //op: false

//Array prototype is of Array type and function prototype is of function type. But we can change the prototype type from object to Array.

myfun.prototype = [];
console.log(myfun.prototype); //op: Prototypes of myfun which is of array type
console.log(Array.isArray(myfun.prototype)); //op: true