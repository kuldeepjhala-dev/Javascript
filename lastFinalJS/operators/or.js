//eg - 1
let isWeekend = false;
let isHoliday = true;
if (isWeekend || isHoliday) {
	console.log("You can relax!");
} else {
	console.log("Time to work");
}
//op: You can relax!

//eg - 2
let userInput = "";
let name = userInput || "Guest";
console.log(name); //op: Guest

//eg - 3
console.log("Hello" || "world"); //op: Hello
console.log(0 || 42); //op: 42
console.log(null || undefined); //op: undefined

//eg - 4
function greet(name) {
	let finalName = name || "Anonymous";
	console.log("Hello, " + finalName);
}
greet(); //op: Hello Anonymous
greet("Kuldeep"); //op: Hello Kuldeep

//eg - 5
// const error = "Form not submittes!";
// return (<div>
//     {error || <p>All Good!</p>}
// </div>)

//eg - 6
let input = null;
let backup = undefined;
let finalValue = input || backup || "Default";
console.log(finalValue); //op: Default

//eg - 7
// let browserFeature = window.customFeature || "Fallback enabled";
// console.log(browserFeature);

//eg - 8
// const PORT = process.env.PORT || 3000;
// console.log(`Server running on PORT ${PORT}`);

//eg - 9
// {isLoggedIn || <Redirect to="/login"/>}

//eg - 10
function getFirstAvailableOption(a, b, c) {
	return a || b || c || "No valid options";
}
console.log(getFirstAvailableOption(null, undefined, "", "Option")); //op: No valid options

//eg - 11
let user = null;
let name2 = (user && user.name) || "No user found";
console.log(name2); //op: No user found

//eg - 12
let input2 = 0;
let value = input || "No input";
console.log(value); //op: No input

//eg - 13 (If no page is specified in the URL, it defaults to page 1)
// const page = req.query.page || 1;

//eg - 14 (Display "Guest" if user.name is falsy.)
{
	/* <input value={user.name || "Guest"} /> */
}

//eg - 15 (Prevent Empty Titles in Blog Posts)
// const title = post.title || "untitled POST";

//eg - 16 (Fallback for Optional Fields)
// const city = user.address.city || "Not Provided";

//eg - 17 (WebSocket or HTTP Fallback)
// const protocol = window.WebSocket || window.XMLHttpRequest;

//eg - 18 (WebSocket or HTTP Fallback)
// const uploadPath = config.uploadPath || "/uploads";

//eg - 19 (Use Cached Value or Fetch New)
// const data = cache[key] || fetchDataFromDB(key);

//eg - 20 (Login Redirect Logic)
// const redirectTo = user.redirectAfterLogin || "/home";

//eg - 21 (Textarea Default Message)
{
	/* <textarea placeHolder={not || "Write your thoughts here..."} /> */
}

//eg - 22 (Choose API Endpoint)
// const endPoint = useMockData || "https://api.production.com/data";

//eg - 23 (Prevent Missing Keys in Maps)
// const label = labelMap[key] || "Unknown Label";
