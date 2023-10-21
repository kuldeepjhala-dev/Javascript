//class with extends keyword

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

const obj1 = new Animal("bear", 20);
console.log(obj1); //op: Animal {name: 'bear', age: 20}
console.log(obj1.eat()); //op: bear is eating
console.log(obj1.isSuperCute()); //op: false
console.log(obj1.isCute()); //op: true

class Dog extends Animal {}

const doggy = new Dog("ceaser", 4);
console.log(doggy); //op: Dog {name: 'ceaser', age: 4}
console.log(doggy.eat()); //op: ceaser is eating
console.log(doggy.isSuperCute()); //op: false
console.log(doggy.isCute()); //op: true
