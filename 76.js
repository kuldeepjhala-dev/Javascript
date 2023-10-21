//store methods in different object

const userMethods = {
  about: function () {
    return `Hi my name is ${this.firstName} and I am ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = createUser(
  "kuldeep",
  "jhala",
  "kuldeep@gmial.com",
  "18",
  "Vadodara, Gujarat, India"
);

const user2 = createUser(
  "Mohan",
  "patel",
  "mohan@gmial.com",
  "16",
  "Vadodara, Gujarat, India"
);

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
