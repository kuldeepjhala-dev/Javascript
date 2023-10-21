//Map()

//Map() is  iteratable
//Data is stored in ordered fashion
//Data is stored in (key,value) pair like object
//Duplicate keys are not allowed
//Objects can have keys of string or symbols only.
//Map can have keys of anything like object, number, string, array, etc.

//In map data is store in (key,value) format using set() method.
const person = new Map();
person.set("firstName", "kuldeep");
person.set("age", 10);
person.set(1, "one");
person.set([1, 2], "oneTwo");
console.log(person);

//inorder to fetch specific data we use get() method
// console.log(person.get("firstName")); //op: kuldeep
// console.log(person.get("age")); //op: 10
// console.log(person.get(1)); //op: one

for (let key of person.keys()) {
  //   console.log(key); //op: firstName, age, 1, (2)[1,2]
}

for (let key of person) {
  console.log(Array.isArray(key)); //op: True(4)
}
//It means that person Map(), has stored (key,value) pair as array in it. Like MAP([ [key,value], [Key,value],.....]);
//So we can destructure each array and we can get the values

for (let [key, value] of person) {
  console.log(key, value); //op: firstname kuldeep, age 10, 1 'one', (2)[1, 2] 'oneTwo'
}

const person2 = new Map([
  ["key", "value"],
  [1, 2],
  ["aa", 2],
]);
console.log(person2); //op:{'key' => 'value', 1 => 2, 'aa' => 2}

const user1 = { id: 1, age: 10 };
const user2 = { id: 2, age: 20 };

const extraInfo = new Map();
extraInfo.set(user1, { firstName: "kuldeep", gender: "male" });
extraInfo.set(user2, { firstName: "jhala", gender: "male" });

console.log(user1.id); //op:male
console.log(extraInfo.get(user1).gender); //op:male

