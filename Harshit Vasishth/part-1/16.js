// and, or operator.

let firstName = "Kuldeep";
let age = 22;

if (firstName[0] == "K") {
  console.log("you name starts with K");
}

if (age > 18) {
  console.log("you are above 18");
}

//and-&& - if both condition true then true and if any one false then final coutcome is false
if (firstName[0] === "K" && age > 18) {
  console.log("name starts with 'K' and age is above 18");
} else {
  console.log("name does not starts with 'K' and age is not above 18");
}

//or-|| - if any one condition true then true if both false then false
if (firstName[0] === "K" || age > 18) {
  console.log("name starts with 'K' and age is above 18");
} else {
  console.log("name does not starts with 'K' and age is not above 18");
}
