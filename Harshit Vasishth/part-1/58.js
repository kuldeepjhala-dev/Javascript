//reduce() - array method

const numbers = [6, 2, 3, 9, 5];

const totalSum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0); //In the end '0' means that we have initilised the previousValue with '0'.

console.log(totalSum); //op:15

//Reduce method is used to  accumulate a result and return single value at the end after visiting each element
//previousValue = 0     currentValue    return
//0                     6               6
//6                     2               8
//8                     3               11
//11                    9               20
//20                    5               25

const userCart = [
  { pid: 1, pname: "laptop", pprice: 60000 },
  { pid: 2, pname: "mobile", pprice: 50000 },
  { pid: 3, pname: "tv", pprice: 50000 },
];

const totalPayement = userCart.reduce((totalPrice, productPrice) => {
  return totalPrice + productPrice.pprice;
}, 0); //total price is initilised with '0'.

console.log(totalPayement); //op:160000



