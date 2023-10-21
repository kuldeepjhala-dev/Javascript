//getter, setter
class UserDetails {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printDetails() {
    console.log(`FirstName: ${this.firstName}, LastName: ${this.lastName}`);
  }

  //Defining getter Method
  get getNameDetails() {
    console.log(`FirstName: ${this.firstName}, LastName: ${this.lastName}`);
  }

  set SetFullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  changeNames(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user1 = new UserDetails("Kuldeep", "jhala");
user1.printDetails(); //op: FirstName: Kuldeep, LastName: jhala

//Below is called using getter method.
user1.getNameDetails; //op: FirstName: Kuldeep, LastName: jhala

//Method 1, to change the firstName and lastName by directly assigning.
user1.firstName = "jay";
user1.lastName = "Dhobi";

//Method 2. to change firstName and lastName  using method.
user1.changeNames("jay", "Dhobi");

//Method 3. Using setter method.
user1.SetFullName = "jay Dobhi"; //New name is set using setter.
user1.getNameDetails; //op: FirstName: Jay, LastName: Dobhi
