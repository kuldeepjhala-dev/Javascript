//Param destructuing
const person = {
  name: "kuldeep",
  gender: "male",
};

//we can pass other normal params with  object param 
function printParamsOfObject({ name, gender, age },str="hello") {
  console.log("name => ", name);
    console.log("gender => ", gender);
    //if some property is not present in the object and we are using i then it will be undefined
    console.log("age", age);
    console.log(str);//hello
}

printParamsOfObject(person); //op: name =>  kuldeep, gender =>  male, age undefined
