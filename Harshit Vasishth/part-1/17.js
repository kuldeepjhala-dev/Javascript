//nested if else

let winningNumber = 19;
let userGuss = prompt("Guss a number");
console.log(typeof +userGuss + " " + userGuss);

if (+userGuss === winningNumber) {
  console.log("your guess is right !!");
} else {
  if (userGuss < winningNumber) {
    console.log("too low");
  } else {
    console.log("too high");
  }
}
