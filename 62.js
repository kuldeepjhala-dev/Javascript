// some() - Array Method

const nos = [1, 2, 3, 5, 7, 9]; //Here only '2' is even no.
const isAnyElementEven = nos.some((no) => no % 2 == 0);
//call back method will return boolean values. If any one boolean value is true then some() method will return true else false.

console.log(isAnyElementEven); //op:true

const products = [
  { pid: 1, pname: "a", pprice: 10 },
  { pid: 2, pname: "b", pprice: 1200 },
  { pid: 3, pname: "c", pprice: 500 },
];

const isAnyPriceAbove1000 = products.some((pro) => pro.pprice > 1000);
console.log(isAnyPriceAbove1000); //op:true

