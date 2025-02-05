//Function Declaration

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

function isEven(value) {
  return value % 2 === 0;
}

function findFirstChar(str) {
  return str[0];
}

console.log(findFirstChar("abc")); //op:a 
console.log(isEven(2)); //op:true
console.log(findTarget([1, 2, 3, 4, 5], 5)); //op:5
