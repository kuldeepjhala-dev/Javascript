//=>before promise
// const cart = ["shoes", "pants", "kurta"];
// api.createOrder(cart, function (orderId) {
// 	api.proceedToPayement(orderId);
// });
//Above we are passing the callback function to another function.

// =>After Promise
// const promiseObject = api.createOrder(cart);
//promise is an object with some data values
// api.createOrder() is an async operation
//when js engine executes the "const promise = api.createOrder(cart);" then it will return us a promise object where right now data will be undefined{data: undefined}, and the program will start executing forward. As the api.createOrder() is a async function so it will return the data and the promise object will be updated. {data: orderDetails}.
//We can use .then() method on the promise object. And we will pass the callbackFunction in promiseObject.then(callbackFunction).
// promiseObject.then(function (orderId) {
// 	proceedToPayement(orderId);
// });
//Above we are attachining the callback function to the .then() function
//so earlier promiseObject = {data: undefined} after the api.createOrder() which is async method returns the promise the promiseObject = {data: orderDetails} will be filled.
//Main reason behind using promises is that once we recieve promise in the promiseObject then it will definitely 100% run the callBack function attached to that promise object.

// => On hitting the Github api will send us an 'promise'.
const GITHUB_API = "https://api.github.com/users/kuldeepjhala-dev";
const promiseObjectUser = fetch(GITHUB_API); //Add a debugger here to view promise object
//promise object has 3 things in it.
//1. promiseType : Promise
//2. promiseState : "pending" or "fullfilled"
//3. promiseResult : Data of promise. Until we dont recieve any data this is by default 'undefined'
//What will be the output of below console.logs?
// console.log(promiseObjectUser);
// setTimeout(function () {
// 	console.log(promiseObjectUser);
// },2000)
//Once the promise will return the response. After that .then() function will be called.
// promiseObjectUser.then(function (promiseResult) {
// 	console.log(promiseResult);
// })

// => About Promises and its definitions
//Promise object can be only resolved once. Either it is pending or it is fullfilled.
//Promise objects are immutable.
//Promise object is a placeholder for a certain period of time until we recieev a value from asynchronous operation.
//It is a container for a future value.
//A promise is a object representing the eventual completion or failure of an asynchronous operation.

// =>Calllback Hell

const cart = ["shoes", "pants", "kurta"];
createOrder(cart,);

