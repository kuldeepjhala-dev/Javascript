//object.create()

const obj1 = {
  key1: "val1",
  key2: "val2",
};

const obj2 = {
  key3: "val3",
};

console.log(obj1); //op: {key1: 'val1', key2: 'val2'}
console.log(obj2); //op: {key3: 'val3'}

console.log(obj1.key1); //op: val1
console.log(obj1.key2); //op: val2
console.log(obj2.key3); //op: val3

//But if we access obj2.key1 or obj2.key2 => output will be undefined because we have not created key of that name.
console.log(obj2.key1); //op: undefined
console.log(obj2.key2); //op: undefined

//So inorder to access property that is not defined in your object but it is present in other object we can do that using Object.create() method.
//We need to define an empty object and connect already created object with it.

const obj3 = Object.create(obj1);
obj3.key4 = "val4";
console.log(obj3.key1); //op: val1
console.log(obj3.key2); //op: val2
console.log(obj3.key3); //op: undefined => as we have not linked it with object.create() method.
console.log(obj3.key4); //op: val4

//This is done through __proto__ or[[Prototype]].
//obj3 will have its own keys, and it will also have keys of obj1 as it will be in [[Prototype]].

console.log(obj3.__proto__); //op: {key1: 'val1', key2: 'val2'}
//obj3 [[prototype]] contains keys of obj1 because we have linked them using object.create().
//Now obj3 can access all property of obj1. First it will check that required property is present in its own object or not. If it is present then it will use that or else it will find that property from obj1 object's properties.
