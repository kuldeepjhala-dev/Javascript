//forEach() - Array method

const numbers = [2, 3, 4, 5];

//forEach is an array method. It take input a callback. That function will have 2 parameters numbers and index. This method will visit each element of array.
numbers.forEach(function (numbers, index) {
  //   console.log(numbers, index); //op: 2 0, 3 1, 4 2, 5 3
});
//in the above example the forEach method used for 'numbers[]' array. It is visiting each element using a callback function which has input parameters '1. value' and '2. index'.

numbers.forEach((number) => {
  // console.log(number * 2);//op: 4, 6, 8, 10
});

const users = [
  { uname: "aa", age: 10 },
  { uname: "bb", age: 20 },
  { uname: "cc", age: 30 },
  { uname: "dd", age: 40 },
  { uname: "ee", age: 50 },
];

//here it is visiting each object and we are accessing its data using it property. 'user' is pointing to each  object. Therefor 'user.propertyName' inorder to access specific property.
users.forEach((user, index) => {
  //   console.log(user); //op: {uname: 'aa', age: 10}.....,{uname: 'ee', age: 50}
  //   console.log(user.age); //op:10, 20, 30, 40, 50
  //   console.log(user.uname, index); //op:aa 0, bb 1, cc 2 .... ee 4
});

//we can also use 'for of' loop for same work and we will get the same output
for (let user of users) {
  // console.log(user); //op: {uname: 'aa', age: 10}.....,{uname: 'ee', age: 50}
  //   console.log(user.age); //op:10, 20, 30, 40, 50
    console.log(user.uname); //op:aa, bb , cc .... ee 
}

//we can access it using simple for loop also
for (let i = 0; i < users.length; i++) {
  //   console.log(users[i]); //op: {uname: 'aa', age: 10}.....,{uname: 'ee', age: 50}
  //   console.log(users[i].age); //op:10, 20, 30, 40, 50
  //   console.log(users[i].uname, i); //op:aa 0, bb 1, cc 2 .... ee 4
}
