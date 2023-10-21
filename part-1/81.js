//new keyword

function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};

//new keyword is used.

//0. this = { }, 'this' keyword will be equal to the object, so we can access the properties of object using 'this' keyword.
//1. new keyword will create an object with properties, user1 = {firstName: Kuldeep, age:20}.
//2. It will return user1 object.
//3. about function will be added in prototype of user1 object. Because it is called using createUser() method.

const user1 = new createUser("kuldeep", 20);
console.log(user1);
user1.about(); //op: kuldeep 20

// console.log(createUser("kuldeep", 20));

console.log(createUser.prototype);
