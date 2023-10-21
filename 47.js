//hoisting

//Here if we use simple function declaration method to define function then we can call that funciton in above line. But is should be define below it.

hello(); //op:Hii my name is kuldeep

function hello() {
  console.log("Hii my name is kuldeep");
}

//Note : This will only work when we are defining function using funciton declaration method. It will not work with function Expression and Arraw function method of declaration.

//It will also not work with variable declarations

// console.log(nos); //op: It will generate error
// nos = 20;
