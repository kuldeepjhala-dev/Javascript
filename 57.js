//filter() - Array method

//filter method is same as map() but it will only return boolean values either true or false.

const numbers = [2, 3, 4, 5];

const isEven = numbers.filter((no) => {
  return no % 2 === 0; //here it is returning the boolean value and if calculation is true then that index value will be copied in isEven array and if calculations is false then it value will not be copied in the isEven array
});

for (let no of isEven) {
  console.log(no); //op: 2, 4
}
