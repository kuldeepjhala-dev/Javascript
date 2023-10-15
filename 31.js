// use const for creating an array

const nos = [1, 2, 3, 3]; //It is an constant array. It is best practice to use const for every reference type
//But we can use push(), pop(), shift() and unshift() methods on const.

// nos = [5, 6];//It will generate ERROR because we cannot reassign the const value

nos.pop();
nos.push(4);

console.log(nos); //op:[1, 2, 3, 4]
