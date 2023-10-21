//map() - Array method

const numbers = [2, 3, 4, 5];

const squared = numbers.map((value, index) => {
  return value * value;
});

for (let no of squared) {
  console.log(no); //4, 9, 16, 25
}

//Above, we have called map method on 'numbers' array. map method will call a callback function with parameters value and index just like forEach() method.
//callback function will visit each element. But here we will return the calculations.
//We are returning because map() method retunrs value forEach element of array ans we store that in an new array. That array is after word used.
//In above example the squared value of each  element of 'numbers' array is stored in new array named 'squared'.

const users = [
  { uid: 1, uname: "a" },
  { uid: 2, uname: "b" },
  { uid: 3, uname: "c" },
  { uid: 4, uname: "d" },
];

//if we want to create a new array which  will only store the unames of users then we can do that using map.
const unames = users.map((name) => {
  return name.uname;
});

for (let name of unames) {
  console.log(name); //a, b, c, d
}

