//Higher order functions :-  A function that takes a function as an argument or returns a function from it that is called higher order function.

// function x() {
// 	console.log("kuldeep");
// }
// function y(x) {
// 	x();
// }
// Above the 'x' function is the callback function.
// The 'y' function is the higher-order-function.

const radius = [3, 1, 2, 4];
const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculateArea(radius));
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

//above calculate is higherOrder function and the area, circumference and diameter are callback function.
