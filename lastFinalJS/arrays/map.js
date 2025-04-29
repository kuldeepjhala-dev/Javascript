//eg-1 (Multiply each number by 10)
// const numbers = [1, 2, 3, 4];
// const result = numbers.map((num) => num * 10);
// console.log(result); //op: [ 10, 20, 30, 40 ]

//eg-2 (Capitalize the first letter of each name)
// const names = ["kuldeep", "jhala", "sinh"];
// const capitalize = names.map(
// 	(name) => name.charAt(0).toUpperCase() + name.slice(1),
// );
// console.log(capitalize); //op: [ 'Kuldeep', 'Jhala', 'Sinh' ]

//eg-3 (Extract name from an array of user objects)
// const users = [
// 	{ id: 1, name: "kuldeep" },
// 	{ id: 2, name: "Ankit" },
// ];
// const userNames = users.map(function (user) {
//     return user.name;
// })
// console.log(userNames); //op: [ 'kuldeep', 'Ankit' ]

//eg-4 (Convert temperatures from celsius to Fahrenheit)
// const celsiu = [0, 20, 30];
// const fahrenheit = celsiu.map(temperature => (temperature * 9 / 5) + 32);
// console.log(fahrenheit); //op: [ 32, 68, 86 ]

//eg-5 (Format prices to include a currency symbol)
// const price = [100, 250.5, 3000];
// const formattedPrice = price.map((price) => `$${price.toFixed(2)}`);
// console.log(formattedPrice); //op: [ '$100.00', '$250.50', '$3000.00' ]

//eg-6 (E-Commerce - Displaying Product Prices)
// const products = [
// 	{ name: "Shirt", price: 250 },
// 	{ name: "Jeans", price: 1200 },
// ];
// console.log(products.map(product => `Name = ${product.name}, Price = $${product.price}`));
// //op: [ 'Name = Shirt, Price = $250', 'Name = Jeans, Price = $1200' ]

//eg-7 (Dashboard - Visualizing Data)
// const rawData = [100, 120, 150];
// const growth = rawData.map((user, index) => {
//     return { month: `Month ${index + 1}`, users: user }
// });
// console.log(growth);

//eg-8 (Resume Builder - Capitilizing skills)
// const skills = ["javascript", "react", "node.js"];
// const formattedSkills = skills.map((skill) => skill.toUpperCase());
// console.log(formattedSkills); //op: [ 'JAVASCRIPT', 'REACT', 'NODE.JS' ]

//eg-9 (Format Date Strings)
// const rawDates = ["2025-04-10", "2025-05-01"];
// const formattedDates = rawDates.map((date) => new Date(date).toDateString());
// console.log(formattedDates); //op: [ 'Thu Apr 10 2025', 'Thu May 01 2025' ]