//eg - 1
const input = undefined;
const value = input ?? "default";
console.log(value); //op: default

//eg - 2
const theme = null;
const userTheme = theme ?? "Light";
console.log(userTheme); //op: Light

//eg - 3
const count = 0;
const displayCount = count ?? 5;
console.log(displayCount); //op: 0

//eg - 4
const message = "";
const output = message ?? "No message";
console.log(output); //op:

//eg - 5
function getUsername() {
	return null;
}
const name = getUsername() ?? "Anonymous";
console.log(name); //op: Anonymous

//eg - 6
const config = {
	retries: undefined,
};
const maxRetries = config.retries ?? 3;
console.log(maxRetries); //op: 3

//eg - 7
// const name = user.name ?? "Guest";
// return <h1>Hello, {name}</h1>;

//eg - 8
const a = null;
const b = undefined;
const c = "Hello";
const result = a ?? b ?? c;
console.log(result); //op: Hello

//eg - 9
const data = [null, undefined, "valuessss"];
const firstValid = data.find(item => item !== undefined && item !== null) ?? "fallback";
console.log(firstValid); //op: value

//eg - 10
const data2 = [null, undefined];
const firstValid2 = data2.find(item => item !== undefined && item !== null) ?? "fallback";
console.log(firstValid2); //op: fallback

//eg - 11
// function getInput() {
//     return document.getElementById("name").value ?? "Unnamed"
// }
// getInput();

