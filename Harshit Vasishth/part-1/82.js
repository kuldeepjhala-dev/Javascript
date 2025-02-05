//new keyword use

//Not this type of function is called 'constructor function'.
//'constructor function' will start with Capital letter and followed by camelCase.
//It is useful because whenever we use any public library then it indicates that we need to call that function with 'new' keyword.
function CreateUser(firstName, lastName, email, age, address) {
  //   const user = Object.create(createUser.prototype); => function's Prototype will be automatically linked with object's __proto__.
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  //   return this; => we can return but new keyword will automatically return the properties and values
}

CreateUser.prototype.about = function () {
  return `Hi my name is ${this.firstName} and I am ${this.age} years old.`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user1 = new CreateUser(
  "kuldeep",
  "jhala",
  "kuldeep@gmial.com",
  "18",
  "Vadodara, Gujarat, India"
);

const user2 = new CreateUser(
  "Mohan",
  "patel",
  "mohan@gmial.com",
  "16",
  "Vadodara, Gujarat, India"
);

console.log(CreateUser.prototype);

console.log(user1);
const about1 = user1.about();
const is18 = user1.is18();
console.log(about1);
console.log(is18);

console.log(user2);
const about2 = user2.about();
const is182 = user2.is18();
console.log(about2);
console.log(is182);
