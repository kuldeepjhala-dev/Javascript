//computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const val1 = "objval1";
const val2 = "objval2";

//we want to use variables values in object

//here while creating object we can't directly use key1 as property we need to put it in [] <= computed properties
const obj = {
  [key1]: val1,
  [key2]: val2,
};

// we can also assign it using square brackets
const obj2 = {};
obj2[key1] = val1;
obj2[key2] = val2;

console.log(obj); //op:{objkey1: 'objval1', objkey2: 'objval2'}
console.log(obj2); //op:{objkey1: 'objval1', objkey2: 'objval2'}

