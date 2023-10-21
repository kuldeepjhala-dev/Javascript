//fill() - Array Method
//fill(value,start,end) -> syntax
const myArray = new Array(10).fill(0);
console.log(myArray); //op:  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const myArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
myArray2.fill(-1, 2, 5);
console.log(myArray2); //op: [0, 1, -1, -1, -1, 5, 6, 7, 8, 9]


