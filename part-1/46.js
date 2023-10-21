// Arrow Functions

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

//we can remove parenthesis if there is only single parameter
const isEven = value => {
  return value % 2 === 0;
};

//we can also remove curly brackets and return statement if there is only single line code
const findFirstChar = str => str[0];

console.log(findFirstChar("abc")); //op:a
console.log(isEven(2)); //op:true
console.log(findTarget([1, 2, 3, 4, 5], 5)); //op:5

