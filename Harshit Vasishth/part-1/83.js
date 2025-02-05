//hasOwnProperty()

function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
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

for (let key in user1) {
  //It is showing all keys. Keys of function as well as keys of prototype.

  //console.log(key); //firstName, lastName, email, age, address, about, is18.

  //If we want to fetch only function's property not its prototype property then we will user hasOwnProperty().
  //hasOwnProperty(key) will check that is the key of the fucntion, if yes then it will return true else it will return false

  if (user1.hasOwnProperty(key)) {
    console.log(key); //op: firstName, lastName, email, age, address.
  }
}
