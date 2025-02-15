//Map, filter and reduce are array methods.

// => Map
// - Map method is used for creating an new array from existing one.
// - Applying the function to each one of the elements of the first array.
// - Returns updated array based on callback function logic

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [];
// console.log(arr);
// const newArr = arr.map((i) => {
// 	return i + 10;
// });
// console.log(newArr);

const x = 325;
console.log(x.toString(15)); //Convert the value to hexadecimal
console.log(x.toString(2)); //Convert the value to binary

// => Filter
// - The filter() method takes each element in an array and it applies a conditional statement against it.
// - If this conditional returns true, the element gets pushed to the output array.
// - If the condition returns false, the element does not get pushed to the output array.
// - The syntax for filter is similar to map, except the callback function should return true to keep the element, or false otherwise.
// - In the callback, only the element is required.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [];
// const newArr = arr.filter((no) => {
// 	return no % 2 == 0;
// });
// console.log(newArr);

// filter() is used to get all the students whose grades are greater than or equal to 90.

// const students = [
// 	{ name: "Quincy", grade: 96 },
// 	{ name: "Jason", grade: 84 },
// 	{ name: "Alexis", grade: 100 },
// 	{ name: "Sam", grade: 65 },
// 	{ name: "Katie", grade: 90 },
// ];
// console.table(students);
// const higherGrader = students.filter((student) => {
// 	return student.grade >= 90;
// });
// console.table(higherGrader);

// => reduce()
// The reduce() method reduces an array of values down to just one value.
// To get the output value, it runs a reducer function on each element of the array.
// The callback argument is a function that will be called once for every item in the array.
// This function takes four arguments, but often only the first two are used.
// - accumulator - the returned value of the previous iteration
// - currentValue - the current item in the array
// - index - the index of the current item
// - array - the original array on which reduce was called
// - The initialValue argument is optional.If provided, it will be used as the initial accumulator value in the first call to the callback function.

// const arr = [1, 2, 3, 4, 5];
// const sumOfArray = arr.reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue;
// }, 100);
// console.log(sumOfArray);
