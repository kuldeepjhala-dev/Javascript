// => We can pass a function as a argument, that function is called callback function. We can invoke the callbback function inside the parent(eg:one) function.
// function one(cb, x, y, z) {
// 	console.log(1);
// 	console.log(2);
// 	cb(x, y, z);
// 	console.log(3);
// 	console.log(4);
// 	cb(x, y, z);
// }
// function callback(a, b, c) {
// 	console.log("cb-1", a);
// 	console.log("cb-2", b);
// 	console.log("cb-3", c);
// }
// one(callback, 10, 20, 30);

//=> Achieve Functional programming using callback functions
// function calculations(a, b, operation) {
//     return operation(a, b);
// }
// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// console.log(calculations(10, 20, add));
// console.log(calculations(20, 10, subtract));

// => Event Handling using callback functions
// function goodMorning() {
//     console.log("Good morning user");
// }
// const greetMeButton = document
//     .getElementById("clickMe")
//     .addEventListener("click", goodMorning);

// => Synchronous execution of the function
// function printHello() {
// 	console.log("Hello");
// }
// function printBye() {
// 	console.log("Bye");
// }
// printHello();
// printBye();

// => Asynchronous execution of the function. (Unexpected output)
// function printHello() {
// 	setTimeout(() => {
// 		console.log("Hello");
// 	}, 1000);
// }
// function printWorld() {
// 	console.log("World");
// }
// printHello();
// printWorld();
//op: World
//    Hello (After 1 sec)
//But if we want to print "Hello" first and then print "world". But here the printHello() function is asynchronous function. How can we achieve it.

// => Handling Asynchronous function to get desired output. Here the printHello function is asynchronous because of setTimeout method. (Expected output)
// function printHello(cbPrintWorld) {
// 	setTimeout(() => {
// 		console.log("Hello");
// 		cbPrintWorld();
// 	}, 1000);
// }
// function printWorld() {
// 	console.log("World");
// }
// printHello(printWorld);
//op: Hello (After 1 second it will be printed)
//    World

// => Asynchronous execution of the function. (Unexpected output)
// function orderFood(foodOrder) {
//     console.log("1. Order Accepted => ", foodOrder);
//     prepareOrder(foodOrder);
//     recieveFood();
// }
// function prepareOrder() {
//     setTimeout(function () {
//         console.log("2.Dear customer your order => ", foodOrder, " is ready!");
//     }, 1000);
// }
// function recieveFood() {
//     console.log("3. Thank you for orderng food from us please leave ratings!");
// }
// orderFood("sabji, rotli, chaas, athanu, papad, raitu, mava chiki, dal, rice");
// op: (Unexpected output, not in ordered)
// 1. Order Accepted => sabji, rotli, chaas, athanu, papad, raitu, mava chiki, dal, rice
// 3. Thank you for orderng food from us please leave ratings!
// 2.Dear customer your order => sabji, rotli, chaas, athanu, papad, raitu, mava chiki, dal, rice  is ready! (After 1 second it will be printed)

// => Handling Asynchronous function to get desired output. By passing callback function. (Expected output)
// function orderFood(foodOrder) {
//     console.log("1. Order Accepted => ", foodOrder);
//     prepareOrder(foodOrder, recieveFood);
// }
// function prepareOrder(foodOrder, cbRecieveFood) {
//     setTimeout(function () {
//         console.log("2.Dear customer your order => ", foodOrder, " is ready!");
//         cbRecieveFood();
//     }, 1000);
// }
// function recieveFood() {
//     console.log("3. Thank you for orderng food from us please leave ratings!");
// }
// orderFood("sabji, rotli, chaas, athanu, papad, raitu, mava-chiki, dal, rice");
// 1. Order Accepted => sabji, rotli, chaas, athanu, papad, raitu, mava - chiki, dal, rice
// 2.Dear customer your order => sabji, rotli, chaas, athanu, papad, raitu, mava - chiki, dal, rice  is ready! (After 1 second it will be printed)
// 3. Thank you for orderng food from us please leave ratings! (After 1.0001 second it will be printed)

// => Example of callback function
// studentsArray = [
//     { name: "kuldeep", country: "India", score: "100", exam: "Math" },
//     { name: "Raj", country: "USA", score: "93", exam: "English" },
//     { name: "Mohan", country: "India", score: "82", exam: "Math" },
//     { name: "Akash", country: "USA", score: "22", exam: "Math" },
//     { name: "Avkash", country: "India", score: "32", exam: "Math" },
//     { name: "Rakesh", country: "India", score: "30", exam: "Hindi" },
// ];
// function processStudents(data, subject, callback) {
//     for (let i = 0; i < data.length; i++) {
//         //selecting students of subject 'math'
//         if (data[i].exam.toLowerCase() === subject.toLowerCase()) {
//             if (typeof callback === "function") {
//                 //passing that student data to the callback function
//                 callback(data[i]);
//             }
//         }
//     }
// }
// function checkStudentPass(studentObject) {
//     if (studentObject.score >= 60) {
//         console.log(
//             `${studentObject.name} has passed the ${studentObject.exam} exam`,
//         );
//     } else {
//         console.log(
//             `${studentObject.name} has failed the ${studentObject.exam} exam`,
//         );
//     }
// }
// processStudents(studentsArray, "math", checkStudentPass);

