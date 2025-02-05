//=>
// console.log("hii")
// console.log("hello")
// console.log("bye")

//=>
// console.log("hii");
// setTimeout(function () {
// 	console.log("hello");
// }, 5000);
// console.log("bye");

//=>
const cart = ["shoes", "pants", "kurtas"];
api.createOrder(cart, function () {
	api.proceedToPayement(function () {
		api.showOrderSummary(function () {
			api.updateWallet;
		});
	});
});
//above is having callback hell. Code is expanding horizontally instead of vertically.
//unmaintainable code structure.
//Pyramid of doom
