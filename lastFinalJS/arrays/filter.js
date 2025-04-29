//eg-1 (Filter out numbers less than 10)
// const numbers = [5, 12, 8, 20, 3];
// const result = numbers.filter((num) => num >= 10);
// console.log(result); //op: [12, 20]

//eg-2 (Filter Even numbers from array)
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 == 0);
console.log(evenNumbers); //op: [ 2, 4, 6 ]

//eg-3 (Filter users above age 18)
const users = [
	{ name: "kuldeep", age: 22 },
	{ name: "Ravi", age: 16 },
	{ name: "Ankit", age: 19 },
];
const adults = users.filter((user) => user.age > 18);
console.log(adults); //op: [ { name: 'kuldeep', age: 22 }, { name: 'Ankit', age: 19 } ]

//eg-4 (Filter string with more than 5 characters)
const words = ["car", "airplane", "bike", "motorcycle"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords); //op: [ 'airplane', 'motorcycle' ]

//eg-5 (Remove falsy values(null, undefined, 0, false, ""))
const values = [0, "Hello", false, 42, "", null];
const truthyValues = values.filter((value) => value);
console.log(truthyValues); //op: [ 'Hello', 42 ]

//eg-6 (E-commerse - Filter Products in stock)
const products = [
	{ name: "Shirt", inStock: true },
	{ name: "Pants", inStock: false },
	{ name: "Shoes", inStock: true },
];
const available = products.filter((p) => p.inStock);
console.log(available); //op: [ { name: 'Shirt', inStock: true }, { name: 'Shoes', inStock: true } ]

//eg-7 (Search Suggestions - Filter by Keyword)
const skills = ["Javascript", "Java", "Python", "PHP"];
const search = "ja";
const filteredData = skills.filter((skill) =>
	skill.toLowerCase().includes(search.toLowerCase()),
);

//eg-8 (E-Commerce - Filter products in stock)
const products = []