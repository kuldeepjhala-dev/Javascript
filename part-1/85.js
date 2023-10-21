//Class

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about = function () {
    return `Hi my name is ${this.firstName} and I am ${this.age} years old.`;
  };

  is18 = function () {
    return this.age >= 18;
  };
}
//Class will work same as the commented code.
//There is nothing like class in javascript, its just a hoax which is used to make  work simplified.
//Internally work is done as we have done below.

// function CreateUser(firstName, lastName, email, age, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }

// CreateUser.prototype.about = function () {
//   return `Hi my name is ${this.firstName} and I am ${this.age} years old.`;
// };

// CreateUser.prototype.is18 = function () {
//   return this.age >= 18;
// };

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


console.log(CreateUser); //op: Defines whole structure of class.

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
