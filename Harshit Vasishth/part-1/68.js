//cloning the object usign Object.assign

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = Object.assign({}, obj1);

console.log(obj1); //op:{1:'a', 2:'b'}
console.log(obj2); //op:{1:'a', 2:'b'}
