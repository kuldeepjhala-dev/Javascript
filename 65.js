//iterables
//On which we can apply for of loop is called iterables.
//string, array are iterables

const name = "kuldeep";
for (let char of name) {
  console.log(char); //op:k,u,l,d,e,e,p
}
//so string is iteratable

const arr = [1, 2, 3];
for (let no of arr) {
  console.log(no); //op:1,2,3
}

//NOTE: We cannot iterate the object.

const lastName = "jhala";
console.log(lastName.length); //op:5
console.log(lastName[2]); //op:a
