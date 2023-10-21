//default parameters

//Old way for default parameters
// function addTwoNo(a, b) {
//   if (b == undefined) {
//       b = 0;
//   or b = 1
//   or b = 10
//     }
//     console.log(a + b);
// }

//new way for default parameters
function addTwoNo(a, b = 10) {
  console.log(a + b);
}

addTwoNo(10); //op:20
addTwoNo(10, 20); //op:30
