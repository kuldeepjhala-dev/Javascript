//object destructing
const obj1 = {
  k1: 1,
  k2: 2,
  k3: 3,
};

//variable nameshould be same as proprty name while destructing
const { k1, k2, k3 } = obj1;
console.log(k1, k2, k3); //op:1 2 3

//if we want to use different variable name expect property name
const { k1: var1, k2: var2, k3: var3 } = obj1;
console.log(var1, var2, var3); //op: 1 2 3

const { k1: var4 } = obj1;
console.log(var4); //op:1
