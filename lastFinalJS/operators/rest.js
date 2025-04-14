//eg - 1
function addAll(...nums) {
	console.log(nums); //op: [ 1, 2, 3 ]
	return nums.reduce((a, b) => a + b, 0);
}
console.log(addAll(1, 2, 3)); //op: 6

//eg - 2
const [a, ...rest] = [1, 2, 3, 4];
console.log(a); //op: 1
console.log(rest); //op: [2,3,4]

//eg - 3
const user = { name: "John", age: 25, city: "NY" };
const { name, ...rest2 } = user;
console.log(name); //op: "John"
console.log(rest2); //op: { age: 25, city: 'NY' }

//eg - 4
function multiply(factor, ...nums) {
	return nums.map((n) => n * factor);
}
console.log(multiply(2, 1, 2, 3)); //op: [ 2, 4, 6 ]

//eg - 5
const fruits = ["apple", "banana", "cherry"];
const [first, ...rest3] = fruits;
console.log(first); //op: apple
console.log(rest3); //op: ["banana", "cherry"]

//eg - 6
const settings = { theme: "dark", debug: true, version: "1.0" };
const { theme, ...options } = settings;
console.log(theme); //op: "dark"
console.log(options); //op: {debug: true, version: "1.0"}

//eg - 7
const original = [1, 2, 3];
const [a1, ...clone] = original;
console.log(a1); //op: 1
console.log(clone); //op:  [2, 3]

//eg - 8
const [first1, , third, ...rest4] = [1, 2, 3, 4, 5];
console.log(first1); //op: 1
console.log(third); //op: 3
console.log(rest4); //op: [4, 5]

//eg - 9
const data = {
	id: 1,
	user: { name2: "John", email: "john@example.com", age: 30 },
};
const {
	user: { name2, ...otherInfo },
} = data;
console.log(name); //op: John
console.log(otherInfo); //op: { name: 'John', email: 'john@example.com', age: 30 }

//eg - 10
const obj = {
	get x() {
		console.log("Getter called");
		return 10;
	},
	y: 20,
};
const { x, ...rest5 } = obj;
// Only `x` getter is triggered //op: Getter called
console.log(rest5); //op: { y: 20 }

//eg - 11 (You can use it as a handy way to "remove" specific keys)
const { password, ...userWithoutPassword } = {
	username: "admin",
	password: "secret",
	role: "admin",
};
console.log(userWithoutPassword); //op: { username: ..., role: ... }
console.log(password); //op: secret

//eg - 12 (Rest with default values (array + object))
const [a2 = 0, ...rest6] = [undefined, 2, 3];
console.log(a2); //op: 0
console.log(rest6); //op: [2, 3]
const { name3 = "guest", ...info } = { age: 30 };
console.log(name); //op: John

//eg - 13 (Can destructure and rename + rest)
const user7 = { id: 1, username: "kuldeep", isAdmin1: true };
const { username: renamedUser, ...rest7 } = user7;
console.log(username);
console.log(rest7);