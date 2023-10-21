//how to iterate object

const person = {
  name: "kj",
  age: 20,
  "person hobbies": ["swimming", "singing"],
};

//1. using 'for in loop'
for (let key in person) {
  console.log(person[key]); //op:kj, 20, ['swimming', 'singing']
}

for (let key in person) {
  //   console.log(`${key} : ${person[key]}`); //op: name : kj, age : 20, peroson hobbies : ['swimming', 'singing']
  console.log(key, person[key]); //op: name : kj, age : 20, peroson hobbies : ['swimming', 'singing']
}

//2. using 'Object.keys' -> it returns an array
console.log(Object.keys(person)); //op: ['name', 'age', 'person hobbies']
console.log(typeof Object.keys(person)); //op: object

console.log(Array.isArray(Object.keys(person))); //op:true, as Object.keys() return array of keys of that object

for (let keys of Object.keys(person)) {
  console.log(person[keys]); //op:kj, 20, ['swimming', 'singing']
}
