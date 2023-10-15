//for loop in array

let nos = ["a", "b", "c", "d", "e"];
console.log(nos.length); //op:5
let fruits = [];
for (let i = 0; i <= nos.length - 1; i++) {
  console.log(nos[i].toUpperCase());
  fruits.push(nos[i].toUpperCase());
}

for (let j = 0; j < fruits.length; j++) {
  console.log(fruits[j]);
}
 