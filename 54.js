//callback function

function myFun1(name) {
    console.log("Inside fun-1");
    console.log("param name ", name);
}

function myFun2(callback) {
    console.log("Inside fun-2");
    console.log("calling callback function");
    callback("Kuldeep");
}

console.log("Called my myFun2 ");
myFun2(myFun1);