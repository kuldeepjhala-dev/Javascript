//sort() - Array  Method

//Other arrays method we not changing the original array. But this method will change the original array.

const nos = [30, 2, 4, 9, 1];
// console.log("BEFORE SORTING", nos); //op: [30, 2, 4, 9, 1]
// nos.sort();
// console.log("AFTER SORTING", nos); //op: [1, 2, 30, 4, 9]

//we can see that after applying sort() method to array nos, the array is sorted on the basis of nos -> element's first char aasci value
//sort() method converts the normal number into 'strings' and then comparares them on the basic of their aasci  values

//For Ascending sorting
// nos.sort((a, b) => {
// return a - b;
//   console.log(a, b); //op: 2 - 30, 4 - 2, 9 - 4, 1 - 9. Here ans = a - b, if (ans == positive) then swap(a,b) && if(ans == negative) then they remain in same position.
// });
// console.log(nos); //op: [1, 2, 4, 9, 30]

//For Descending sorting
// nos.sort((a, b) => {
// return b - a;
//   console.log(b, a); //op: 30 - 2, 2 - 4, 4 - 9, 9 - 1. Here ans = b - a, if (ans == negative) then swap(a,b) && if(ans == positive) then they remain in same position.
// });
// console.log(nos); //op: [30, 9, 4, 2, 1]

const products = [
  { pid: 1, pname: "a", pprice: 10 },
  { pid: 2, pname: "a", pprice: 9000 },
  { pid: 3, pname: "a", pprice: 500 },
  { pid: 4, pname: "a", pprice: 2500 },
  { pid: 5, pname: "a", pprice: 200 },
];

//Sorted on the basic of lowToHigh
// products.sort((a, b) => {
//     return a.pprice - b.pprice;
// });
// console.log(products);

//Sorted on the basic of highToLow
// products.sort((a, b) => {
//     return b.pprice - a.pprice;
// });
// console.log(products);

//But if I dont want to change the original array then we need to clone the array
//Sorted on the basic of lowToHigh and stored in another array  without changing the original array
const lowToHighProducts = products.slice(0).sort((a, b) => {
    return a.pprice - b.pprice;
});
console.log(lowToHighProducts);

//Sorted on the basic of highToLow and stored in another array  without changing the original array
const highToLowProducts = products.slice(0).sort((a, b) => {
    return b.pprice - a.pprice;
});
console.log(highToLowProducts);
