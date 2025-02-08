const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
	.then(function (orderId) {
		console.log(orderId);
		return orderId;
	})
	.catch(function (err) {
		console.log("specific catch for it above promises");
	})
	.then(function (orderId) {
		//It will also return us an promise in the below chain
		return proceedToPayement(orderId);
	})
	.then(function (payementStatus) {
		console.log(payementStatus);
		return payementStatus;
	})
	.catch(function (err) {
		console.log(err.message);
	})
	.then(function () {
		console.log("No matter what I will definitely execute");
	});

function createOrder(cart) {
	const pr = new Promise(function (resolve, reject) {
		if (!validateCart(cart)) {
			const err = new Error("Cart is not valid");
			reject(err);
		}
		const orderId = "12345";
		if (orderId) {
			console.log("Generating orderID");
			setTimeout(() => {
				resolve(orderId);
			}, 3000);
		}
	});
	return pr;
}

function validateCart(cart) {
	return true;
}

function proceedToPayement(orderId) {
	return new Promise((resolve, reject) => {
		console.log("Payement process started wait for some time");
		setTimeout(function () {
			resolve("Payement Successful");
		}, 5000);
	});
}
