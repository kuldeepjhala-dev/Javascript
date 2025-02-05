//undefined
let firstName1;
console.log(firstName1); //op:undefined

var firstName2;
console.log(firstName2); //op:undefined

//in const compulsary we have to assign a value while defining
const firstName3 = 10;
console.log(firstName3); //op:10

let nullEg = null;
console.log(typeof nullEg); //op:object (referencede datatype) it is a bug, error
console.log(nullEg); //op:null

//BigInt
let myNumber = 123; //limit is 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //op:9007199254740991

let myNumber2 = BigInt(90071992547409911992547); //big int
console.log(myNumber2);
let myNumber3 = 90071992547409911992547n; //big int
console.log(myNumber3);
//we cant perform arithmetic operation on BigInt and number, either both should be number or both should be BigInt

