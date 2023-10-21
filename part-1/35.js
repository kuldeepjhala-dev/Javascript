//array destructuring

const myArray = ["v1", "v2", "v3"];
let [var1, var2, var3] = myArray;
console.log(var1); //op:v1
console.log(var2); //op:v2
console.log(var3); //op:v3

const myArray2 = ["v4"];
let [var4, var5, var6] = myArray2;
console.log(var4); //op:v4
console.log(var5); //op:undefined
console.log(var6); //op:undefined

const myArray3 = ["v5", "v2", "v3"];
let [var7] = myArray3;
console.log(var7); //op:v5

const myArray4 = ["v6", "v2", "v7"];
let [var8, , var9] = myArray4;
console.log(var8); //op:v6
console.log(var9); //op:v7

const myArray5 = ["v8", "v9", "v10", "v11", "v12", "v13"];
let [var10, var11, ...myNewArray] = myArray5;
console.log(var10); //op:v8
console.log(var11); //op:v9
console.log(myNewArray); //op:['v10', 'v11', 'v12', 'v13']
