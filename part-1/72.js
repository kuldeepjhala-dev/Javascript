//call , apply, bind.

function add(a, b) {
  console.log(a, b, a + b);
  console.log(this.uid, this.uname);
}

const user1 = {
  uid: "1A",
  uname: "kuldeep",
  about: function () {
    console.log(this.uid, this.uname);
  },
  Hobbies: function (h1, h2) {
    console.log(this.uid, this.uname);
    console.log(h1, h2);
  },
};

const user2 = {
  uid: "2B",
  uname: "Mohan",
};

// user1.about(); //op: 1A Kuldeep

//call()
// user1.about.call(user1); // 1A Kuldeep

//Now we want to use the about key's function with the data of user2.
// user1.about.call(user2); // 2B Mohan
//call() function's agrument will refer that agrument's objects keys in 'this'.

//call() method with parameters.
// user1.Hobbies.call(user1, "reading", "swimming"); //op: 1A kuldeep, reading  swimming
// user1.Hobbies.call(user2, "driving", "painting"); //op: 2B Mohan, driving  painting

//Method outside object can be also called using call(). But pass the object reference for accessing that objects values usign 'this' keyword.
// add.call(user1, 10, 20); // 10 20 30, 1A Kuldeep
// add.call(user2, 25, 25); // 25 25 50, 2B Mohan

//apply() -> It is similar to call(), just we pass arguments in an array
// user1.Hobbies.apply(user1, ["reading", "swimming"]); //op: 1A kuldeep, reading  swimming
// user1.Hobbies.apply(user2, ["driving", "painting"]); //op: 2B Mohan, driving  painting
// add.apply(user1, [10, 20]); // 10 20 30, 1A Kuldeep
// add.apply(user2, [25, 25]); // 25 25 50, 2B Mohan

//bind() -> It's same as call but does not executes the function but it copies the function agruments and the function to be used afterwards with that same arguments and fucntion.
const func = user1.Hobbies.bind(user1, ["reading", "swimming"]);
func(); //op: 1A kuldeep, reading  swimming
const func2 = add.bind(user2, 25, 25);
func2(); // 25 25 50, 2B Mohan

//NOTE

const myfun = user1.about;
myfun();//op: undefinde undefined => Because inside the there is a function of about property which uses 'this'. 
//inorder to avoid this error we use bind function

const myfun2 = user1.about.bind(user1);
myfun2();//op: undefinde undefined
