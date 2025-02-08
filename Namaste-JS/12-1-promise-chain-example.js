function createOrder(orderDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderDetails.userId === 1234) {
                console.log("Order Placed");
                orderDetails.orderId = 9999;
                resolve(orderDetails);
            } else {
                reject(new Error("User not valid"));
            }
        }, 3000);
    });
}

function proceedToPayement(orderDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderDetails.orderId === 9999 && orderDetails.userId === 1234) {
                console.log("Payement Successfull");
                orderDetails.payementId = 4321;
                resolve(orderDetails);
            } else {
                reject(new Error("Order ID not matching or user not valid"));
            }
        }, 3000);
    });
}

function showOrderSummary(orderDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderDetails.orderId === 9999) {
                console.log(
                    `${orderDetails.userName} order summary for order id ${orderDetails.orderId}  ${orderDetails.orderList}`,
                );
                orderDetails.billingAmount = 20000;
                resolve(orderDetails);
            } else {
                reject(new Error("Order Id not matching"));
            }
        }, 3000);
    });
}

function updateWalletBalance(orderDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderDetails.orderId === 9999 && orderDetails.userId === 1234) {
                if (orderDetails.userBalance < orderDetails.billingAmount) {
                    reject(new Error("Insufficient Balance"));
                }
                orderDetails.userBalance =
                    orderDetails.userBalance - orderDetails.billingAmount;
                orderDetails.transactionStatus = "completed";
                console.log("Transaction Completed");
                resolve(orderDetails);
            } else {
                reject(new Error("Order ID not matching or User not valid"));
            }
        }, 3000);
    });
}

const userDetails = {
    userId: 1234,
    userName: "kuldeep",
    userBalance: 4000000,
    orderList: ["item1", "item2", "item3"],
    transactionStatus: "pending",
};

createOrder(userDetails)
    .then((orderDetails) => {
        return proceedToPayement(orderDetails);
    })
    .catch((payementStatus) => {
        return payementStatus;
    })
    .then((orderDetails) => {
        return showOrderSummary(orderDetails);
    })
    .then((orderDetails) => {
        console.log(orderDetails);
        return updateWalletBalance(orderDetails);
    })
    .catch((err) => {
        console.log(err.message);
    });
