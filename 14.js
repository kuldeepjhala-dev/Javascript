//if else condition

let age = 27;

if (age > 18) {
  console.log("User can vote");
} else {
  console.log("user can play mario");
}

let num = 14;

console.log(14 % 2); //op:0, so it is even no

if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//falsy values are always false.
// false, "", null, undefined, 0.

let a = "";
if (a) {
  console.log("true");
} else {
  console.log("false"); //op:false
}

//truthy values are always true.
// true, "abc", 10, -1, -2 ....
if (-2) {
  console.log("true"); //op:true
} else {
  console.log("false");
}
