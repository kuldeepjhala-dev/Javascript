//eg - 1
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); //op: Adult

//eg - 2
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome Back!" : "Please Log in";
console.log(message); //op: Welcome Back!

//eg - 3
function getFee(isMember) {
	return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true)); //op: $2.00
console.log(getFee(false)); //op: $10.00

//eg - 4
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); //op: B

//eg - 5
// const isdarkMode = true;
// return (
//     <div className={isDarkMode ? "dark-theme" : "light-theme"}>
//         Hello World
//     </div>
// )

//eg - 6 (Return "Even" if a number is even, else return "Odd")
function checkEvenOdd(num) {
	return num % 2 == 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(2)); //op: Even
console.log(checkEvenOdd(3)); //op: Odd

//eg - 7 (Return "Adult" if age is 18 or above, else "Minor")
function getAgeStatus(age) {
	return age >= 18 ? "Adult" : "Minor";
}
console.log(getAgeStatus(4)); //op: Minor
console.log(getAgeStatus(19)); //op: Adult
console.log(getAgeStatus(18)); //op: Adult

//eg - 8 (Return "Positive", "Negative", or "Zero" using nested ternary)
function getSign(num) {
	return num < 0 ? "Negative" : num > 0 ? "Positive" : "Zero";
}
console.log(getSign(1)); //op: Positive
console.log(getSign(0)); //op: Zero
console.log(getSign(-2)); //op: Negative

//eg - 9 (Assign a discount: if user is premium, 20%, else 5%)
let isPremium = true;
let discount = isPremium ? "20% Discount" : "5% Discount";
console.log(discount);

//eg - 10 (Return the larger of two numbers)
function maxNum(a, b) {
	return a > b ? a : b;
}
console.log(maxNum(10, 20)); //op: 20

//eg - 11 (Return the smallest of 3 numbers using nested ternary)
// function minOfThree(a, b, c) {
//     return (a < b) ? (a < c) ? a :
//         (b < c) ? b : c
// }

//eg - 12 (Return a grade based on marks)
// >= 90: "A"
// >= 75: "B"
// >= 60: "C"
// else: "F"
// function getGrade(marks) {
    
// }