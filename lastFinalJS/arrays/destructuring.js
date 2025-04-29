//eg-1
// const [a, b] = [1, 2];
// console.log(a); //op: 1
// console.log(b); //op: 2

//eg-2
// const [a, , c] = [1, 2, 3];
// console.log(a); //op: 1
// console.log(c); //op: 3

//eg-3
// const response = await axios.get('/api/users');
// const [firstUser, secondUser] = response.data;

//eg-4 (Swapping Variables)
// let a = 5, b = 10;
// [a, b] = [b, a];
// console.log(a); //op: 10
// console.log(b); //op: 5

//eg-5 (Returning Multiple Values from Function)
// (Cleaner than using index access like result[0], result[1])
// function getCoordinates() {
// 	return [37.77, -122.81];
// }
// const [lat, lng] = getCoordinates();
// console.log(lat, lng); //op: 37.77 -122.81

//eg-6
// const [count, setCount] = useState(0);

//eg-7
// const colors = ['red', 'green', 'blue', 'yellow'];
// const [, secondColor, , fourthColor] = colors;
// console.log(secondColor); //op: green
// console.log(fourthColor); //op: yellow

//eg-8
// const [name = 'guest'] = [];
// console.log(name); //op: guest

