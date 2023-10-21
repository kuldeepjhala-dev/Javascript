//super keyword

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

const obj1 = new Animal("bear", 20, 30);
console.log(obj1); //op: Animal {name: 'bear', age: 20}
console.log(obj1.eat()); //op: bear is eating
console.log(obj1.isSuperCute()); //op: false
console.log(obj1.isCute()); //op: true
// console.log(obj1.speed()); //op: Generates Error

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age); //'Name' and 'age' will be passed to its parent class
    this.speed = speed;
  }

  run() {
    return `${this.name} is running at speed of ${this.speed}kmph, and his age is ${this.age}. `;
  }
}

const doggy = new Dog("ceaser", 4, 20);
console.log(doggy); //op: Dog {name: 'ceaser', age: 4}
console.log(doggy.eat()); //op: ceaser is eating
console.log(doggy.isSuperCute()); //op: false
console.log(doggy.isCute()); //op: true
console.log(doggy.run()); //op: ceaser is running at speed of 20kmph, and his age is 4.
