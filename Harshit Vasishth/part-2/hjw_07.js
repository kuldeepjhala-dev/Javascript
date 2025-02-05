//Closure

//----------------------------------

// Function Can return Function

// function outerFunction() {
//   function innerFunction() {
//     console.log("Hello World");
//   }
//   return innerFunction();
// }
// outerFunction();
//op:Hello World

//----------------------------------

//Function is returning another function.
//When we are returning the inner Function that function will have all agruments of itself and of outerFunciton.
//Thats the reason we are able to access 'firstName', 'lastName'.

// function printFullNameOuter(firstName, lastName) {
//   function printFullNameInner() {
//     console.log(firstName + " " + lastName);
//   }
//   return printFullNameInner;
// }
// const ans = printFullNameOuter("Kuldeep", "jhala");
// ans();
//op: Kuldeep jhala

//----------------------------------

// Example-1

// function hello(x) {
//   const a = "var1";
//   const b = "var2";
//   return function () {
//     console.log(x, a, b);
//   }; //=> this function will return itself(anonymous function) and with that it will return the [x,a,b] as it is of outer function.
// }
// const ans = hello("var0");
// ans();
//op: var0 var1 var2

// Example-2

// function calculate(power) {
//   return function (number) {
//     return number ** power; //'**' means 'power raise to number'.
//   };
// }

//Short syntax for above function.
// const calculate = (power) => (number) => number ** power;

// const square = calculate(2);
// const cube = calculate(3);
// const ans1 = square(3);
// const ans2 = cube(3);
// console.log(ans1); //op: 9
// console.log(ans2); //op: 27

// Example-3

// function func() {
//   let count = 0;
//   if (count == 0) {
//     count = 1;
//     return function () {
//       console.log("1st time called.");
//     };
//   } else {
//     return function () {
//       console.log("Already called.");
//     };
//   }
// }

// Example-4

function func() {
  let count = 0;
  return function () {
    if (count == 0) {
      console.log("1st time called.");
      count = 1;
    } else {
      console.log("Already called.");
    }
  };
}

const fun1 = func();
fun1(); //op: 1st time called.
fun1(); //op: Already called
fun1(); //op: Already called

const fun2 = func();
fun2(); //op: 1st time called.
fun2(); //op: Already called
fun2(); //op: Already called
