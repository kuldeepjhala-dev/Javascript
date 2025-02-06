function orderFood(foodOrder) {
	console.log("1. Order Accepted => ", foodOrder);
	prepareOrder(foodOrder, recieveFood);
}
function prepareOrder(foodOrder, cbRecieveFood) {
	setTimeout(function () {
		console.log("2.Dear customer your order => ", foodOrder, " is ready!");
		cbRecieveFood();
	}, 1000);
}
function recieveFood() {
	console.log("3. Thank you for orderng food from us please leave ratings!");
}
orderFood("sabji, rotli, chaas, athanu, papad, raitu, mava-chiki, dal, rice");