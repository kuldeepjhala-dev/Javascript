//intro to arrays
//It is reference type so it is an object
//how to create arrays
//ordered collections of arrays

let fruit = ["Apples", "mango", "grapes"];
console.log(fruit); //op:['Apples', 'mango', 'grapes'] 0:"Apples", 1:"mango", 2:"grapes", length:3
console.log(fruit[0]); //op:Apples

let mixed = [1, 2, 3.5, "four", null, undefined];
console.log(mixed[3]); //op:four
console.log(mixed[4]); //op:null
console.log(mixed[5]); //op:undefined

fruit[1] = "banana";
console.log(fruit[1]); //op:banana

console.log(typeof fruit); //op:object, but there are many types of objects in js
let obj = {};//object literals
console.log(typeof obj);//op:object
//so to identify an array we use Array.isArray(fruit);
console.log(Array.isArray(fruit));//op:true
console.log(Array.isArray(obj));//op:false
