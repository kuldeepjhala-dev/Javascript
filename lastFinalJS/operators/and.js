//eg - 1
let isLoggedIn = true;
let hasPermission = true;
if (isLoggedIn && hasPermission) {
	console.log("Access Granted");
} else {
	console.log("Access denied");
}
//op: Access Granted

//eg - 2
let user = null;
let userName = user && user.name;
console.log(userName); //op: null

//eg - 3
let isAdmin = true;
isAdmin && console.log("Welcome Admin"); //op: "Welcome Admin"

//eg - 4
console.log(true && "Hello"); //op: Hello
console.log(false && "Hello"); //op: False
console.log(0 && 42); //op: 0
console.log("Hi" && 123); //op: 123

//eg - 5
// const showMessage = true;
// return <div>{showMessage && <p>Hello, user!</p>}</div>;

//eg - 6 (Form-validation)
const username = "kuldeep";
const password = "supersecrure123";
if (username && password.length > 8) {
	console.log("Form is valid!");
} else {
	console.log("Invalid form data");
}
//op: Form is valid!

//eg - 7 (User Login)
const isLoggedIn2 = true;
const isVerified = true;
isLoggedIn2 && isVerified && console.log("Welcome!");
//op: welcome

//eg - 8 (Feature Toggle)
const user2 = { role: "admin", isLoggedIn: true };
const features = { betaAccess: true };
user2.isLoggedIn &&
	user2.role === "admin" &&
	features.betaAccess &&
	console.log("Beta Feature Enabled");
//op: Beta Feature Enabled

//eg - 9 (React Conditional Render)
// { isAuthenticated && <Profile /> }

//eg - 10 (Shopping Cart)
const cartItems = [1, 2, 3];
const user3 = { isLoggedIn: true };
user3.isLoggedIn &&
	cartItems.length > 0 &&
	console.log("Show  Checkout Button");
//op: Show Checkout Button

//eg - 11 (API call Guard)
const isLoading = true;
const hasError = true;
isLoading && hasError && console.log("Don't call API. Fix error first");
//op: Don't call API. Fix error first

//eg - 12 (File Upload)
const file = { name: "resume.pdf", size: 4 * 1024 * 1024 }; //4mb
file && file.size <= 5 * 1024 * 1024 && console.log("Uploading file.....");
//op: Uploading file.....

//eg - 13 (Admin Dashboard Access)
const user4 = { isLoggedIn: true, role: "admin" };
user4.isLoggedIn && user4.role === "admin" && console.log("Show Admin Panel");

//eg - 14 (Dark Mode Switch)
const user5 = {
	isPremium: true,
	settings: { theme: "dark" },
};
user5.settings.theme === "dark" &&
	user5.isPremium &&
	console.log("Enable dark mode features");
//op: Enable dark mode features

//eg - 15 (Payment Success Page)
const payementSuccess = "success";
const orderConfirmed = true;
payementSuccess === "success" &&
	orderConfirmed &&
	console.log("Thank  you for your order!");
//op: Thank  you for your order!

//eg - 16 (Newsletter Subscription)
const email = "user@example.com";
email && email.includes("@") && console.log("Subscribed successfully");
//op: Subscribed successfully

//eg - 17 (Location Based Offer)
const user6 = { location: "India", isSubscribed: true };
user6.location === "India" &&
	user6.isSubscribed &&
	console.log("Special offer for Indian users!");
//op: Special offer for Indian users!

//eg - 18 (Update Profile Button)
const form = { isDirty: true, isValid: true };
form.isDirty && form.isValid && console.log("Enable Update Button");
//op: Enable Update Button

//eg - 19 (Real-Time Chat)
const socketConnected = true;
const message = "Hello";
socketConnected && message.trim().length > 0 && console.log("Message Sent!");

//eg - 20 (Search Function Trigger)
const query = "react";
const isLoading2 = false;
query.length >= 3 && !isLoading2 && console.log("Trigger search");
//op: Trigger search

//eg - 21 (logic of and operator)
const a = null;
const b = true;
console.log(b && a)