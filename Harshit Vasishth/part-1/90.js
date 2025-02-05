//static methods and properties
//static methods and properties and properties can be accessed directly by class name. We dont need to create an object inorder to access static property.
class UserDetails {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static staticMethod() {
    return "this is static method";
  }

  static property1 = 10;
  static property2 = "I am a property";

  printDetails() {
    console.log(`FirstName: ${this.firstName}, LastName: ${this.lastName}`);
  }
}

console.log(UserDetails.staticMethod()); //op: this is static method
console.log(UserDetails.property1, UserDetails.property2); //op: 10, 'I am a property'
