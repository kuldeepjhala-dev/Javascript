//objects

//They are reference type
//arrays are no sufficient to show the real world data so we use objects
//Objects store key value pairs
//objects dont have index

//how to create and object
const person = {
  name: "Kuldeepsinh Jhala",
  age: 22,
  hobbies: ["coding", "reading", "working out"],
};
console.log(person);

//how to access data from object
console.log(person.name); //op:Kuldeepsinh Jhala
console.log(person.age); //op:22
console.log(person.hobbies); //op:['coding', 'reading', 'working out']

//how to add keyvalue pair in object
person.gender = "male";
person["gender"] = "male";
console.log(person.gender); //op:male

//other way to access data from object
console.log(person["name"]);//op:Kuldeepsinh Jhala, here  we have writtten key/property as string because in js key/property of object is stored as string 



