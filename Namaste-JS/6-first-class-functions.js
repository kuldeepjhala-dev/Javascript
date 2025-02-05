// a(); //It will not throw an error
// b(); //It will throw an error

//==>function statement aka function declaration (way to create function) -
function a() {
    console.log("a called");
}

//==>Function Expression (way to create function)
var b = function () {
    console.log("b called");
};

//==>major difference between above 2 functions is hositing.

//==>Anonymous function - function is used as a value, so we can store them in variable and pass them as function paramater and we can also return these function from a function.
// function () {
// }

//==>named function expression
var b = function xyz() {
    console.log("Hello");
};
// b(); //It will not generate error
// xyz(); - Generates error if called outside. But we can use it inside the function.
var c = function abc() {
    console.log(abc);
};

//==>difference between parameters and arguments
function car(parameter1, parameter2, parameter3) { }
car("argument1", "argument2", "argument3");

//==>First class functions or first class citizen - Means ability to use function as values
//We can pass function inside another function using arguments.
//We can also return a function from another function