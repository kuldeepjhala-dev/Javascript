//optional chaining

const user1 = {
  id: 1,
  name: { first: "kuldeep", last: "jhala" },
  age: 20,
};

console.log(user1.id); //op: 1
console.log(user1.name.first); //op: kuldeep

const user2 = {
  id: 2,
  //   name: { first: "Rahul", last: "kumar" },
  //   age: 20,
};

console.log(user2.id); //op: 1
// console.log(user2.name.first); //GENERATES ERROR, if somehow nested object is not created then we can use this to print or get undefined instead or error
console.log(user2.name?.first); //op: undefined
console.log(user2.age); //undefined

//in object if normal key is not present and it is been accessed then it will give output as 'undefined'. And if there is nested object and it is not present then it will give Error. Inorder to avoid error we use '?.', so if it is not present then it will give ouptut as 'undefined'
