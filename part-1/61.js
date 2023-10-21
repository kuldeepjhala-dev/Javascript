// every() - Array Method

const nos = [2, 4, 6, 8, 10];
const isEven = nos.every((no) => no % 2 == 0);
//call back method will return boolean values.
//every method will return single boolean value based on values of callback method.
//If all callback method == true then every() will return true. If any callback return then every method will return false.
console.log(isEven); //op:true

const products = [
  { pid: 1, pname: "a", pprice: 10 },
  { pid: 2, pname: "a", pprice: 9000 },
  { pid: 3, pname: "a", pprice: 500 },
  { pid: 4, pname: "a", pprice: 2500 },
  { pid: 5, pname: "a", pprice: 200 },
];

const isPriceBelow30000 = products.every((product) => {
  return product.pprice < 30000;
});
console.log(isPriceBelow30000); //op:true
