//eg - 1
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //op: 6

//eg - 2
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); //op: [1, 2, 3, 4]

//eg - 3
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); //op: [ 1, 2, 3 ]
console.log(copy); //op: [ 1, 2, 3, 4 ]

//eg - 4 
// (Object properties are copied into a new object.If keys clash(b), the last one(obj2.b) overwrites the previous.)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); //op: { a: 1, b: 3, c: 4 }

//eg - 5
const isSummer = true;
const fruits = {
    apple: 1,
    banana: 2,
    ...(isSummer ? {greenVegetables:10} :{ waterMeloon: 3 })
};
console.log(fruits); //op: { apple: 1, banana: 2, greenVegetables: 10 }


