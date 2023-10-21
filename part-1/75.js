//create functions to create multiple objects

function createUserobj(firstName, lastName, email, age, address) {
  const user = {}; //obj created
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `Hi my name is ${this.firstname} and I am ${this.age} years old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUserobj(
  "kuldeep",
  "jhala",
  "kuldeep@gmial.com",
  "18",
  "Vadodara, Gujarat, India"
);

console.log(user1);
const about = user1.about();
const is18 = user1.is18();
console.log(about);
console.log(is18);
