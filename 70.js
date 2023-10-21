//Methods

//Function inside object is called methods.


const printDetails = function () {
  console.log(`Hi my name is ${this.name}, I am ${this.age} years old.`);
};

const person1 = {
  name: "Kuldeep",
  age: 20,
  aboutMe: printDetails,
};

const person2 = {
  name: "Mohan",
  age: 30,
  aboutMe: printDetails,
};

const person3 = {
  name: "sabina",
  age: 40,
  aboutMe: printDetails,
};

const person4 = {
  name: "rahul",
  age: 50,
  aboutMe: printDetails,
};

person1.aboutMe(); //op: Hi my name is Kuldeep, I am 20 years old.
person2.aboutMe(); //op: Hi my name is Mohan, I am 30 years old.
person3.aboutMe(); //op: Hi my name is sabina, I am 40 years old.
person4.aboutMe(); //op: Hi my name is rahul, I am 50 years old.
