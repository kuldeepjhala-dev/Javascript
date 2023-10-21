//difference between dot and bracket notation
const person = {
  name: "kj",
  age: 20,
  "person hobbies": ["swimming", "singing"],
};

// console.log(person.perosn hobbies);//It will GENERATE ERROE because of white space
console.log(person["person hobbies"]); //op:['swimming', 'singing']

const key = "email";
person[key] = "kuldeep@gmial.com";
console.log(person.email); //op:kuldeep@gmial.com

