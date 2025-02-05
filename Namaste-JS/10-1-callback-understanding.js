function getUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetching user...");
        callback({ id: userId, name: "Alice" }); // Passing user object
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log(`Fetching orders for user ${userId}...`);
        callback([
            { id: 101, item: "Laptop" },
            { id: 102, item: "Phone" },
        ]); // Passing orders array
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        console.log(`Fetching details for order ${orderId}...`);
        callback({ orderId, item: "Laptop", price: 1000 }); // Passing order details
    }, 1000);
}

function processOrder(orderDetails, callback) {
    setTimeout(() => {
        console.log(`Processing order ${orderDetails.orderId}...`);
        callback("Success"); // Passing the final result
    }, 1000);
}

getUser(1, (user) => {
    console.log("User:", user);

    getOrders(user.id, (orders) => {
        console.log("Orders:", orders);

        getOrderDetails(orders[0].id, (orderDetails) => {
            console.log("Order Details:", orderDetails);

            processOrder(orderDetails, (result) => {
                console.log("Order Processed:", result);
            });
        });
    });
});

//handling callback hell using promises

getUser(cart)
    .then(function (user) {
        return getOrders(orderId);
    })
    .then(function (orderDetails) {
        return getOrderDetails(user);
    })
    .then(function (orders) {
        return processOrder(orders);
    });
