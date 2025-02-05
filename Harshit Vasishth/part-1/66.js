//set()

//set is iteratable.
//we cannot store duplicate data in set.
//we cannot access set individual elements with index
//order of data in set is not guranteed

const numbers = new Set(); //Set
const arr = [1, 2, 3, 3, 4, 5]; //array

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
//set.add(6);//It will GENERATE ERROR as we cannot add duplicate values in set
numbers.add(arr);
//set.add(arr);//It will GENERATE ERROR as we cannot add duplicate values in set
numbers.add([1, 2, 3]);
numbers.add([1, 2, 3]); //It will not generate error because two different array of same data is created

console.log(numbers); //op:1, 2, 3, 4, 5, 6, Array(), Array(), Array()

//find length of set
let length = 0;
for (let c of numbers) {
  length++;
}

console.log(length); //op:9

const ids = [1, 2, 3, 4, 3, 4, 5, 5, 6, 6];
const uniqueIds = new Set(ids);
console.log(uniqueIds); //op:1, 2, 3, 4, 5, 6. duplicates are removed

console.log(uniqueIds.has(1)); //op:true
