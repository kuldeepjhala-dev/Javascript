//window object and "use strict" used in function
console.log(this); //op: it will return window object which is the gloabl object of js.

function myfun() {
  "use strict";
  console.log(this);
}

myfun(); //op:undefined
//output is undefined because we have use "use strict" which will limit its scope.
//If we have not used "use strict" then it will return window object because window object consist of myFun() method.

window.myfun(); //op: window object

console.log(window); //op: window object
