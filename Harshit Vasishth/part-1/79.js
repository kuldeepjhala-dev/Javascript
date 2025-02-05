//Prototype

function hello() {
  console.log("hello");
}

hello(); //op: hello

console.log(hello.name); //op: hello => it returns the name of the function
//Here we can see that we are accessing a property of hello which is name. It is working like object.

//Note: function = function + empty object {}
//whenever we create a function we get an empty object. That object can be used as property of that function.

hello.kuldeep = function () {
  return "Kuldeep fuction is called";
};
//here we have created an property of object which is an function

console.log(hello.kuldeep()); //op: Kuldeep fuction is called

hello.age = 20;

console.log(hello.age); //op: 20

//So we can add the properties to the function's empty object and that empty object is called prototype

console.log(hello.prototype); //op: {constructor: ƒ} => constructor contains, kuldeep() and age.

//so we can add properties and values in prototype.

hello.prototype.great = function () {
  return "Hello I am a property of PROTOTYPE of the object";
};

console.log(hello.prototype); //op: {great: ƒ, constructor: ƒ} => here great: f, is the function.

console.log(hello.prototype.great()); //op: Hello I am a property of PROTOTYPE of the object


