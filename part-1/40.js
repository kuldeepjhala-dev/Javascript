//spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2, 7, 9];
console.log(newArray); //op:[1, 2, 3, 4, 5, 6, 7, 9]

const newArray2 = [..."123456789"];
console.log(newArray2); //op:['1', '2', '3', '4', '5', '6', '7', '8', '9']

//spread operator in object
const obj1 = {
  k1: 1,
  k2: 2,
};

const obj2 = {
  k3: 3,
  k4: 4,
};

const newObj = { ...obj1, ...obj2, k5: 5, k6: 6 }; //Obj1 and obj2 should have unique keys or it will be overridden
console.log(newObj); //op:{k1: 1, k2: 2, k3: 3, k4: 4, k5: 5, k6: 6}

const newObj2 = { ..."abc" };
console.log(newObj2); //op:{0: 'a', 1: 'b', 2: 'c'}
